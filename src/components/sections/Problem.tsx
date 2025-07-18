import { Card } from '@/components/ui/card'
import { AlertTriangle, Clock, DollarSign, Ban, Phone, Frown } from 'lucide-react'

export function Problem() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
            The $104 Billion Creator Economy Has a Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every day, thousands of content creators search for the perfect background music. They want something sophisticated, timeless, and emotionally rich. They want <span className="font-semibold text-primary">classical music</span>.
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            But here's what happens instead:
          </p>
        </div>

        {/* The Current Nightmare */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">The Current Nightmare:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    "Free" Mozart gets you copyright strikes
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-300">
                    Even though he died 250 years ago
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">
                    Licensing takes 2-6 months
                  </h4>
                  <p className="text-sm text-orange-600 dark:text-orange-300">
                    Through lawyers and complex paperwork
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    Costs $1,000-$10,000+ per track
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-300">
                    For proper clearance
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Ban className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    Rights fragmented across 100+ labels
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-300">
                    Each with different terms and processes
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">
                    No one answers the phone
                  </h4>
                  <p className="text-sm text-orange-600 dark:text-orange-300">
                    Labels don't prioritize small creators
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Frown className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    Quality is inconsistent
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-300">
                    Amateur recordings mixed with professional ones
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* The Cruel Irony */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl p-8 max-w-4xl mx-auto border border-red-200 dark:border-red-800">
            <h3 className="text-2xl font-bold text-primary mb-4">The Cruel Irony:</h3>
            <p className="text-lg text-muted-foreground italic">
              A high school student playing Beethoven can get a copyright claim on YouTube, despite performing a 200-year-old composition.
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="text-center">
          <div className="bg-card/50 backdrop-blur border border-accent/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">Result:</h3>
            <p className="text-lg text-muted-foreground">
              Creators abandon classical music entirely, settling for generic loops that sound like elevator music.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}