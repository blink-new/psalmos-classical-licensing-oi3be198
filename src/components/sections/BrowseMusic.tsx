import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Play, Pause, Download, Heart, Filter, Search } from 'lucide-react'

// Mock data for classical music catalog
const mockTracks = [
  {
    id: 1,
    title: "Symphony No. 9 in D minor, Op. 125 'Choral'",
    composer: "Ludwig van Beethoven",
    performer: "Berlin Philharmonic Orchestra",
    conductor: "Herbert von Karajan",
    label: "Deutsche Grammophon",
    duration: "4:32",
    year: 1963,
    genre: "Symphony",
    era: "Romantic",
    instruments: ["Orchestra", "Choir"],
    mood: ["Triumphant", "Epic"],
    tempo: "Allegro",
    key: "D minor"
  },
  {
    id: 2,
    title: "Piano Concerto No. 1 in B-flat minor, Op. 23",
    composer: "Pyotr Ilyich Tchaikovsky",
    performer: "Martha Argerich",
    conductor: "Claudio Abbado",
    label: "Deutsche Grammophon",
    duration: "6:18",
    year: 1994,
    genre: "Concerto",
    era: "Romantic",
    instruments: ["Piano", "Orchestra"],
    mood: ["Passionate", "Dramatic"],
    tempo: "Allegro non troppo",
    key: "B-flat minor"
  },
  {
    id: 3,
    title: "The Four Seasons: Spring",
    composer: "Antonio Vivaldi",
    performer: "Anne-Sophie Mutter",
    conductor: "Herbert von Karajan",
    label: "Deutsche Grammophon",
    duration: "3:24",
    year: 1988,
    genre: "Concerto",
    era: "Baroque",
    instruments: ["Violin", "Orchestra"],
    mood: ["Joyful", "Energetic"],
    tempo: "Allegro",
    key: "E major"
  },
  {
    id: 4,
    title: "Requiem in D minor, K. 626: Dies Irae",
    composer: "Wolfgang Amadeus Mozart",
    performer: "Vienna Philharmonic Orchestra",
    conductor: "Herbert von Karajan",
    label: "Deutsche Grammophon",
    duration: "1:47",
    year: 1975,
    genre: "Sacred",
    era: "Classical",
    instruments: ["Orchestra", "Choir"],
    mood: ["Solemn", "Dramatic"],
    tempo: "Allegro assai",
    key: "D minor"
  }
]

export function BrowseMusic() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const [likedTracks, setLikedTracks] = useState<Set<number>>(new Set())
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)

  const togglePlay = (trackId: number) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId)
  }

  const toggleLike = (trackId: number) => {
    const newLiked = new Set(likedTracks)
    if (newLiked.has(trackId)) {
      newLiked.delete(trackId)
    } else {
      newLiked.add(trackId)
    }
    setLikedTracks(newLiked)
  }

  const filteredTracks = mockTracks.filter(track => {
    const matchesSearch = searchQuery === '' || 
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.composer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.performer.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesGenre = selectedGenre === 'all' || track.genre.toLowerCase() === selectedGenre
    
    return matchesSearch && matchesGenre
  })

  return (
    <section id="browse" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
            Discover Classical Masterpieces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of high-quality classical recordings from world-renowned labels and artists
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by composer, piece, or performer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            >
              <Filter className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          {/* Genre Tabs */}
          <Tabs value={selectedGenre} onValueChange={setSelectedGenre} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 lg:w-auto lg:grid-cols-none lg:flex">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="symphony">Symphony</TabsTrigger>
              <TabsTrigger value="concerto">Concerto</TabsTrigger>
              <TabsTrigger value="chamber">Chamber</TabsTrigger>
              <TabsTrigger value="sacred">Sacred</TabsTrigger>
              <TabsTrigger value="opera">Opera</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Advanced Search */}
        {showAdvancedSearch && (
          <div className="bg-card/50 backdrop-blur border border-accent/20 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold text-primary">Advanced Search</h3>
              <span className="text-sm text-muted-foreground">- Filter by composer, era, instrument, mood, tempo</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Composer</label>
                <Input placeholder="e.g. Bach, Mozart..." className="w-full" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Era</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select era" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baroque">Baroque (1600-1750)</SelectItem>
                    <SelectItem value="classical">Classical (1750-1820)</SelectItem>
                    <SelectItem value="romantic">Romantic (1820-1900)</SelectItem>
                    <SelectItem value="modern">Modern (1900+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Instrument</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select instrument" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="piano">Piano</SelectItem>
                    <SelectItem value="violin">Violin</SelectItem>
                    <SelectItem value="orchestra">Full Orchestra</SelectItem>
                    <SelectItem value="chamber">Chamber Music</SelectItem>
                    <SelectItem value="vocal">Vocal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Mood</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dramatic">Dramatic</SelectItem>
                    <SelectItem value="peaceful">Peaceful</SelectItem>
                    <SelectItem value="energetic">Energetic</SelectItem>
                    <SelectItem value="melancholic">Melancholic</SelectItem>
                    <SelectItem value="triumphant">Triumphant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tempo</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tempo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slow">Slow (Adagio)</SelectItem>
                    <SelectItem value="moderate">Moderate (Andante)</SelectItem>
                    <SelectItem value="fast">Fast (Allegro)</SelectItem>
                    <SelectItem value="very-fast">Very Fast (Presto)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Filter className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Music Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTracks.map((track) => (
            <Card key={track.id} className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-primary mb-1 truncate">
                    {track.title}
                  </h3>
                  <p className="text-accent font-medium mb-1">{track.composer}</p>
                  <p className="text-sm text-muted-foreground">
                    {track.performer} • {track.conductor}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleLike(track.id)}
                    className={likedTracks.has(track.id) ? 'text-red-500' : 'text-muted-foreground'}
                  >
                    <Heart className={`h-4 w-4 ${likedTracks.has(track.id) ? 'fill-current' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => togglePlay(track.id)}
                    className="text-accent hover:text-accent/80"
                  >
                    {playingTrack === track.id ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Track Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Label:</span>
                  <Badge variant="secondary">{track.label}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground">{track.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Era:</span>
                  <Badge variant="outline">{track.era}</Badge>
                </div>
              </div>

              {/* Mood and Tempo Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {track.mood.map((mood) => (
                  <Badge key={mood} variant="secondary" className="text-xs">
                    {mood}
                  </Badge>
                ))}
                <Badge variant="outline" className="text-xs">
                  {track.tempo}
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Download className="h-4 w-4 mr-2" />
                  License & Download
                </Button>
                <Button variant="outline" size="sm">
                  Preview
                </Button>
              </div>

              {/* Waveform Placeholder (when playing) */}
              {playingTrack === track.id && (
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center h-12 bg-accent/10 rounded">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-accent rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 20 + 10}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <span>0:00</span>
                    <span>Now Playing</span>
                    <span>{track.duration}</span>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Tracks
          </Button>
        </div>
      </div>
    </section>
  )
}