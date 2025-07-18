import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Card className="max-w-4xl mx-auto p-8 border-accent/20">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How is this different from YouTube's Audio Library?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                YouTube's classical selection is tiny and low-quality. We have 10,000+ professional recordings with proper metadata, multiple formats, and guaranteed licensing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Will I really never get copyright claims?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Guaranteed. We handle all platform whitelisting automatically. If you somehow get a claim (hasn't happened yet), we resolve it within 24 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Can I use this music commercially?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Our Pro and Studio plans include commercial licensing. Perfect for client work, advertisements, and monetized content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                What if I need a specific piece you don't have?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Studio plan members can request custom recordings. We work with orchestras worldwide to fulfill specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How quickly can I download music?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Instantly. No approval process, no waiting. Search, preview, download, create.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Do you have stems/individual instruments?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Pro and Studio plans include stems for strings, brass, woodwinds, and percussion sections.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </section>
  )
}