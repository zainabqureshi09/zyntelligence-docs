import { DocLayout } from '@/components/DocLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'Is Neurovera really free?', a: 'Yes! Neurovera is completely free and open source. No subscriptions, no paywalls.' },
  { q: 'How do I get started?', a: 'Visit the Getting Started page for a quick guide, then pick a programming language or learning path.' },
  { q: 'Can I contribute?', a: 'Absolutely! Check our GitHub repository for contribution guidelines and open issues.' },
  { q: 'What programming languages are covered?', a: 'We cover Python, JavaScript, HTML, CSS, C++, and Java with more coming soon.' },
  { q: 'Are there hands-on projects?', a: 'Yes, each learning path includes practical projects to apply your skills.' },
  { q: 'How often is content updated?', a: 'We continuously update content to reflect current best practices and industry standards.' },
];

export default function FAQ() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6"><span className="language-badge bg-primary/10 text-primary">Help</span></div>
        <h1 className="doc-heading">Frequently Asked Questions</h1>
        <p className="doc-paragraph">Common questions about Neurovera and how to use the platform.</p>
        
        <Accordion type="single" collapsible className="my-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </DocLayout>
  );
}
