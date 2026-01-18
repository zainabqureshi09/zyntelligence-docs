import { Sparkles, ArrowRight, Zap, RefreshCw, Bug } from 'lucide-react';
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
    title: 'AI-Powered Search',
    description: 'Natural language search with intelligent documentation discovery',
    href: '/getting-started',
    type: 'new',
  },
  {
    date: 'Jan 2026',
    title: 'AI & Machine Learning Path',
    description: 'Complete learning path from math foundations to deep learning projects',
    href: '/paths/ai-ml/introduction',
    type: 'new',
  },
  {
    date: 'Jan 2026',
    title: 'Interactive Code Examples',
    description: 'AI-powered code explanations and live examples',
    href: '/docs/python/examples',
    type: 'update',
  },
  {
    date: 'Jan 2026',
    title: 'Enhanced Dark Mode',
    description: 'Improved dark mode with better contrast and accessibility',
    href: '/docs/python/introduction',
    type: 'fix',
  },
];

const typeConfig = {
  new: { 
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    icon: Zap,
    label: 'New'
  },
  update: { 
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    icon: RefreshCw,
    label: 'Updated'
  },
  fix: { 
    color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    icon: Bug,
    label: 'Fixed'
  },
};

export function WhatsNew() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <Sparkles className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">What's New</h2>
            <p className="text-sm text-muted-foreground">Latest updates and improvements</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {updates.map((update, index) => {
            const config = typeConfig[update.type];
            const Icon = config.icon;
            
            return (
              <Link
                key={index}
                to={update.href}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${config.color}`}>
                    <Icon className="w-3 h-3" />
                    {config.label}
                  </span>
                  <span className="text-xs text-muted-foreground">{update.date}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-emerald-500 transition-colors">
                  {update.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {update.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
