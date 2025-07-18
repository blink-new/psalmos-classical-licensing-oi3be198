import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Zap, Crown, ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/sections/Footer'

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
    price: 79,
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
    price: 199,
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

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "All plans include a 14-day free trial with full access to features. No credit card required to start."
  },
  {
    question: "Can I use the music commercially?",
    answer: "Professional and Enterprise plans include full commercial licensing. Creator plan is limited to personal and non-commercial use."
  },
  {
    question: "What audio quality do you offer?",
    answer: "We offer multiple quality levels: Standard (320kbps MP3), High (FLAC/WAV), and Premium (24-bit/96kHz) depending on your plan."
  },
  {
    question: "How does licensing work?",
    answer: "Our automated system generates instant micro-licenses for each download, ensuring all rights holders are properly compensated."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll retain access until the end of your billing period."
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Enterprise customers can access volume discounts and custom pricing. Contact our sales team for details."
  }
]

interface PricingPageProps {
  onBack?: () => void
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            {onBack && (
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary">Pricing Plans</h1>
              <p className="text-muted-foreground">Choose the perfect plan for your creative needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
          <div className="mb-16">
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

          {/* FAQ Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold text-primary mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="text-center">
            <Card className="p-8 bg-primary/5 border-accent/20 max-w-2xl mx-auto">
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
      </main>

      <Footer />
    </div>
  )
}

export default PricingPage