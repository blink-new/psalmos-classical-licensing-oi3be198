import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Music, Zap, Shield, DollarSign, Calendar, Phone } from 'lucide-react'
import { blink } from '@/blink/client'

interface FinalCTAProps {
  user?: any
  onViewChange?: (view: 'home' | 'browse' | 'dashboard' | 'settings' | 'billing' | 'pricing') => void
}

export function FinalCTA({ user, onViewChange }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <Card className="max-w-4xl mx-auto p-12 text-center border-accent/20 bg-card/50 backdrop-blur">
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              Ready to Transform Your Content?
            </h2>
            <h3 className="text-2xl font-semibold text-accent mb-4">
              The classical music you've always wanted is just one click away.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators who've discovered the power of proper classical music licensing.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-left">
              <div className="h-8 w-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Music className="h-4 w-4 text-accent" />
              </div>
              <span className="text-muted-foreground">
                <span className="font-semibold text-primary">10,000+</span> professional recordings
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <div className="h-8 w-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-4 w-4 text-accent" />
              </div>
              <span className="text-muted-foreground">
                <span className="font-semibold text-primary">60-second</span> licensing process
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <div className="h-8 w-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-4 w-4 text-accent" />
              </div>
              <span className="text-muted-foreground">
                <span className="font-semibold text-primary">Zero</span> copyright headaches
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <div className="h-8 w-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-4 w-4 text-accent" />
              </div>
              <span className="text-muted-foreground">
                <span className="font-semibold text-primary">No hidden fees</span> or per-download costs
              </span>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            {user ? (
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-4 text-xl font-semibold"
                onClick={() => onViewChange?.('browse')}
              >
                Browse Music Library
              </Button>
            ) : (
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-4 text-xl font-semibold"
                onClick={() => blink.auth.login()}
              >
                Start Your Free 14-Day Trial
              </Button>
            )}
          </div>

          {/* Trial Details */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
            <div className="text-muted-foreground">•</div>
            <span>Cancel anytime</span>
            <div className="text-muted-foreground">•</div>
            <span>Full access to entire catalog</span>
          </div>

          {/* Secondary CTA */}
          <div className="border-t border-accent/20 pt-8">
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-primary">Questions?</span> Book a free 15-minute demo call with our founder.
            </p>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Phone className="h-4 w-4 mr-2" />
              Schedule Demo Call
            </Button>
          </div>
        </Card>

        {/* Trust Badges */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <Badge variant="outline" className="text-xs">SSL Secured</Badge>
            <Badge variant="outline" className="text-xs">GDPR Compliant</Badge>
            <Badge variant="outline" className="text-xs">SOC 2 Certified</Badge>
            <Badge variant="outline" className="text-xs">99.9% Uptime</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}