import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { Search, FileText, Book, Rocket, ArrowRight, Sparkles, Loader2, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: 'doc' | 'path' | 'guide';
}

interface AISearchResult {
  path: string;
  title: string;
  category: string;
  relevance: string;
  snippet: string;
}

interface AISearchResponse {
  results: AISearchResult[];
  aiSummary: string;
  error?: string;
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
  { title: 'Getting Started', description: 'Quick start guide for Zerovex', href: '/getting-started', category: 'Guides', icon: 'guide' },
  { title: 'Resources', description: 'Cheat sheets and downloadable assets', href: '/resources', category: 'Guides', icon: 'guide' },
  { title: 'About', description: 'About Zerovex and the creator', href: '/about', category: 'Guides', icon: 'guide' },
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
  const [isAISearch, setIsAISearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiResults, setAiResults] = useState<AISearchResponse | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Regular fuzzy search results
  const fuzzyResults = useMemo(() => {
    if (!query.trim()) return searchData.slice(0, 8);
    return fuse.search(query).map(result => result.item);
  }, [query]);

  // Detect if query looks like a natural language question
  const isNaturalLanguageQuery = useMemo(() => {
    const questionWords = ['how', 'what', 'why', 'when', 'where', 'which', 'can', 'do', 'does', 'is', 'are', 'should', 'would', 'could', 'explain', 'show', 'tell', 'help'];
    const lowerQuery = query.toLowerCase().trim();
    return questionWords.some(word => lowerQuery.startsWith(word)) || query.includes('?') || query.split(' ').length > 3;
  }, [query]);

  // Debounced AI search
  const performAISearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim() || searchQuery.length < 5) return;
    
    if (!isAuthenticated) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to use AI search.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsLoading(true);
    setAiResults(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        toast({
          title: 'Sign in required',
          description: 'Please sign in to use AI search.',
          variant: 'destructive'
        });
        return;
      }

      const { data, error } = await supabase.functions.invoke('ai-search', {
        body: { query: searchQuery }
      });

      if (error) {
        console.error('AI search error:', error);
        toast({
          title: 'AI Search unavailable',
          description: 'Using regular search instead.',
          variant: 'destructive'
        });
        return;
      }

      setAiResults(data as AISearchResponse);
    } catch (err) {
      console.error('AI search failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, [toast, isAuthenticated]);

  // Trigger AI search when user types a natural language query
  useEffect(() => {
    if (!isAISearch || !query.trim()) return;
    
    const timeoutId = setTimeout(() => {
      performAISearch(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, isAISearch, performAISearch]);

  const handleSelect = (href: string) => {
    navigate(href);
    onOpenChange(false);
    setQuery('');
    setAiResults(null);
    setIsAISearch(false);
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

  // Reset when dialog closes
  useEffect(() => {
    if (!open) {
      setQuery('');
      setAiResults(null);
      setIsAISearch(false);
      setIsLoading(false);
    }
  }, [open]);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'path': return <Rocket className="h-4 w-4 text-primary" />;
      case 'guide': return <Book className="h-4 w-4 text-success" />;
      default: return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category === 'Learning Paths') return <Rocket className="h-4 w-4 text-primary" />;
    if (category === 'Guides') return <Book className="h-4 w-4 text-success" />;
    return <FileText className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-4 border-b border-border">
          <DialogTitle className="sr-only">Search documentation</DialogTitle>
          <div className="flex items-center gap-3">
            {isLoading ? (
              <Loader2 className="h-5 w-5 text-primary animate-spin" />
            ) : isAISearch ? (
              <Sparkles className="h-5 w-5 text-primary" />
            ) : (
              <Search className="h-5 w-5 text-muted-foreground" />
            )}
            <Input
              placeholder={isAISearch ? "Ask anything about the docs..." : "Search documentation..."}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 p-0 h-auto text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  navigate('/auth');
                  onOpenChange(false);
                } else {
                  setIsAISearch(!isAISearch);
                }
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                isAISearch 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-accent'
              }`}
              title={isAuthenticated ? "Toggle AI search" : "Sign in for AI search"}
            >
              <Sparkles className="h-3 w-3" />
              {isAuthenticated ? 'AI' : 'AI (Sign in)'}
            </button>
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ESC
            </kbd>
          </div>
        </DialogHeader>
        
        {/* AI Summary */}
        {isAISearch && aiResults?.aiSummary && (
          <div className="px-4 py-3 bg-primary/5 border-b border-border">
            <div className="flex items-start gap-2">
              <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground leading-relaxed">
                {aiResults.aiSummary}
              </p>
            </div>
          </div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="px-4 py-8 text-center">
            <Loader2 className="h-8 w-8 text-primary animate-spin mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Searching with AI...</p>
          </div>
        )}
        
        <div className="max-h-[400px] overflow-y-auto p-2">
          {/* AI Search Results */}
          {isAISearch && !isLoading && aiResults && (
            <>
              {aiResults.results.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  <Sparkles className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No matching documentation found.</p>
                  <p className="text-xs mt-1">Try rephrasing your question.</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {aiResults.results.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleSelect(item.path)}
                      className="w-full flex items-start gap-3 p-3 rounded-lg text-left hover:bg-accent transition-colors group"
                    >
                      {getCategoryIcon(item.category)}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground truncate">
                          {item.title}
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-2">
                          {item.snippet}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        {item.relevance === 'high' && (
                          <span className="text-[10px] text-primary font-medium">Best match</span>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Regular Search Results */}
          {!isAISearch && !isLoading && (
            <>
              {fuzzyResults.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="space-y-1">
                  {/* Show AI search hint for natural language queries */}
                  {isNaturalLanguageQuery && query.length > 5 && (
                    <button
                      onClick={() => setIsAISearch(true)}
                      className="w-full flex items-center gap-3 p-3 mb-2 rounded-lg text-left bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors"
                    >
                      <Sparkles className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          Try AI Search
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Get intelligent answers to your question
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </button>
                  )}
                  
                  {fuzzyResults.map((item) => (
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
            </>
          )}
        </div>
        
        <div className="border-t border-border p-3 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↵</kbd>
              select
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              AI search
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">K</kbd>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}