import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Hero, Features, Stats } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { MarketOpportunity } from '@/components/sections/MarketOpportunity'
import { Solution } from '@/components/sections/Solution'
import { FeaturesAndBenefits } from '@/components/sections/FeaturesAndBenefits'
import { SocialProof } from '@/components/sections/SocialProof'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { BrowseMusic } from '@/components/sections/BrowseMusic'
import { Pricing } from '@/components/sections/Pricing'
import { Labels } from '@/components/sections/Labels'
import { About } from '@/components/sections/About'
import { Footer } from '@/components/sections/Footer'
import { ProfileSetup } from '@/components/ProfileSetup'
import { Dashboard } from '@/pages/Dashboard'
import { Settings } from '@/pages/Settings'
import { Billing } from '@/pages/Billing'
import PricingPage from '@/pages/PricingPage'
import LabelsPage from '@/pages/LabelsPage'
import AboutPage from '@/pages/AboutPage'
import { Toaster } from '@/components/ui/toaster'
import { blink } from '@/blink/client'
import type { AppView } from '@/types'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showProfileSetup, setShowProfileSetup] = useState(false)
  const [currentView, setCurrentView] = useState<AppView>('home')

  useEffect(() => {
    try {
      const unsubscribe = blink.auth.onAuthStateChanged((state) => {
        setUser(state.user)
        setLoading(state.isLoading)
        setError(null)
        
        // Check if user needs to complete profile setup
        if (state.user && !state.user.displayName) {
          setShowProfileSetup(true)
        } else {
          setShowProfileSetup(false)
        }
      })
      return unsubscribe
    } catch (err) {
      console.error('Auth initialization error:', err)
      setError(err)
      setLoading(false)
    }
  }, [])

  const handleUserUpdate = (updatedUser: any) => {
    setUser(updatedUser)
  }

  const handleViewChange = (view: AppView) => {
    setCurrentView(view)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Psalmos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md">
          <div className="text-red-500 mb-4">
            <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-4">We're experiencing some technical difficulties. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  // Render different views based on currentView state
  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return user ? <Dashboard user={user} /> : <div>Please sign in to access dashboard</div>
      case 'settings':
        return user ? <Settings user={user} onUserUpdate={handleUserUpdate} /> : <div>Please sign in to access settings</div>
      case 'billing':
        return user ? <Billing user={user} /> : <div>Please sign in to access billing</div>
      case 'browse':
        return <BrowseMusic />
      case 'pricing':
        return <PricingPage onBack={() => handleViewChange('home')} />
      case 'labels':
        return <LabelsPage onBack={() => handleViewChange('home')} />
      case 'about':
        return <AboutPage onBack={() => handleViewChange('home')} />
      case 'home':
      default:
        return (
          <>
            <Hero user={user} onViewChange={handleViewChange} />
            <Features />
            <Stats />
            <Problem />
            <MarketOpportunity />
            <Solution />
            <FeaturesAndBenefits />
            <SocialProof />
            <Pricing />
            <FAQ />
            <FinalCTA user={user} onViewChange={handleViewChange} />
            <BrowseMusic />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onViewChange={handleViewChange} currentView={currentView} />
      <main>
        {renderCurrentView()}
      </main>
      {(currentView === 'home') && <Footer />}
      
      {/* Profile Setup Modal */}
      {showProfileSetup && user && (
        <ProfileSetup 
          user={user} 
          onComplete={() => setShowProfileSetup(false)} 
        />
      )}
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  )
}

export default App