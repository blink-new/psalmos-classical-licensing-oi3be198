import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Zap, Crown } from 'lucide-react'

const pricingPlans = [
  {
    name: "Creator",
    price: 29,
    period: "month",
    description: "Perfect for individual content creators and small projects",
    badge: null,
    features: [
      "Up to 50 downloads per month",
      "Standard quality (320kbps)",
      "YouTube & social media licensing",
      "Basic search and filters",
      "Email support",
      "Personal use license"
    ],
    limitations: [
      "No commercial use",
      "Limited to 3 projects"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    price: 99,
    period: "month",
    description: "Ideal for professional creators and small businesses",
    badge: "Most Popular",
    features: [
      "Up to 200 downloads per month",
      "High quality (FLAC/WAV)",
      "Full commercial licensing",
      "Advanced search & AI recommendations",
      "Priority support",
      "Multi-project management",
      "Usage analytics",
      "Custom licensing terms"
    ],
    limitations: [],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: 299,
    period: "month",
    description: "For agencies, production companies, and large organizations",
    badge: "Premium",
    features: [
      "Unlimited downloads",
      "Premium quality (24-bit/96kHz)",
      "Global commercial licensing",
      "White-label solutions",
      "Dedicated account manager",
      "Custom integrations (API)",
      "Bulk licensing discounts",
      "Advanced analytics & reporting",
      "Priority label partnerships"
    ],
    limitations: [],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your creative needs. All plans include our premium classical music catalog and automated licensing.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-background rounded-lg p-1 border">
            <button className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">Save 20%</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'border-accent shadow-lg scale-105 bg-card' 
                  : 'border-border bg-card/50'
              } hover:shadow-xl transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-3 py-1">
                    {plan.popular && <Star className="h-3 w-3 mr-1" />}
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-2">
                  {index === 0 && <Zap className="h-5 w-5 text-accent mr-2" />}
                  {index === 1 && <Star className="h-5 w-5 text-accent mr-2" />}
                  {index === 2 && <Crown className="h-5 w-5 text-accent mr-2" />}
                  <h3 className="text-xl font-semibold text-primary">{plan.name}</h3>
                </div>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <Check className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                    {plan.limitations.map((limitation) => (
                      <div key={limitation} className="flex items-start">
                        <span className="text-muted-foreground text-xs mr-3">•</span>
                        <span className="text-xs text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.buttonVariant}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                    : ''
                }`}
                size="lg"
              >
                {plan.buttonText}
              </Button>

              {/* Free Trial Note */}
              {plan.name !== "Enterprise" && (
                <p className="text-xs text-muted-foreground text-center mt-3">
                  14-day free trial • No credit card required
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-primary mb-2">No Hidden Fees</h4>
              <p className="text-sm text-muted-foreground">
                Transparent pricing with no surprise charges or additional licensing fees
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Instant Access</h4>
              <p className="text-sm text-muted-foreground">
                Download and use tracks immediately with automated licensing
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Premium Quality</h4>
              <p className="text-sm text-muted-foreground">
                High-fidelity recordings from world-renowned orchestras and labels
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary/5 border-accent/20">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer tailored enterprise solutions with custom licensing terms, 
              dedicated support, and volume discounts for large organizations.
            </p>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Contact Enterprise Sales
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}