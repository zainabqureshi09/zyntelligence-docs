import { DocLayout } from '@/components/DocLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, Filter, Search, Play, Star, Users, BookOpen, Code2, Brain, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState, useMemo } from 'react';
import { SEOHead } from '@/components/SEOHead';

interface Tutorial {
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  href: string;
  category: string;
  featured?: boolean;
  views?: number;
  rating?: number;
  icon: React.ReactNode;
}

const tutorials: Tutorial[] = [
  { 
    title: 'Build a REST API with Python', 
    description: 'Create a fully functional REST API using Flask with authentication and database integration.',
    duration: '30 min', 
    level: 'Beginner', 
    href: '/docs/python/examples', 
    category: 'Python',
    featured: true,
    views: 12500,
    rating: 4.8,
    icon: <Code2 className="h-5 w-5" />
  },
  { 
    title: 'Create Interactive Web Forms', 
    description: 'Build accessible, validated forms with modern HTML5 features and CSS styling.',
    duration: '20 min', 
    level: 'Beginner', 
    href: '/docs/html/examples', 
    category: 'HTML',
    views: 8900,
    rating: 4.6,
    icon: <Globe className="h-5 w-5" />
  },
  { 
    title: 'Build a Neural Network from Scratch', 
    description: 'Understand deep learning fundamentals by implementing a neural network without frameworks.',
    duration: '45 min', 
    level: 'Intermediate', 
    href: '/paths/ai-ml/deep-learning', 
    category: 'AI/ML',
    featured: true,
    views: 15200,
    rating: 4.9,
    icon: <Brain className="h-5 w-5" />
  },
  { 
    title: 'JavaScript Array Methods Mastery', 
    description: 'Master map, filter, reduce, and other essential array manipulation techniques.',
    duration: '25 min', 
    level: 'Beginner', 
    href: '/docs/javascript/functions', 
    category: 'JavaScript',
    views: 11300,
    rating: 4.7,
    icon: <Code2 className="h-5 w-5" />
  },
  { 
    title: 'CSS Grid Layout Guide', 
    description: 'Create complex, responsive layouts with CSS Grid and real-world examples.',
    duration: '35 min', 
    level: 'Intermediate', 
    href: '/docs/css/properties', 
    category: 'CSS',
    views: 9800,
    rating: 4.5,
    icon: <Globe className="h-5 w-5" />
  },
  { 
    title: 'Machine Learning with Scikit-learn', 
    description: 'Build classification and regression models using Python\'s most popular ML library.',
    duration: '40 min', 
    level: 'Intermediate', 
    href: '/paths/ai-ml/supervised-learning', 
    category: 'AI/ML',
    views: 13400,
    rating: 4.8,
    icon: <Brain className="h-5 w-5" />
  },
  { 
    title: 'Object-Oriented Programming in Java', 
    description: 'Learn classes, inheritance, polymorphism, and design patterns in Java.',
    duration: '50 min', 
    level: 'Intermediate', 
    href: '/docs/java/introduction', 
    category: 'Java',
    views: 7600,
    rating: 4.4,
    icon: <Code2 className="h-5 w-5" />
  },
  { 
    title: 'Memory Management in C++', 
    description: 'Understand pointers, references, and smart pointers for efficient memory handling.',
    duration: '55 min', 
    level: 'Advanced', 
    href: '/docs/cpp/introduction', 
    category: 'C++',
    views: 5200,
    rating: 4.6,
    icon: <Code2 className="h-5 w-5" />
  },
  { 
    title: 'Async JavaScript Deep Dive', 
    description: 'Master promises, async/await, and concurrent programming patterns.',
    duration: '40 min', 
    level: 'Advanced', 
    href: '/docs/javascript/functions', 
    category: 'JavaScript',
    featured: true,
    views: 14100,
    rating: 4.9,
    icon: <Code2 className="h-5 w-5" />
  },
  { 
    title: 'Data Visualization with Python', 
    description: 'Create stunning charts and graphs using Matplotlib and Seaborn.',
    duration: '35 min', 
    level: 'Beginner', 
    href: '/docs/python/examples', 
    category: 'Python',
    views: 10500,
    rating: 4.7,
    icon: <Code2 className="h-5 w-5" />
  },
];

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  Intermediate: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  Advanced: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
};

const categoryColors: Record<string, string> = {
  Python: 'from-yellow-500 to-yellow-600',
  JavaScript: 'from-yellow-400 to-orange-500',
  HTML: 'from-orange-500 to-red-500',
  CSS: 'from-blue-500 to-indigo-500',
  'AI/ML': 'from-purple-500 to-pink-500',
  Java: 'from-red-500 to-orange-600',
  'C++': 'from-blue-600 to-blue-700',
};

const categories = ['All', ...new Set(tutorials.map(t => t.category))];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function Tutorials() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredTutorials = useMemo(() => {
    return tutorials.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
                           t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || t.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [search, selectedCategory, selectedLevel]);

  const featuredTutorials = tutorials.filter(t => t.featured);

  return (
    <DocLayout>
      <SEOHead 
        title="Tutorials - Zerovex Docs"
        description="Step-by-step programming tutorials for Python, JavaScript, AI/ML and more. Build real projects and master new skills."
      />
      <div className="doc-container animate-fade-in">
        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Tutorials
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Learn by Building
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Hands-on tutorials to help you build real projects and master new skills. 
            Start with the basics or dive into advanced topics.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl font-bold text-foreground">{tutorials.length}</div>
            <div className="text-sm text-muted-foreground">Tutorials</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl font-bold text-foreground">{categories.length - 1}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl font-bold text-foreground">100K+</div>
            <div className="text-sm text-muted-foreground">Learners</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl font-bold text-foreground">4.7</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </div>
        </div>

        {/* Featured Tutorials */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Featured Tutorials
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredTutorials.map((tutorial) => (
              <Link
                key={tutorial.title}
                to={tutorial.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${categoryColors[tutorial.category]}`} />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${categoryColors[tutorial.category]} text-white`}>
                      {tutorial.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">{tutorial.category}</Badge>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {tutorial.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {tutorial.rating}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full ${levelColors[tutorial.level]}`}>
                      {tutorial.level}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tutorials..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
            </div>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <span className="text-sm text-muted-foreground py-1">Level:</span>
          {levels.map((level) => (
            <Button
              key={level}
              variant={selectedLevel === level ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </Button>
          ))}
        </div>

        {/* Tutorial List */}
        <div className="grid gap-4 mb-10">
          {filteredTutorials.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No tutorials found matching your criteria.</p>
              <Button variant="link" onClick={() => { setSearch(''); setSelectedCategory('All'); setSelectedLevel('All'); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            filteredTutorials.map((tutorial) => (
              <Link 
                key={tutorial.title} 
                to={tutorial.href} 
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`hidden sm:flex p-3 rounded-xl bg-gradient-to-br ${categoryColors[tutorial.category]} text-white`}>
                    {tutorial.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs text-muted-foreground">{tutorial.category}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${levelColors[tutorial.level]}`}>
                        {tutorial.level}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {tutorial.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                      {tutorial.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {tutorial.duration}
                      </span>
                      {tutorial.views && (
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {(tutorial.views / 1000).toFixed(1)}K views
                        </span>
                      )}
                      {tutorial.rating && (
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {tutorial.rating}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="hidden sm:flex opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Can't find what you're looking for?</h3>
              <p className="text-sm text-muted-foreground">Request a tutorial topic and we'll consider adding it.</p>
            </div>
            <Button>Request Tutorial</Button>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link to="/api-reference"><ArrowLeft className="mr-2 h-4 w-4" />API Reference</Link>
          </Button>
          <Button asChild>
            <Link to="/faq">FAQ<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
