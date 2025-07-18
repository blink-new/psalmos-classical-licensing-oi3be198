import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Shield, Music, Zap, FileAudio, BarChart3 } from 'lucide-react'

export function FeaturesAndBenefits() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
            Built by Creators, for Creators
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Smart Classical Search */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Smart Classical Search</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Unlike generic music platforms, search by <span className="font-semibold text-primary">mood, historical period, instrumentation, and energy level</span>. Find the perfect Vivaldi for your travel vlog or dramatic Tchaikovsky for your documentary climax.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Mood-based</Badge>
              <Badge variant="secondary" className="text-xs">Era filtering</Badge>
              <Badge variant="secondary" className="text-xs">Instrumentation</Badge>
            </div>
          </Card>

          {/* Legal Protection Guaranteed */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Legal Protection Guaranteed</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Every track comes with <span className="font-semibold text-primary">automatic Content ID whitelisting</span>. No more appeals, disputes, or demonetization. Create with confidence.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Content ID Safe</Badge>
              <Badge variant="secondary" className="text-xs">No Claims</Badge>
              <Badge variant="secondary" className="text-xs">Guaranteed</Badge>
            </div>
          </Card>

          {/* Professional Metadata */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Music className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Professional Metadata</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-primary">Complete composer, conductor, orchestra, and opus information.</span> Never wonder "who performed this recording" again.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Complete Info</Badge>
              <Badge variant="secondary" className="text-xs">Opus Numbers</Badge>
              <Badge variant="secondary" className="text-xs">Performers</Badge>
            </div>
          </Card>

          {/* Creator Workflow Integration */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Creator Workflow Integration</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-primary">Premiere Pro, Final Cut, Logic Pro extensions.</span> Browse and license music without leaving your editing software.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Premiere Pro</Badge>
              <Badge variant="secondary" className="text-xs">Final Cut</Badge>
              <Badge variant="secondary" className="text-xs">Logic Pro</Badge>
            </div>
          </Card>

          {/* Multiple Formats */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                <FileAudio className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Multiple Formats</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-primary">320kbps MP3, 48kHz WAV, plus individual stems</span> (strings, brass, woodwinds, percussion) for maximum creative control.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">High-res WAV</Badge>
              <Badge variant="secondary" className="text-xs">Individual Stems</Badge>
              <Badge variant="secondary" className="text-xs">Multiple Formats</Badge>
            </div>
          </Card>

          {/* Usage Analytics */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Usage Analytics</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Track which pieces perform best in your content. <span className="font-semibold text-primary">Data-driven music selection</span> for maximum audience engagement.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Performance Tracking</Badge>
              <Badge variant="secondary" className="text-xs">Engagement Data</Badge>
              <Badge variant="secondary" className="text-xs">Insights</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}