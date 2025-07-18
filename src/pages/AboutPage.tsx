import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Music, 
  Target, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Heart, 
  Award,
  TrendingUp,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'
import { Footer } from '@/components/sections/Footer'

const values = [
  {
    icon: Music,
    title: "Preserving Classical Heritage",
    description: "We believe classical music is humanity's greatest artistic achievement and deserves to thrive in the digital age."
  },
  {
    icon: Shield,
    title: "Transparent Rights Management",
    description: "Every license is clear, every payment is tracked, and every rights holder is fairly compensated."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Making world-class classical recordings accessible to content creators everywhere, regardless of location."
  },
  {
    icon: Heart,
    title: "Artist-First Approach",
    description: "Supporting musicians, orchestras, and labels by creating new revenue streams and expanding their reach."
  }
]

const stats = [
  { number: "2024", label: "Founded", icon: Award },
  { number: "50+", label: "Partner Labels", icon: Users },
  { number: "75K+", label: "Licensed Tracks", icon: Music },
  { number: "100+", label: "Countries Served", icon: Globe }
]

const team = [
  {
    name: "Classical Music Industry",
    role: "Heritage & Expertise",
    description: "Decades of combined experience in classical music licensing, rights management, and digital distribution."
  },
  {
    name: "Technology Innovation",
    role: "Platform Development",
    description: "Cutting-edge technology stack ensuring seamless user experience and robust rights management."
  },
  {
    name: "Content Creation",
    role: "Market Understanding",
    description: "Deep understanding of content creator needs across YouTube, podcasts, film, and commercial projects."
  }
]

const milestones = [
  {
    year: "2024",
    title: "Platform Launch",
    description: "Psalmos launches with partnerships from major classical labels including Deutsche Grammophon."
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded licensing coverage to 100+ countries with automated rights clearance."
  },
  {
    year: "2024",
    title: "Creator Community",
    description: "Built a thriving community of content creators using classical music in their projects."
  }
]

const features = [
  {
    title: "Automated Licensing",
    description: "Instant micro-licenses with transparent revenue distribution to all rights holders.",
    icon: Zap
  },
  {
    title: "Global Platform",
    description: "Unified access to recordings from 50+ prestigious classical labels worldwide.",
    icon: Globe
  },
  {
    title: "Creator-Friendly",
    description: "Simple subscription model with unlimited downloads and clear usage rights.",
    icon: Heart
  }
]

interface AboutPageProps {
  onBack?: () => void
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
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
              <h1 className="text-2xl font-serif font-bold text-primary">About Psalmos</h1>
              <p className="text-muted-foreground">Bridging classical music and modern content creation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              About Psalmos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between classical music's rich heritage and modern content creation, 
              Psalmos is revolutionizing how classical music is licensed and distributed in the digital age.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-20">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/5 via-background to-accent/5 border-accent/20">
              <div className="text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  To democratize access to the world's finest classical music recordings while ensuring 
                  fair compensation for artists, orchestras, and labels. We're building the bridge between 
                  classical music's timeless artistry and today's digital content ecosystem, making it 
                  simple for creators to enhance their work with the emotional power of classical music.
                </p>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
                <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-primary text-center mb-12">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40 group">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* The Problem We Solve */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                  The Challenge We Address
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Fragmented Rights Landscape:</span> Classical music licensing involves multiple rights holders, making it complex and time-consuming.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Limited Digital Presence:</span> Many classical labels lack modern digital distribution channels.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Creator Barriers:</span> Content creators struggle to find and license high-quality classical music legally.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                  Our Solution
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <span className="font-medium text-primary">{feature.title}:</span> {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team/Expertise */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-primary text-center mb-12">Our Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
                  <h4 className="text-lg font-semibold text-primary mb-2">{member.name}</h4>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-primary text-center mb-12">Our Journey</h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="outline" className="text-accent border-accent">
                        {milestone.year}
                      </Badge>
                      <h4 className="text-lg font-semibold text-primary">{milestone.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <div className="text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-12">
            <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              The Future of Classical Music Licensing
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              We envision a world where classical music seamlessly integrates with modern content creation, 
              where every YouTube video, podcast, and film can be enhanced by the emotional depth of classical 
              music, and where every performance generates fair revenue for the artists who create it.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Join Our Mission
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage