import { DocLayout } from '@/components/DocLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, HelpCircle, MessageCircle, BookOpen, Settings, CreditCard, Shield, ExternalLink } from 'lucide-react';
import { useState, useMemo } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Getting Started
  { 
    question: 'Is Zerovex Docs really free?', 
    answer: 'Yes! Zerovex Docs is completely free and open source. No subscriptions, no paywalls. All tutorials, documentation, and learning resources are available at no cost.',
    category: 'Getting Started'
  },
  { 
    question: 'How do I get started with Zerovex?', 
    answer: 'Visit the Getting Started page for a quick guide, then pick a programming language or learning path that interests you. We recommend starting with Python or JavaScript if you\'re new to programming.',
    category: 'Getting Started'
  },
  { 
    question: 'Do I need any prior programming experience?', 
    answer: 'Not at all! Our beginner tutorials are designed for complete newcomers. We start from the basics and gradually build up to more complex topics.',
    category: 'Getting Started'
  },
  { 
    question: 'What programming languages are covered?', 
    answer: 'We currently cover Python, JavaScript, HTML, CSS, C++, and Java. We\'re continuously adding more languages and frameworks based on community feedback.',
    category: 'Getting Started'
  },

  // Features
  { 
    question: 'What is the AI-powered search?', 
    answer: 'Our AI search understands natural language queries and helps you find relevant documentation faster. Just type your question and get instant, contextual results with AI-generated summaries.',
    category: 'Features'
  },
  { 
    question: 'Can I run code directly in the browser?', 
    answer: 'Yes! Our interactive code playground allows you to run Python, JavaScript, and other languages directly in your browser without any setup required.',
    category: 'Features'
  },
  { 
    question: 'What are learning paths?', 
    answer: 'Learning paths are structured curricula that guide you through a topic from beginner to advanced. For example, our AI/ML path takes you from math foundations to building neural networks.',
    category: 'Features'
  },

  // Account
  { 
    question: 'Do I need to create an account?', 
    answer: 'You can browse most content without an account. However, creating a free account lets you save progress, bookmark tutorials, and access AI-powered features.',
    category: 'Account'
  },
  { 
    question: 'How do I reset my password?', 
    answer: 'Click "Forgot Password" on the login page and enter your email. You\'ll receive a password reset link within a few minutes.',
    category: 'Account'
  },
  { 
    question: 'Can I delete my account?', 
    answer: 'Yes, you can delete your account at any time from your account settings. This will permanently remove all your data including saved progress and bookmarks.',
    category: 'Account'
  },

  // Content
  { 
    question: 'How often is content updated?', 
    answer: 'We continuously update content to reflect current best practices and industry standards. Major updates are announced in our changelog.',
    category: 'Content'
  },
  { 
    question: 'Are there hands-on projects?', 
    answer: 'Yes, each learning path includes practical projects to apply your skills. These range from simple exercises to full applications.',
    category: 'Content'
  },
  { 
    question: 'Can I contribute to the documentation?', 
    answer: 'Absolutely! Check our GitHub repository for contribution guidelines. We welcome fixes, improvements, and new content from the community.',
    category: 'Content'
  },
  { 
    question: 'How do I report an error in the documentation?', 
    answer: 'Use the feedback widget at the bottom of any documentation page, or open an issue on our GitHub repository with details about the error.',
    category: 'Content'
  },

  // Technical
  { 
    question: 'Which browsers are supported?', 
    answer: 'We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your browser.',
    category: 'Technical'
  },
  { 
    question: 'Is there a mobile app?', 
    answer: 'Not yet, but our website is fully responsive and works great on mobile devices. A dedicated app is on our roadmap.',
    category: 'Technical'
  },
  { 
    question: 'Can I access content offline?', 
    answer: 'Currently, an internet connection is required. We\'re exploring offline support as a future feature.',
    category: 'Technical'
  },
];

const categories = ['All', ...new Set(faqs.map(f => f.category))];

const categoryIcons: Record<string, React.ReactNode> = {
  'Getting Started': <BookOpen className="h-4 w-4" />,
  'Features': <Settings className="h-4 w-4" />,
  'Account': <Shield className="h-4 w-4" />,
  'Content': <MessageCircle className="h-4 w-4" />,
  'Technical': <CreditCard className="h-4 w-4" />,
};

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = useMemo(() => {
    return faqs.filter(f => {
      const matchesSearch = f.question.toLowerCase().includes(search.toLowerCase()) ||
                           f.answer.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const groupedFaqs = useMemo(() => {
    const groups: Record<string, FAQItem[]> = {};
    filteredFaqs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFaqs]);

  return (
    <DocLayout>
      <SEOHead 
        title="FAQ - Zerovex Docs"
        description="Frequently asked questions about Zerovex Docs. Find answers about getting started, features, accounts, and more."
      />
      <div className="doc-container animate-fade-in">
        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Find answers to common questions about Zerovex Docs and how to make the most of the platform.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 h-12 text-lg"
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="gap-2"
            >
              {cat !== 'All' && categoryIcons[cat]}
              {cat}
            </Button>
          ))}
        </div>

        {/* FAQ Sections */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No questions found matching your search.</p>
            <Button variant="link" onClick={() => { setSearch(''); setSelectedCategory('All'); }}>
              Clear filters
            </Button>
          </div>
        ) : selectedCategory === 'All' ? (
          Object.entries(groupedFaqs).map(([category, items]) => (
            <section key={category} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                {categoryIcons[category]}
                <h2 className="text-lg font-semibold text-foreground">{category}</h2>
                <Badge variant="secondary" className="ml-2">{items.length}</Badge>
              </div>
              <Accordion type="single" collapsible className="space-y-2">
                {items.map((faq, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`${category}-${i}`}
                    className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/50"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))
        ) : (
          <Accordion type="single" collapsible className="space-y-2">
            {filteredFaqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        {/* Still have questions */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Still have questions?</h3>
                <p className="text-sm text-muted-foreground">
                  Can't find what you're looking for? Our team is here to help.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <a href="https://github.com/zainabqureshi09" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild>
                <Link to="/about">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Link 
            to="/getting-started" 
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <BookOpen className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Getting Started</h4>
            <p className="text-sm text-muted-foreground">New here? Start with the basics.</p>
          </Link>
          <Link 
            to="/tutorials" 
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <Settings className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Tutorials</h4>
            <p className="text-sm text-muted-foreground">Learn by building real projects.</p>
          </Link>
          <Link 
            to="/resources" 
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <Shield className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Resources</h4>
            <p className="text-sm text-muted-foreground">Cheat sheets and helpful tools.</p>
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
