import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Search, Music, User, Menu, X, LogOut, Settings, CreditCard, LayoutDashboard } from 'lucide-react'
import { blink } from '@/blink/client'
import type { AppView } from '@/types'

interface HeaderProps {
  user?: any
  onViewChange: (view: AppView) => void
  currentView: AppView
}

export function Header({ user, onViewChange, currentView }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogin = () => {
    blink.auth.login()
  }

  const handleLogout = () => {
    blink.auth.logout()
  }

  const handleNavigation = (view: AppView) => {
    onViewChange(view)
    setIsMenuOpen(false)
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('home')}>
            <Music className="h-8 w-8 text-accent" />
            <span className="text-2xl font-serif font-bold text-primary">Psalmos</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-8">
            <button 
              onClick={() => handleNavigation('browse')} 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              Browse
            </button>
            <button 
              onClick={() => handleNavigation('pricing')} 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('labels')} 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Labels
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search composers, pieces, labels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 w-full"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={() => handleNavigation('browse')}>
                  Browse Catalogue
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.displayName || user.email} />
                        <AvatarFallback className="bg-accent/10 text-accent">
                          {user.displayName ? getInitials(user.displayName) : <User className="h-4 w-4" />}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        {user.displayName && (
                          <p className="font-medium">{user.displayName}</p>
                        )}
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleNavigation('dashboard')}>
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation('settings')}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation('billing')}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={handleLogin}>
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={() => handleNavigation('browse')}>
                  Browse Catalogue
                </Button>
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleLogin}>
                  Start Now
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search composers, pieces, labels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 w-full"
                />
              </div>
              
              <button 
                onClick={() => handleNavigation('browse')} 
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent w-full text-left"
              >
                Browse
              </button>
              <button 
                onClick={() => handleNavigation('pricing')} 
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent w-full text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleNavigation('labels')} 
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent w-full text-left"
              >
                Labels
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent w-full text-left"
              >
                About
              </button>
              
              <div className="pt-4 space-y-2">
                {user ? (
                  <>
                    <div className="flex items-center space-x-3 px-3 py-2 border-b">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.displayName || user.email} />
                        <AvatarFallback className="bg-accent/10 text-accent">
                          {user.displayName ? getInitials(user.displayName) : <User className="h-3 w-3" />}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        {user.displayName && (
                          <p className="font-medium text-sm">{user.displayName}</p>
                        )}
                        <p className="text-xs text-muted-foreground truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={() => handleNavigation('browse')}>
                      Browse Catalogue
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation('dashboard')}>
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation('settings')}>
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation('billing')}>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Billing
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50" onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="w-full justify-start" onClick={handleLogin}>
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={() => handleNavigation('browse')}>
                      Browse Catalogue
                    </Button>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleLogin}>
                      Start Now
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}