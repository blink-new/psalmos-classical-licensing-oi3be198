import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Users, DollarSign, Target, Gamepad2, Building2, Mic, Video, Film } from 'lucide-react'

export function MarketOpportunity() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
            The Hidden $384 Million Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While everyone focuses on pop music, classical music represents a massive, underserved market:
          </p>
        </div>

        {/* The Numbers Don't Lie */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">The Numbers Don't Lie:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">$384M</div>
              <p className="text-sm text-green-600 dark:text-green-300">
                Global classical music licensing market
              </p>
            </Card>

            <Card className="p-6 border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/20 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">35%</div>
              <p className="text-sm text-emerald-600 dark:text-emerald-300">
                Of consumers actively listen to classical music
              </p>
            </Card>

            <Card className="p-6 border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">46%</div>
              <p className="text-sm text-green-600 dark:text-green-300">
                Annual growth in classical streaming
              </p>
            </Card>

            <Card className="p-6 border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/20 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">71%</div>
              <p className="text-sm text-emerald-600 dark:text-emerald-300">
                Of premium content uses orchestral music
              </p>
            </Card>

            <Card className="p-6 border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20 text-center md:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">40%</div>
              <p className="text-sm text-green-600 dark:text-green-300">
                Higher income - classical listeners vs average music consumers
              </p>
            </Card>
          </div>
        </div>

        {/* Who's Desperate for This Solution */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Who's Desperate for This Solution:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Video className="h-5 w-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary">YouTubers/Content Creators</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Creating educational, documentary, and lifestyle content
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mic className="h-5 w-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary">Podcasters</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Wanting sophisticated background scores
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Film className="h-5 w-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary">Filmmakers</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Needing cinematic orchestral music
              </p>
            </Card>
          </div>
        </div>

        {/* The Market Failure */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto border border-accent/20">
            <h3 className="text-2xl font-bold text-primary mb-4">The Market Failure:</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Despite enormous demand, <span className="font-semibold text-primary">no platform properly serves creator classical music licensing</span>. Major labels profit from complexity. Existing platforms ignore classical. Creators suffer.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-accent text-accent-foreground">
              That changes today.
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}