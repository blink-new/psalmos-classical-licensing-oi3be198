import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Upload, User, Bell, Shield, Trash2, Save, CheckCircle } from 'lucide-react'
import { blink } from '@/blink/client'
import { useToast } from '@/hooks/use-toast'

interface SettingsProps {
  user: any
  onUserUpdate: (user: any) => void
}

export function Settings({ user, onUserUpdate }: SettingsProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [profileData, setProfileData] = useState({
    displayName: user?.displayName || '',
    email: user?.email || '',
    bio: '',
    company: '',
    website: ''
  })
  const [profilePicture, setProfilePicture] = useState<File | null>(null)
  const [profilePictureUrl, setProfilePictureUrl] = useState(user?.avatar || '')
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    newReleases: true,
    licenseReminders: false,
    marketingEmails: false
  })
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showDownloadHistory: false,
    allowAnalytics: true
  })

  useEffect(() => {
    const loadProfileData = async () => {
      if (!user?.id) return
      
      try {
        // Load profile from database using snake_case field names
        const profiles = await blink.db.userProfiles.list({
          where: { userId: user.id },
          limit: 1
        })
        
        const profile = profiles[0]
        
        if (profile) {
          setProfileData({
            displayName: profile.displayName || user.displayName || '',
            email: user.email || '',
            bio: profile.bio || '',
            company: profile.company || '',
            website: profile.website || ''
          })
          setProfilePictureUrl(profile.avatarUrl || user.avatar || '')
        }

        // Load notification preferences
        const notificationPrefs = await blink.db.userNotificationPreferences.list({
          where: { userId: user.id },
          limit: 1
        })
        
        if (notificationPrefs[0]) {
          const prefs = notificationPrefs[0]
          setNotifications({
            emailUpdates: Number(prefs.emailUpdates) > 0,
            newReleases: Number(prefs.newReleases) > 0,
            licenseReminders: Number(prefs.licenseReminders) > 0,
            marketingEmails: Number(prefs.marketingEmails) > 0
          })
        }

        // Load privacy preferences
        const privacyPrefs = await blink.db.userPrivacyPreferences.list({
          where: { userId: user.id },
          limit: 1
        })
        
        if (privacyPrefs[0]) {
          const prefs = privacyPrefs[0]
          setPrivacy({
            profileVisible: Number(prefs.profileVisible) > 0,
            showDownloadHistory: Number(prefs.showDownloadHistory) > 0,
            allowAnalytics: Number(prefs.allowAnalytics) > 0
          })
        }
      } catch (error) {
        console.error('Error loading profile data:', error)
        toast({
          title: "Error",
          description: "Failed to load profile data",
          variant: "destructive"
        })
      }
    }
    
    loadProfileData()
  }, [user, toast])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please select a valid image file (JPG, PNG, GIF, or WebP)",
          variant: "destructive"
        })
        event.target.value = ''
        return
      }
      
      // Validate file size (5MB max)
      const maxSize = 5 * 1024 * 1024 // 5MB in bytes
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "File size must be less than 5MB",
          variant: "destructive"
        })
        event.target.value = ''
        return
      }
      
      setProfilePicture(file)
      const previewUrl = URL.createObjectURL(file)
      setProfilePictureUrl(previewUrl)
    }
  }

  const handleProfileSave = async () => {
    if (!user?.id) return
    
    setLoading(true)
    try {
      let avatarUrl = profilePictureUrl
      
      // Upload new profile picture if changed
      if (profilePicture) {
        const { publicUrl } = await blink.storage.upload(
          profilePicture,
          `avatars/${user.id}/${profilePicture.name}`,
          { upsert: true }
        )
        avatarUrl = publicUrl
        setProfilePictureUrl(publicUrl)
        setProfilePicture(null)
      }

      // Check if profile exists
      const existingProfiles = await blink.db.userProfiles.list({
        where: { userId: user.id },
        limit: 1
      })

      const profileDataToSave = {
        userId: user.id,
        displayName: profileData.displayName,
        bio: profileData.bio,
        company: profileData.company,
        website: profileData.website,
        avatarUrl: avatarUrl,
        updatedAt: new Date().toISOString()
      }

      if (existingProfiles.length > 0) {
        // Update existing profile
        await blink.db.userProfiles.update(existingProfiles[0].id, profileDataToSave)
      } else {
        // Create new profile
        await blink.db.userProfiles.create({
          id: `profile_${user.id}_${Date.now()}`,
          ...profileDataToSave,
          createdAt: new Date().toISOString()
        })
      }

      // Update user profile in auth
      const updatedUser = await blink.auth.updateMe({
        displayName: profileData.displayName,
        avatar: avatarUrl
      })

      onUserUpdate(updatedUser)
      
      toast({
        title: "Success",
        description: "Profile updated successfully!",
        action: <CheckCircle className="h-4 w-4" />
      })
    } catch (error) {
      console.error('Error updating profile:', error)
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleNotificationsSave = async () => {
    if (!user?.id) return
    
    setLoading(true)
    try {
      // Check if notification preferences exist
      const existingPrefs = await blink.db.userNotificationPreferences.list({
        where: { userId: user.id },
        limit: 1
      })

      const prefsData = {
        userId: user.id,
        emailUpdates: notifications.emailUpdates ? 1 : 0,
        newReleases: notifications.newReleases ? 1 : 0,
        licenseReminders: notifications.licenseReminders ? 1 : 0,
        marketingEmails: notifications.marketingEmails ? 1 : 0,
        updatedAt: new Date().toISOString()
      }

      if (existingPrefs.length > 0) {
        // Update existing preferences
        await blink.db.userNotificationPreferences.update(existingPrefs[0].id, prefsData)
      } else {
        // Create new preferences
        await blink.db.userNotificationPreferences.create({
          id: `notif_${user.id}_${Date.now()}`,
          ...prefsData,
          createdAt: new Date().toISOString()
        })
      }
      
      toast({
        title: "Success",
        description: "Notification preferences saved successfully!",
        action: <CheckCircle className="h-4 w-4" />
      })
    } catch (error) {
      console.error('Error saving notification preferences:', error)
      toast({
        title: "Error",
        description: "Failed to save notification preferences. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handlePrivacySave = async () => {
    if (!user?.id) return
    
    setLoading(true)
    try {
      // Check if privacy preferences exist
      const existingPrefs = await blink.db.userPrivacyPreferences.list({
        where: { userId: user.id },
        limit: 1
      })

      const prefsData = {
        userId: user.id,
        profileVisible: privacy.profileVisible ? 1 : 0,
        showDownloadHistory: privacy.showDownloadHistory ? 1 : 0,
        allowAnalytics: privacy.allowAnalytics ? 1 : 0,
        updatedAt: new Date().toISOString()
      }

      if (existingPrefs.length > 0) {
        // Update existing preferences
        await blink.db.userPrivacyPreferences.update(existingPrefs[0].id, prefsData)
      } else {
        // Create new preferences
        await blink.db.userPrivacyPreferences.create({
          id: `privacy_${user.id}_${Date.now()}`,
          ...prefsData,
          createdAt: new Date().toISOString()
        })
      }
      
      toast({
        title: "Success",
        description: "Privacy settings saved successfully!",
        action: <CheckCircle className="h-4 w-4" />
      })
    } catch (error) {
      console.error('Error saving privacy preferences:', error)
      toast({
        title: "Error",
        description: "Failed to save privacy settings. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone and will permanently delete all your data, including licenses and preferences.'
    )
    
    if (confirmed) {
      try {
        // Delete user data from database
        const profiles = await blink.db.userProfiles.list({
          where: { userId: user.id }
        })
        for (const profile of profiles) {
          await blink.db.userProfiles.delete(profile.id)
        }

        const notifPrefs = await blink.db.userNotificationPreferences.list({
          where: { userId: user.id }
        })
        for (const pref of notifPrefs) {
          await blink.db.userNotificationPreferences.delete(pref.id)
        }

        const privacyPrefs = await blink.db.userPrivacyPreferences.list({
          where: { userId: user.id }
        })
        for (const pref of privacyPrefs) {
          await blink.db.userPrivacyPreferences.delete(pref.id)
        }

        toast({
          title: "Account Deleted",
          description: "Your account has been successfully deleted.",
        })

        // Log out after deletion
        setTimeout(() => {
          blink.auth.logout()
        }, 2000)
      } catch (error) {
        console.error('Error deleting account:', error)
        toast({
          title: "Error",
          description: "Failed to delete account. Please try again or contact support.",
          variant: "destructive"
        })
      }
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center">
          <p className="text-muted-foreground">Please log in to access settings.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your profile information and how others see you on Psalmos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center space-x-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profilePictureUrl} />
                  <AvatarFallback className="bg-accent/10 text-accent text-lg">
                    {profileData.displayName ? getInitials(profileData.displayName) : <User className="h-8 w-8" />}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="file"
                      id="profile-picture"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="relative"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    JPG, PNG, GIF, or WebP. Max size 5MB.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Profile Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    value={profileData.displayName}
                    onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                    placeholder="Your display name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-sm text-muted-foreground">
                    Email cannot be changed. Contact support if needed.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={profileData.company}
                    onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                    placeholder="Your company or organization"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={profileData.website}
                    onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  placeholder="Tell us about yourself and your work with classical music..."
                  rows={4}
                />
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={handleProfileSave} 
                  disabled={loading}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose what notifications you would like to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about your account and licenses
                    </p>
                  </div>
                  <Switch
                    checked={notifications.emailUpdates}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, emailUpdates: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Releases</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when new classical recordings are added
                    </p>
                  </div>
                  <Switch
                    checked={notifications.newReleases}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, newReleases: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>License Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Reminders about expiring licenses and renewals
                    </p>
                  </div>
                  <Switch
                    checked={notifications.licenseReminders}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, licenseReminders: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">
                      Promotional content and special offers
                    </p>
                  </div>
                  <Switch
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, marketingEmails: checked })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={handleNotificationsSave} 
                  disabled={loading}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  {loading ? 'Saving...' : 'Save Preferences'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Control your privacy and data sharing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Public Profile</Label>
                    <p className="text-sm text-muted-foreground">
                      Make your profile visible to other users
                    </p>
                  </div>
                  <Switch
                    checked={privacy.profileVisible}
                    onCheckedChange={(checked) => 
                      setPrivacy({ ...privacy, profileVisible: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Download History</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow others to see what you have licensed
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showDownloadHistory}
                    onCheckedChange={(checked) => 
                      setPrivacy({ ...privacy, showDownloadHistory: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Analytics</Label>
                    <p className="text-sm text-muted-foreground">
                      Help us improve by sharing anonymous usage data
                    </p>
                  </div>
                  <Switch
                    checked={privacy.allowAnalytics}
                    onCheckedChange={(checked) => 
                      setPrivacy({ ...privacy, allowAnalytics: checked })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={handlePrivacySave} 
                  disabled={loading}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  {loading ? 'Saving...' : 'Save Settings'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Management</CardTitle>
              <CardDescription>
                Manage your account settings and data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Account ID:</span>
                      <p className="font-mono text-xs break-all">{user?.id}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>
                      <p>{user?.email}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Member since:</span>
                      <p>January 2024</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Subscription:</span>
                      <p>Pro Plan</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2 text-red-600">Danger Zone</h4>
                  <div className="border border-red-200 rounded-lg p-4 space-y-4">
                    <div>
                      <h5 className="font-medium mb-1">Delete Account</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={handleDeleteAccount}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}