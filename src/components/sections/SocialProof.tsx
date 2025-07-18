import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Users, Shield, Zap, TrendingUp } from 'lucide-react'

export function SocialProof() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
            Trusted by Creators Worldwide
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Testimonial 1 */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-4 italic">
              "I've spent the last 3 years fighting copyright claims on classical music. Psalmos solved this in my first download. Game changer."
            </blockquote>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/api/placeholder/40/40" alt="Sarah Chen" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-primary">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Documentary Filmmaker</div>
                <Badge variant="secondary" className="text-xs mt-1">847K YouTube subscribers</Badge>
              </div>
            </div>
          </Card>

          {/* Testimonial 2 */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-4 italic">
              "Finally found Rachmaninoff that doesn't get claimed. My productivity videos have never sounded better."
            </blockquote>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/api/placeholder/40/40" alt="Marcus Rivera" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-primary">Marcus Rivera</div>
                <div className="text-sm text-muted-foreground">Productivity YouTuber</div>
                <Badge variant="secondary" className="text-xs mt-1">1.2M subscribers</Badge>
              </div>
            </div>
          </Card>

          {/* Testimonial 3 */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-4 italic">
              "The metadata is incredible. I can find the exact mood and energy I need in seconds."
            </blockquote>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/api/placeholder/40/40" alt="Emma Thompson" />
                <AvatarFallback>ET</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-primary">Emma Thompson</div>
                <div className="text-sm text-muted-foreground">Podcast Producer</div>
                <Badge variant="secondary" className="text-xs mt-1">Top 100 Business Podcast</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* By The Numbers */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8">By The Numbers:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-accent/20">
              <div className="flex justify-center mb-3">
                <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">Active creators</div>
            </Card>

            <Card className="p-6 text-center border-accent/20">
              <div className="flex justify-center mb-3">
                <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average rating</div>
            </Card>

            <Card className="p-6 text-center border-accent/20">
              <div className="flex justify-center mb-3">
                <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent mb-1">Zero</div>
              <div className="text-sm text-muted-foreground">Copyright claims on licensed content</div>
            </Card>

            <Card className="p-6 text-center border-accent/20">
              <div className="flex justify-center mb-3">
                <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent mb-1">73%</div>
              <div className="text-sm text-muted-foreground">Faster content creation (avg. time savings)</div>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm text-muted-foreground">Trusted by creators from:</div>
            <Badge variant="outline" className="text-xs">YouTube</Badge>
            <Badge variant="outline" className="text-xs">Netflix</Badge>
            <Badge variant="outline" className="text-xs">Spotify</Badge>
            <Badge variant="outline" className="text-xs">Apple</Badge>
            <Badge variant="outline" className="text-xs">Disney</Badge>
            <Badge variant="outline" className="text-xs">HBO</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}