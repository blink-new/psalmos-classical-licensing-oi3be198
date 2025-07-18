import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Music, Zap, Shield, X, Check } from 'lucide-react'

export function Solution() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
            Introducing Psalmos: Classical Music Licensing, Finally Solved
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've spent 18 months solving every barrier between you and the world's greatest music.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">How It Works:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center border-accent/20 bg-accent/5 dark:border-accent/30 dark:bg-accent/10">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="text-lg font-semibold text-primary mb-2">1. Search</div>
              <p className="text-sm text-muted-foreground">
                Our catalog of 10,000+ pre-cleared classical recordings
              </p>
            </Card>

            <Card className="p-6 text-center border-accent/20 bg-accent/5 dark:border-accent/30 dark:bg-accent/10">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center">
                  <Music className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="text-lg font-semibold text-primary mb-2">2. Preview</div>
              <p className="text-sm text-muted-foreground">
                With specialized filters (mood, era, instrumentation, energy)
              </p>
            </Card>

            <Card className="p-6 text-center border-accent/20 bg-accent/5 dark:border-accent/30 dark:bg-accent/10">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="text-lg font-semibold text-primary mb-2">3. Download Instantly</div>
              <p className="text-sm text-muted-foreground">
                With automatic license certificate
              </p>
            </Card>

            <Card className="p-6 text-center border-accent/20 bg-accent/5 dark:border-accent/30 dark:bg-accent/10">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="text-lg font-semibold text-primary mb-2">4. Create Confidently</div>
              <p className="text-sm text-muted-foreground">
                With guaranteed Content ID protection
              </p>
            </Card>
          </div>
        </div>

        {/* No More vs Yes To */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* No More */}
          <Card className="p-8 border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-2">
              <X className="h-6 w-6" />
              No More:
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-red-600 dark:text-red-300">Lawyers and legal fees</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-red-600 dark:text-red-300">Months of waiting</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-red-600 dark:text-red-300">Copyright claims</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-red-600 dark:text-red-300">Complex paperwork</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-red-600 dark:text-red-300">Multiple rights holders</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-red-600 dark:text-red-300">Geographic restrictions</span>
              </div>
            </div>
          </Card>

          {/* Yes To */}
          <Card className="p-8 border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center gap-2">
              <Check className="h-6 w-6" />
              Yes To:
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-green-600 dark:text-green-300 font-semibold">60-second licensing process</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-green-600 dark:text-green-300 font-semibold">One subscription, unlimited downloads</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-green-600 dark:text-green-300 font-semibold">Platform whitelisting included</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-green-600 dark:text-green-300 font-semibold">High-res audio + stems available</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-green-600 dark:text-green-300 font-semibold">API integration with editing software</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-green-600 dark:text-green-300 font-semibold">Classical-specific metadata and search</span>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg">
            Experience the Difference
          </Button>
        </div>
      </div>
    </section>
  )
}