import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { ArrowRight, BookOpen, Code, Zap, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const languages = [
  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-yellow-600', href: '/docs/python/introduction', description: 'Beginner-friendly, versatile language' },
  { name: 'JavaScript', icon: 'JS', color: 'from-yellow-300 to-yellow-500', href: '/docs/javascript/introduction', description: 'The language of the web' },
  { name: 'HTML', icon: '</>', color: 'from-orange-400 to-red-500', href: '/docs/html/introduction', description: 'Structure your web content' },
  { name: 'CSS', icon: '#', color: 'from-blue-400 to-blue-600', href: '/docs/css/introduction', description: 'Style and design websites' },
  { name: 'C++', icon: 'C++', color: 'from-blue-500 to-indigo-600', href: '/docs/cpp/introduction', description: 'High-performance programming' },
  { name: 'Java', icon: '☕', color: 'from-red-400 to-red-600', href: '/docs/java/introduction', description: 'Enterprise-grade applications' },
];

const features = [
  {
    icon: BookOpen,
    title: 'Structured Learning',
    description: 'Follow a clear path from basics to advanced topics with our carefully crafted documentation.',
  },
  {
    icon: Code,
    title: 'Interactive Examples',
    description: 'Learn by doing with runnable code examples and hands-on exercises.',
  },
  {
    icon: Zap,
    title: 'Quick Reference',
    description: 'Fast access to syntax, methods, and best practices when you need them.',
  },
  {
    icon: Brain,
    title: 'AI-Ready',
    description: 'Built for the future with RAG-optimized content for intelligent assistance.',
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="container relative py-24 md:py-32 px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Learn Programming. Intelligently.
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Master Programming with{' '}
              <span className="text-primary">Zyntelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A modern, beginner-friendly documentation platform designed for developers 
              who want to learn programming the right way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/docs/python/introduction">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/docs/javascript/introduction">
                  Browse Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Language</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive documentation for the most popular programming languages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {languages.map((lang, index) => (
              <Link
                key={lang.name}
                to={lang.href}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${lang.color} flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform`}>
                  {lang.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang.name}
                </h3>
                <p className="text-muted-foreground text-sm">{lang.description}</p>
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">Z</span>
              </div>
              <span className="font-bold text-foreground">Zyntelligence</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Learn Programming. Intelligently.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
