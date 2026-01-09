import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { Search, FileText, Book, Rocket, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: 'doc' | 'path' | 'guide';
}

const searchData: SearchItem[] = [
  // Python
  { title: 'Python Introduction', description: 'Getting started with Python programming', href: '/docs/python/introduction', category: 'Python', icon: 'doc' },
  { title: 'Python Syntax', description: 'Learn Python syntax basics', href: '/docs/python/syntax', category: 'Python', icon: 'doc' },
  { title: 'Python Variables', description: 'Variables and data types in Python', href: '/docs/python/variables', category: 'Python', icon: 'doc' },
  { title: 'Python Conditions', description: 'If-else statements and conditionals', href: '/docs/python/conditions', category: 'Python', icon: 'doc' },
  { title: 'Python Loops', description: 'For and while loops in Python', href: '/docs/python/loops', category: 'Python', icon: 'doc' },
  { title: 'Python Functions', description: 'Defining and using functions', href: '/docs/python/functions', category: 'Python', icon: 'doc' },
  { title: 'Python Examples', description: 'Practical Python code examples', href: '/docs/python/examples', category: 'Python', icon: 'doc' },
  
  // JavaScript
  { title: 'JavaScript Introduction', description: 'Getting started with JavaScript', href: '/docs/javascript/introduction', category: 'JavaScript', icon: 'doc' },
  { title: 'JavaScript Syntax', description: 'Learn JavaScript syntax basics', href: '/docs/javascript/syntax', category: 'JavaScript', icon: 'doc' },
  { title: 'JavaScript Variables', description: 'Variables and data types', href: '/docs/javascript/variables', category: 'JavaScript', icon: 'doc' },
  { title: 'JavaScript Conditions', description: 'If-else statements', href: '/docs/javascript/conditions', category: 'JavaScript', icon: 'doc' },
  { title: 'JavaScript Loops', description: 'For and while loops', href: '/docs/javascript/loops', category: 'JavaScript', icon: 'doc' },
  { title: 'JavaScript Functions', description: 'Functions and arrow functions', href: '/docs/javascript/functions', category: 'JavaScript', icon: 'doc' },
  { title: 'JavaScript Examples', description: 'Practical JavaScript examples', href: '/docs/javascript/examples', category: 'JavaScript', icon: 'doc' },
  
  // HTML
  { title: 'HTML Introduction', description: 'Getting started with HTML', href: '/docs/html/introduction', category: 'HTML', icon: 'doc' },
  { title: 'HTML Elements', description: 'HTML elements and tags', href: '/docs/html/elements', category: 'HTML', icon: 'doc' },
  { title: 'HTML Attributes', description: 'Using attributes in HTML', href: '/docs/html/attributes', category: 'HTML', icon: 'doc' },
  { title: 'HTML Examples', description: 'Practical HTML examples', href: '/docs/html/examples', category: 'HTML', icon: 'doc' },
  
  // CSS
  { title: 'CSS Introduction', description: 'Getting started with CSS', href: '/docs/css/introduction', category: 'CSS', icon: 'doc' },
  { title: 'CSS Selectors', description: 'CSS selectors and specificity', href: '/docs/css/selectors', category: 'CSS', icon: 'doc' },
  { title: 'CSS Properties', description: 'Common CSS properties', href: '/docs/css/properties', category: 'CSS', icon: 'doc' },
  { title: 'CSS Examples', description: 'Practical CSS examples', href: '/docs/css/examples', category: 'CSS', icon: 'doc' },
  
  // C++
  { title: 'C++ Introduction', description: 'Getting started with C++', href: '/docs/cpp/introduction', category: 'C++', icon: 'doc' },
  { title: 'C++ Syntax', description: 'C++ syntax basics', href: '/docs/cpp/syntax', category: 'C++', icon: 'doc' },
  { title: 'C++ Variables', description: 'Variables and data types', href: '/docs/cpp/variables', category: 'C++', icon: 'doc' },
  { title: 'C++ Conditions', description: 'If-else and switch statements', href: '/docs/cpp/conditions', category: 'C++', icon: 'doc' },
  { title: 'C++ Loops', description: 'For and while loops', href: '/docs/cpp/loops', category: 'C++', icon: 'doc' },
  { title: 'C++ Functions', description: 'Defining functions in C++', href: '/docs/cpp/functions', category: 'C++', icon: 'doc' },
  { title: 'C++ Examples', description: 'Practical C++ examples', href: '/docs/cpp/examples', category: 'C++', icon: 'doc' },
  
  // Java
  { title: 'Java Introduction', description: 'Getting started with Java', href: '/docs/java/introduction', category: 'Java', icon: 'doc' },
  { title: 'Java Syntax', description: 'Java syntax basics', href: '/docs/java/syntax', category: 'Java', icon: 'doc' },
  { title: 'Java Variables', description: 'Variables and data types', href: '/docs/java/variables', category: 'Java', icon: 'doc' },
  { title: 'Java Conditions', description: 'If-else statements', href: '/docs/java/conditions', category: 'Java', icon: 'doc' },
  { title: 'Java Loops', description: 'For and while loops', href: '/docs/java/loops', category: 'Java', icon: 'doc' },
  { title: 'Java Functions', description: 'Methods in Java', href: '/docs/java/functions', category: 'Java', icon: 'doc' },
  { title: 'Java Examples', description: 'Practical Java examples', href: '/docs/java/examples', category: 'Java', icon: 'doc' },
  
  // Learning Paths
  { title: 'AI & ML Introduction', description: 'Start your AI/ML journey', href: '/paths/ai-ml/introduction', category: 'Learning Paths', icon: 'path' },
  { title: 'Math Foundations for ML', description: 'Linear algebra, statistics, calculus', href: '/paths/ai-ml/math-foundations', category: 'Learning Paths', icon: 'path' },
  { title: 'Supervised Learning', description: 'Regression and classification', href: '/paths/ai-ml/supervised-learning', category: 'Learning Paths', icon: 'path' },
  { title: 'Deep Learning', description: 'Neural networks and CNNs', href: '/paths/ai-ml/deep-learning', category: 'Learning Paths', icon: 'path' },
  { title: 'AI/ML Projects', description: 'Hands-on AI projects', href: '/paths/ai-ml/projects', category: 'Learning Paths', icon: 'path' },
  
  // Pages
  { title: 'Getting Started', description: 'Quick start guide for Zyntelligence', href: '/getting-started', category: 'Guides', icon: 'guide' },
  { title: 'Resources', description: 'Cheat sheets and downloadable assets', href: '/resources', category: 'Guides', icon: 'guide' },
  { title: 'About', description: 'About Zyntelligence and the creator', href: '/about', category: 'Guides', icon: 'guide' },
];

const fuse = new Fuse(searchData, {
  keys: ['title', 'description', 'category'],
  threshold: 0.3,
  includeScore: true,
});

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return searchData.slice(0, 8);
    return fuse.search(query).map(result => result.item);
  }, [query]);

  const handleSelect = (href: string) => {
    navigate(href);
    onOpenChange(false);
    setQuery('');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'path': return <Rocket className="h-4 w-4 text-primary" />;
      case 'guide': return <Book className="h-4 w-4 text-success" />;
      default: return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0 gap-0">
        <DialogHeader className="p-4 border-b border-border">
          <DialogTitle className="sr-only">Search documentation</DialogTitle>
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 p-0 h-auto text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ESC
            </kbd>
          </div>
        </DialogHeader>
        
        <div className="max-h-[400px] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              No results found for "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-accent transition-colors group"
                >
                  {getIcon(item.icon)}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground truncate">
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {item.description}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-t border-border p-3 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↵</kbd>
              to select
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">⌘</kbd>
            <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">K</kbd>
            to search
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
