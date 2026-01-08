import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { ArrowRight, BookOpen, Code, Zap, Brain, Rocket, Shield, Cloud, Database, Globe, Cpu, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="container relative py-24 md:py-32 px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Learn Programming. Intelligently.
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Master Modern Tech with <span className="text-primary">Zyntelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From programming basics to AI, Cloud, and beyond. A beginner-friendly platform designed to take you from zero to industry-ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/paths/ai-ml/introduction">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/docs/python/introduction">Learn Programming First</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <footer className="border-t border-border py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">Z</span>
              </div>
              <span className="font-bold text-foreground">Zyntelligence</span>
            </div>
            <p className="text-sm text-muted-foreground">Learn Programming. Intelligently.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
