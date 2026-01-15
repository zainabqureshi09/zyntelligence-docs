import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { WhatsNew } from '@/components/WhatsNew';
import { ArrowRight, BookOpen, Code, Zap, Brain, Rocket, Shield, Cloud, Database, Globe, Cpu, Layers, Search, Star, FileCode, Lock, Map, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SearchDialog } from '@/components/SearchDialog';

const languages = [
  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-yellow-600', href: '/docs/python/introduction' },
  { name: 'JavaScript', icon: 'JS', color: 'from-yellow-300 to-yellow-500', href: '/docs/javascript/introduction' },
  { name: 'HTML', icon: '</>', color: 'from-orange-400 to-red-500', href: '/docs/html/introduction' },
  { name: 'CSS', icon: '#', color: 'from-blue-400 to-blue-600', href: '/docs/css/introduction' },
  { name: 'C++', icon: 'C++', color: 'from-blue-500 to-indigo-600', href: '/docs/cpp/introduction' },
  { name: 'Java', icon: '☕', color: 'from-red-400 to-red-600', href: '/docs/java/introduction' },
];

const learningPaths = [
  { name: 'AI and Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500', href: '/paths/ai-ml/introduction', description: 'Build intelligent systems', topics: ['Neural Networks', 'Deep Learning', 'NLP'] },
  { name: 'Data Science', icon: Database, color: 'from-green-400 to-emerald-600', href: '/paths/data-science/introduction', description: 'Extract insights from data', topics: ['Statistics', 'Visualization', 'Big Data'] },
  { name: 'Cloud and DevOps', icon: Cloud, color: 'from-sky-400 to-blue-600', href: '/paths/cloud-devops/introduction', description: 'Build scalable infrastructure', topics: ['AWS', 'Docker', 'Kubernetes'] },
  { name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', href: '/paths/cybersecurity/introduction', description: 'Protect systems from threats', topics: ['Network Security', 'Ethical Hacking'] },
  { name: 'Full Stack Development', icon: Globe, color: 'from-indigo-500 to-purple-600', href: '/paths/fullstack/introduction', description: 'Build complete web apps', topics: ['Frontend', 'Backend', 'APIs'] },
  { name: 'Blockchain and Web3', icon: Layers, color: 'from-amber-400 to-orange-600', href: '/paths/blockchain/introduction', description: 'Decentralized applications', topics: ['Ethereum', 'Smart Contracts'] },
  { name: 'IoT and Embedded', icon: Cpu, color: 'from-teal-400 to-cyan-600', href: '/paths/iot/introduction', description: 'Connect physical devices', topics: ['Arduino', 'Raspberry Pi'] },
  { name: 'Emerging Tech', icon: Rocket, color: 'from-fuchsia-500 to-pink-600', href: '/paths/emerging/introduction', description: 'AR/VR and Quantum Computing', topics: ['AR/VR', 'Quantum Basics'] },
];

const features = [
  { icon: BookOpen, title: 'Beginner Friendly', description: 'Start from zero with clear explanations' },
  { icon: Code, title: 'Hands-on Examples', description: 'Learn by doing with real code' },
  { icon: Rocket, title: 'Career Paths', description: '8 structured learning tracks' },
  { icon: Star, title: 'Free Forever', description: 'No paywalls or subscriptions' },
];

const quickLinks = [
  { title: 'Architecture', description: 'System design overview', icon: Layers, href: '/architecture' },
  { title: 'API Reference', description: 'Complete API docs', icon: FileCode, href: '/api-reference' },
  { title: 'Security', description: 'Best practices guide', icon: Lock, href: '/security' },
  { title: 'Roadmap', description: 'What\'s coming next', icon: Map, href: '/roadmap' },
  { title: 'Tutorials', description: 'Step-by-step guides', icon: BookOpen, href: '/tutorials' },
  { title: 'FAQ', description: 'Common questions', icon: HelpCircle, href: '/faq' },
];

export default function Index() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container relative py-20 md:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Free. Beginner-Friendly. Industry-Ready.
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Learn Modern Tech with{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Neurovera</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              From programming basics to AI, Cloud, and beyond. A comprehensive documentation platform designed to take you from zero to industry-ready.
            </p>
            
            {/* Search Bar */}
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full max-w-lg mx-auto mb-8 flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-left group"
            >
              <Search className="h-5 w-5 text-muted-foreground" />
              <span className="flex-1 text-muted-foreground">Search documentation...</span>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground border border-border">
                ⌘K
              </kbd>
            </button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/getting-started">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/docs/python/introduction">Browse Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b border-border">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/20">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-2">Explore Neurovera</h2>
            <p className="text-muted-foreground">Everything you need to build, learn, and grow</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's New */}
      <WhatsNew />

      {/* Career Paths */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Career Learning Paths</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your future. Each path takes you from fundamentals to job-ready skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {learningPaths.map((path, index) => (
              <Link key={path.name} to={path.href} className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <path.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{path.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{path.description}</p>
                <div className="flex flex-wrap gap-1">
                  {path.topics.map((topic) => (
                    <span key={topic} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{topic}</span>
                  ))}
                </div>
                <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Programming Languages</h2>
            <p className="text-muted-foreground text-lg">Build your foundation with comprehensive tutorials</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <Link key={lang.name} to={lang.href} className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lang.color} flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto group-hover:scale-110 transition-transform`}>{lang.icon}</div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{lang.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers mastering programming and modern tech skills with Neurovera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/getting-started">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resources">
                  View Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">N</span>
              </div>
              <span className="font-bold text-foreground">Neurovera Docs</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/getting-started" className="hover:text-foreground transition-colors">Getting Started</Link>
              <Link to="/docs/python/introduction" className="hover:text-foreground transition-colors">Documentation</Link>
              <Link to="/api-reference" className="hover:text-foreground transition-colors">API Reference</Link>
              <Link to="/tutorials" className="hover:text-foreground transition-colors">Tutorials</Link>
              <Link to="/resources" className="hover:text-foreground transition-colors">Resources</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            </nav>
            
            <p className="text-sm text-muted-foreground">
              © 2026 Neurovera. Open source and free for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
