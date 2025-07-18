import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Play, Shield, Globe, Zap } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { blink } from '@/blink/client'

interface HeroProps {
  user?: any
  onViewChange?: (view: 'home' | 'browse' | 'dashboard' | 'settings' | 'billing') => void
}

export function Hero({ user, onViewChange }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30 pt-1.5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              <span className="font-serif">The Classical Music Platform</span>
              <span className="block text-accent font-montserrat">Content Creators Have Been Waiting For</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Stop fighting copyright claims. Stop waiting months for approvals. Start downloading world-class classical music in 60 seconds.
            </p>
            
            {/* Social Proof */}
            <p className="text-sm text-muted-foreground mb-8 italic">
              Join 2,500+ creators who've discovered classical music without the legal headaches
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {user ? (
                <>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg" onClick={() => onViewChange?.('browse')}>
                    <Play className="h-5 w-5 mr-2" />
                    Browse Music
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={() => onViewChange?.('dashboard')}>
                    My Dashboard
                  </Button>
                </>
              ) : (
                <>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg" onClick={() => blink.auth.login()}>
                    Start Free 14-Day Trial
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={() => onViewChange?.('browse')}>
                    <Play className="h-5 w-5 mr-2" />
                    Watch Demo Video
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Spline Design */}
          <div className="flex justify-end items-start">
            <div className="w-full max-w-lg h-[600px] lg:h-[700px] -mt-20">
              <Spline
                scene="https://prod.spline.design/aLZmzbc6BrnQp-CU/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Automated Licensing</h3>
              <p className="text-muted-foreground">
                Instant micro-licenses with transparent rights management and revenue distribution
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Global Coverage</h3>
              <p className="text-muted-foreground">
                Worldwide licensing rights for YouTube, podcasts, films, and commercial projects
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Premium Quality</h3>
              <p className="text-muted-foreground">
                High-fidelity recordings from prestigious labels and world-renowned orchestras
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Classical Recordings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Prestigious Labels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Countries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Instant Licensing</div>
          </div>
        </div>
      </div>
    </section>
  )
}