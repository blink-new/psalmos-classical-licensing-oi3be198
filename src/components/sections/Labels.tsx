import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Music, Award, Calendar, MapPin, ExternalLink, Star } from 'lucide-react'

const majorLabels = [
  {
    name: "Deutsche Grammophon",
    founded: "1898",
    location: "Hamburg, Germany",
    description: "The world's oldest and most prestigious classical music label, known for its iconic yellow label and legendary recordings.",
    specialties: ["Orchestral", "Opera", "Chamber Music"],
    artists: ["Herbert von Karajan", "Anne-Sophie Mutter", "Lang Lang"],
    tier: "flagship",
    catalog: "15,000+"
  },
  {
    name: "Decca Classics",
    founded: "1929",
    location: "London, UK",
    description: "One of the most prestigious classical labels with artists like Luciano Pavarotti and the Vienna Philharmonic.",
    specialties: ["Opera", "Orchestral", "Vocal"],
    artists: ["Luciano Pavarotti", "Vienna Philharmonic", "Cecilia Bartoli"],
    tier: "major",
    catalog: "12,000+"
  },
  {
    name: "Sony Classical",
    founded: "1927",
    location: "New York, USA",
    description: "Dating back to 1927 as Columbia Masterworks, featuring world-renowned artists and innovative recordings.",
    specialties: ["Contemporary Classical", "Film Scores", "Crossover"],
    artists: ["Yo-Yo Ma", "Joshua Bell", "Philip Glass"],
    tier: "major",
    catalog: "10,000+"
  },
  {
    name: "Warner Classics",
    founded: "1991",
    location: "London, UK",
    description: "Formed in 1991, includes the Erato Records and Teldec Records labels, with legendary artists from Maria Callas to Joyce DiDonato.",
    specialties: ["Historical Recordings", "Opera", "Early Music"],
    artists: ["Maria Callas", "Joyce DiDonato", "Emmanuel Pahud"],
    tier: "major",
    catalog: "8,500+"
  }
]

const independentLabels = [
  {
    name: "Hyperion Records",
    founded: "1980",
    location: "London, UK",
    description: "Award-winning UK label with around 2,500 CDs covering classical music from the 12th century to present, recently acquired by Universal Music Group in 2023.",
    specialties: ["Rare Repertoire", "Song Cycles", "Early Music"],
    artists: ["Stephen Hough", "The Sixteen", "Graham Johnson"],
    tier: "independent",
    catalog: "2,500+"
  },
  {
    name: "Harmonia Mundi",
    founded: "1958",
    location: "Arles, France",
    description: "French label founded in 1958 specializing in classical, jazz, and world music from the Middle Ages to today.",
    specialties: ["Early Music", "Baroque", "Contemporary"],
    artists: ["René Jacobs", "Jordi Savall", "Alexander Melnikov"],
    tier: "independent",
    catalog: "3,000+"
  },
  {
    name: "Naxos",
    founded: "1987",
    location: "Hong Kong",
    description: "Hong Kong-based label known for comprehensive classical repertoire at budget prices, featuring both standard and obscure works.",
    specialties: ["Complete Editions", "Rare Works", "Educational"],
    artists: ["Various International Artists", "Emerging Talents"],
    tier: "independent",
    catalog: "9,000+"
  },
  {
    name: "BIS Records",
    founded: "1973",
    location: "Åkersberga, Sweden",
    description: "Swedish independent label highly regarded for sound quality and adventurous programming.",
    specialties: ["Scandinavian Music", "Contemporary", "SACD"],
    artists: ["Osmo Vänskä", "Susanna Mälkki", "Ronald Brautigam"],
    tier: "independent",
    catalog: "2,200+"
  },
  {
    name: "Chandos",
    founded: "1979",
    location: "Colchester, UK",
    description: "British independent label known for excellent sound quality and natural recording approach.",
    specialties: ["British Music", "Orchestral", "Choral"],
    artists: ["Neeme Järvi", "Richard Hickox", "BBC Philharmonic"],
    tier: "independent",
    catalog: "1,800+"
  }
]

const specializedLabels = [
  {
    name: "Archiv Produktion",
    founded: "1947",
    location: "Hamburg, Germany",
    description: "Deutsche Grammophon's subsidiary focused on early music, medieval and renaissance repertoire.",
    specialties: ["Early Music", "Medieval", "Renaissance"],
    artists: ["John Eliot Gardiner", "Trevor Pinnock", "Musica Antiqua Köln"],
    tier: "specialized",
    catalog: "1,200+"
  },
  {
    name: "ECM Records",
    founded: "1969",
    location: "Munich, Germany",
    description: "German label known for high-quality contemporary classical and jazz recordings.",
    specialties: ["Contemporary Classical", "New Music", "Jazz"],
    artists: ["Arvo Pärt", "Keith Jarrett", "Gidon Kremer"],
    tier: "specialized",
    catalog: "1,600+"
  },
  {
    name: "AVIE Records",
    founded: "2002",
    location: "London, UK",
    description: "UK independent label focusing on fostering young musicians with artist ownership model.",
    specialties: ["Emerging Artists", "Chamber Music", "Recitals"],
    artists: ["Alina Ibragimova", "Steven Isserlis", "Paul Lewis"],
    tier: "specialized",
    catalog: "400+"
  }
]

function LabelCard({ label }: { label: any }) {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'flagship': return 'bg-accent text-accent-foreground'
      case 'major': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'independent': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'specialized': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Music className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
              {label.name}
            </h3>
            <Badge className={getTierColor(label.tier)} variant="secondary">
              {label.tier.charAt(0).toUpperCase() + label.tier.slice(1)}
            </Badge>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed">
        {label.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2 text-accent" />
          Founded {label.founded}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 text-accent" />
          {label.location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Award className="h-4 w-4 mr-2 text-accent" />
          {label.catalog} recordings
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-primary mb-2">Specialties</h4>
        <div className="flex flex-wrap gap-2">
          {label.specialties.map((specialty: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-primary mb-2">Notable Artists</h4>
        <div className="flex flex-wrap gap-2">
          {label.artists.map((artist: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs bg-muted">
              {artist}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}

export function Labels() {
  return (
    <section id="labels" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
            Our Partner Labels
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Psalmos partners with the world's most prestigious classical music labels to bring you 
            unparalleled access to high-quality recordings with streamlined licensing.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 bg-muted/30 rounded-2xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Partner Labels</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">75,000+</div>
            <div className="text-sm text-muted-foreground">Licensed Recordings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">125+</div>
            <div className="text-sm text-muted-foreground">Years of Heritage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Rights Cleared</div>
          </div>
        </div>

        {/* Flagship Label */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Star className="h-6 w-6 text-accent mr-3" />
            <h3 className="text-2xl font-serif font-bold text-primary">Flagship Partner</h3>
          </div>
          <div className="grid grid-cols-1 max-w-2xl">
            <LabelCard label={majorLabels[0]} />
          </div>
        </div>

        {/* Major Labels */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8">Major Classical Labels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorLabels.slice(1).map((label, index) => (
              <LabelCard key={index} label={label} />
            ))}
          </div>
        </div>

        {/* Independent Labels */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8">Prestigious Independent Labels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {independentLabels.map((label, index) => (
              <LabelCard key={index} label={label} />
            ))}
          </div>
        </div>

        {/* Specialized Labels */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8">Specialized Classical Labels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedLabels.map((label, index) => (
              <LabelCard key={index} label={label} />
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-12">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">
            Partner with Psalmos
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Are you a classical music label interested in expanding your digital reach? 
            Join our platform and connect with content creators worldwide.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  )
}