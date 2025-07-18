import { Music, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Music className="h-8 w-8 text-accent" />
                <span className="text-2xl font-serif font-bold">Psalmos</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Streamlining classical music licensing for content creators worldwide. 
                Premium recordings, transparent rights, instant access.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10">
                  YouTube
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#browse" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    Browse Music
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#labels" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    Partner Labels
                  </a>
                </li>
                <li>
                  <a href="#api" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#mobile" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#help" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#licensing" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    Licensing Guide
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#status" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Stay Updated</h4>
              <p className="text-primary-foreground/80 text-sm">
                Get the latest classical releases and platform updates
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-primary-foreground/80">hello@psalmos.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-primary-foreground/80">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-sm text-primary-foreground/80">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-primary-foreground/80">
              <a href="#privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-accent transition-colors">
                Cookie Policy
              </a>
              <a href="#accessibility" className="hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80">
              © 2024 Psalmos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}