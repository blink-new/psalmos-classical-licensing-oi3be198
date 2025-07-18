import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Download, Music, Calendar, Clock, ExternalLink, FileText } from 'lucide-react'
import { blink } from '@/blink/client'
import type { License, Track } from '@/types'

interface DashboardProps {
  user: any
}

export function Dashboard({ user }: DashboardProps) {
  const [licenses, setLicenses] = useState<License[]>([])
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalDownloads: 0,
    activeSubscription: 'Pro',
    creditsUsed: 45,
    creditsTotal: 100
  })

  const loadDashboardData = useCallback(async () => {
    try {
      setLoading(true)
      
      // Mock data for demonstration
      const mockLicenses: License[] = [
        {
          id: 'lic_001',
          userId: user.id,
          trackId: 'track_001',
          trackTitle: 'Symphony No. 9 in D minor, Op. 125',
          composer: 'Ludwig van Beethoven',
          performer: 'Berlin Philharmonic',
          label: 'Deutsche Grammophon',
          licenseType: 'standard',
          downloadUrl: 'https://example.com/download/beethoven-9th.mp3',
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          usageRights: ['YouTube', 'Podcast', 'Social Media']
        },
        {
          id: 'lic_002',
          userId: user.id,
          trackId: 'track_002',
          trackTitle: 'The Four Seasons: Spring',
          composer: 'Antonio Vivaldi',
          performer: 'Academy of St Martin in the Fields',
          label: 'EMI Classics',
          licenseType: 'extended',
          downloadUrl: 'https://example.com/download/vivaldi-spring.mp3',
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          usageRights: ['YouTube', 'Podcast', 'Social Media', 'Commercial Use']
        },
        {
          id: 'lic_003',
          userId: user.id,
          trackId: 'track_003',
          trackTitle: 'Clair de Lune',
          composer: 'Claude Debussy',
          performer: 'Martha Argerich',
          label: 'Warner Classics',
          licenseType: 'commercial',
          downloadUrl: 'https://example.com/download/debussy-clair.mp3',
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          usageRights: ['YouTube', 'Podcast', 'Social Media', 'Commercial Use', 'Broadcast']
        }
      ]
      
      setLicenses(mockLicenses)
      
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      loadDashboardData()
    }
  }, [user, loadDashboardData])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getLicenseTypeColor = (type: string) => {
    switch (type) {
      case 'standard':
        return 'bg-blue-100 text-blue-800'
      case 'extended':
        return 'bg-green-100 text-green-800'
      case 'commercial':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Manage your licenses and track your usage</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{licenses.length}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Plan</CardTitle>
            <Music className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeSubscription}</div>
            <p className="text-xs text-muted-foreground">Unlimited downloads</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Used</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.creditsUsed}/{stats.creditsTotal}</div>
            <p className="text-xs text-muted-foreground">Resets monthly</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">New licenses</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="licenses" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="licenses">License Manager</TabsTrigger>
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
          <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="licenses" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Licenses</CardTitle>
              <CardDescription>
                Manage and download your licensed classical music tracks
              </CardDescription>
            </CardHeader>
            <CardContent>
              {licenses.length === 0 ? (
                <div className="text-center py-12">
                  <Music className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No licenses yet</h3>
                  <p className="text-muted-foreground mb-4">Start browsing our catalog to license your first track</p>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Browse Catalog
                  </Button>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Track</TableHead>
                      <TableHead>Composer</TableHead>
                      <TableHead>Label</TableHead>
                      <TableHead>License Type</TableHead>
                      <TableHead>Licensed</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {licenses.map((license) => (
                      <TableRow key={license.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{license.trackTitle}</div>
                            <div className="text-sm text-muted-foreground">{license.performer}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{license.composer}</TableCell>
                        <TableCell>{license.label}</TableCell>
                        <TableCell>
                          <Badge className={getLicenseTypeColor(license.licenseType)}>
                            {license.licenseType}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(license.createdAt)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                            <Button size="sm" variant="ghost">
                              <FileText className="h-4 w-4 mr-1" />
                              License
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="downloads" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Download History</CardTitle>
              <CardDescription>
                Track all your downloaded files and re-download if needed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Download className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Download history will appear here</h3>
                <p className="text-muted-foreground">Once you start downloading tracks, you'll see them listed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>
                Monitor your subscription usage and track performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Most Licensed Composers</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Ludwig van Beethoven</span>
                      <Badge variant="secondary">3 licenses</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Wolfgang Amadeus Mozart</span>
                      <Badge variant="secondary">2 licenses</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Johann Sebastian Bach</span>
                      <Badge variant="secondary">1 license</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Usage Rights</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>YouTube</span>
                      <Badge variant="secondary">All licenses</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Podcast</span>
                      <Badge variant="secondary">All licenses</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Commercial Use</span>
                      <Badge variant="secondary">2 licenses</Badge>
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