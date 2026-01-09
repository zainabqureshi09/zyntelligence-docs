import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UpdateItem {
  date: string;
  title: string;
  description: string;
  href: string;
  type: 'new' | 'update' | 'fix';
}

const updates: UpdateItem[] = [
  {
    date: 'Jan 2026',
    title: 'AI & Machine Learning Path',
    description: 'Complete learning path from math foundations to deep learning projects',
    href: '/paths/ai-ml/introduction',
    type: 'new',
  },
  {
    date: 'Jan 2026',
    title: 'Enhanced Search',
    description: 'New fuzzy search with keyboard shortcuts (⌘K)',
    href: '/getting-started',
    type: 'new',
  },
  {
    date: 'Jan 2026',
    title: 'Python Examples',
    description: 'Added 15+ practical Python code examples',
    href: '/docs/python/examples',
    type: 'update',
  },
  {
    date: 'Dec 2025',
    title: 'Dark Mode Support',
    description: 'Full dark mode support across all pages',
    href: '/docs/python/introduction',
    type: 'new',
  },
];

const typeColors = {
  new: 'bg-green-500/10 text-green-600 dark:text-green-400',
  update: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  fix: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
};

const typeLabels = {
  new: 'New',
  update: 'Updated',
  fix: 'Fixed',
};

export function WhatsNew() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What's New</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {updates.map((update, index) => (
            <Link
              key={index}
              to={update.href}
              className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[update.type]}`}>
                  {typeLabels[update.type]}
                </span>
                <span className="text-xs text-muted-foreground">{update.date}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {update.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {update.description}
              </p>
              <div className="mt-3 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
