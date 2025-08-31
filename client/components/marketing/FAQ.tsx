import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need coding experience to use Portigo?", a: "No. Our visual editor lets you design and publish without writing code." },
  { q: "Can I change templates after publishing my site?", a: "Yes, switch templates anytime. Your content stays intact." },
  { q: "Is there a free plan available?", a: "We offer a generous free tier. Upgrade when you need custom domains and advanced features." },
  { q: "How do I secure my data?", a: "We use industry-standard encryption and secure hosting. You control what you publish." },
  { q: "Can I connect a custom domain?", a: "Absolutely. Connect any domain in a few clicks with automatic SSL." },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="container">
        <h2 className="mb-6 font-serif text-3xl sm:text-4xl">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-6">
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
