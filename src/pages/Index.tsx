import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { WhatsNew } from '@/components/WhatsNew';
import { SEOHead } from '@/components/SEOHead';
import { ArrowRight, BookOpen, Code, Zap, Brain, Rocket, Shield, Cloud, Database, Globe, Cpu, Layers, Search, Star, FileCode, Lock, Map, HelpCircle, TrendingUp, Users, Award, Play, CheckCircle, GraduationCap, Lightbulb, Copy, Terminal, Layout, Palette, Box, Wrench, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useCallback, memo } from 'react';
import { SearchDialog } from '@/components/SearchDialog';

const languages = [
  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-yellow-600', href: '/docs/python/introduction', lessons: 42 },
  { name: 'JavaScript', icon: 'JS', color: 'from-yellow-300 to-yellow-500', href: '/docs/javascript/introduction', lessons: 38 },
  { name: 'HTML', icon: '</>', color: 'from-orange-400 to-red-500', href: '/docs/html/introduction', lessons: 28 },
  { name: 'CSS', icon: '#', color: 'from-blue-400 to-blue-600', href: '/docs/css/introduction', lessons: 35 },
  { name: 'C++', icon: 'C++', color: 'from-blue-500 to-indigo-600', href: '/docs/cpp/introduction', lessons: 40 },
  { name: 'Java', icon: '☕', color: 'from-red-400 to-red-600', href: '/docs/java/introduction', lessons: 45 },
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

const stats = [
  { value: '50+', label: 'Tutorials', icon: BookOpen },
  { value: '8', label: 'Learning Paths', icon: TrendingUp },
  { value: '6', label: 'Languages', icon: Code },
  { value: '10K+', label: 'Developers', icon: Users },
];

const quickLinks = [
  { title: 'Architecture', description: 'System design overview', icon: Layers, href: '/architecture' },
  { title: 'API Reference', description: 'Complete API docs', icon: FileCode, href: '/api-reference' },
  { title: 'Security', description: 'Best practices guide', icon: Lock, href: '/security' },
  { title: 'Roadmap', description: 'What\'s coming next', icon: Map, href: '/roadmap' },
  { title: 'Tutorials', description: 'Step-by-step guides', icon: BookOpen, href: '/tutorials' },
  { title: 'FAQ', description: 'Common questions', icon: HelpCircle, href: '/faq' },
];

// W3Schools-style sections
const tryItExamples = [
  { 
    title: 'Hello World in Python', 
    language: 'Python',
    code: 'print("Hello, World!")', 
    href: '/docs/python/examples',
    color: 'from-yellow-400 to-yellow-600'
  },
  { 
    title: 'DOM Manipulation', 
    language: 'JavaScript',
    code: 'document.getElementById("demo").innerHTML = "Hello!";', 
    href: '/docs/javascript/examples',
    color: 'from-yellow-300 to-yellow-500'
  },
  { 
    title: 'Your First HTML Page', 
    language: 'HTML',
    code: '<h1>My First Heading</h1>\n<p>My first paragraph.</p>', 
    href: '/docs/html/examples',
    color: 'from-orange-400 to-red-500'
  },
  { 
    title: 'Style with CSS', 
    language: 'CSS',
    code: 'body {\n  background-color: lightblue;\n  font-family: Arial;\n}', 
    href: '/docs/css/examples',
    color: 'from-blue-400 to-blue-600'
  },
];

const exercises = [
  { language: 'Python', count: 25, icon: '🐍', color: 'bg-yellow-500/10 text-yellow-600', href: '/docs/python/examples' },
  { language: 'JavaScript', count: 30, icon: 'JS', color: 'bg-yellow-500/10 text-yellow-600', href: '/docs/javascript/examples' },
  { language: 'HTML', count: 20, icon: '</>', color: 'bg-orange-500/10 text-orange-600', href: '/docs/html/examples' },
  { language: 'CSS', count: 22, icon: '#', color: 'bg-blue-500/10 text-blue-600', href: '/docs/css/examples' },
  { language: 'C++', count: 28, icon: 'C++', color: 'bg-indigo-500/10 text-indigo-600', href: '/docs/cpp/examples' },
  { language: 'Java', count: 32, icon: '☕', color: 'bg-red-500/10 text-red-600', href: '/docs/java/examples' },
];

const references = [
  { title: 'HTML Reference', description: 'All HTML elements & attributes', icon: Layout, href: '/docs/html/elements', color: 'from-orange-400 to-red-500' },
  { title: 'CSS Reference', description: 'All CSS properties & selectors', icon: Palette, href: '/docs/css/properties', color: 'from-blue-400 to-blue-600' },
  { title: 'JavaScript Reference', description: 'All JS methods & objects', icon: Code, href: '/docs/javascript/functions', color: 'from-yellow-400 to-yellow-600' },
  { title: 'Python Reference', description: 'All Python methods & modules', icon: Terminal, href: '/docs/python/functions', color: 'from-green-400 to-emerald-500' },
];

const howToGuides = [
  { title: 'How to Create a Button', category: 'HTML/CSS', href: '/docs/html/elements' },
  { title: 'How to Center a Div', category: 'CSS', href: '/docs/css/properties' },
  { title: 'How to Make an API Call', category: 'JavaScript', href: '/docs/javascript/examples' },
  { title: 'How to Read a File', category: 'Python', href: '/docs/python/examples' },
  { title: 'How to Create a Loop', category: 'All Languages', href: '/docs/python/loops' },
  { title: 'How to Handle Errors', category: 'JavaScript', href: '/docs/javascript/conditions' },
];

const templates = [
  { title: 'Landing Page', description: 'Modern responsive landing page', icon: Layout, href: '/tutorials' },
  { title: 'Portfolio', description: 'Personal portfolio website', icon: Users, href: '/tutorials' },
  { title: 'Dashboard', description: 'Admin dashboard template', icon: Box, href: '/tutorials' },
  { title: 'E-commerce', description: 'Online store template', icon: Globe, href: '/tutorials' },
];

const certificates = [
  { title: 'Python Developer', level: 'Beginner', duration: '4 weeks', href: '/paths/ai-ml/introduction', color: 'from-yellow-400 to-yellow-600' },
  { title: 'Web Developer', level: 'Intermediate', duration: '6 weeks', href: '/getting-started', color: 'from-blue-400 to-blue-600' },
  { title: 'AI/ML Specialist', level: 'Advanced', duration: '8 weeks', href: '/paths/ai-ml/introduction', color: 'from-purple-400 to-pink-500' },
];

export default function Index() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <SEOHead 
        title="Zerovex Docs | Free Programming Tutorials & Developer Documentation"
        description="Learn HTML, CSS, JavaScript, Python, and more with free tutorials, references, and examples. The world's largest developer documentation site."
        keywords="programming tutorials, web development, HTML, CSS, JavaScript, Python, coding, learn to code, developer documentation"
        canonical="https://zerovex-docs.vercel.app/"
      />
      <div className="min-h-screen bg-background">
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container relative py-20 md:py-28 px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
              <Zap className="w-4 h-4" />
              Free. Beginner-Friendly. Industry-Ready.
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Learn to Code with{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Zerovex</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              The world's largest web developer site. Tutorials, references, and examples for HTML, CSS, JavaScript, Python, and more.
            </p>
            
            {/* Search Bar */}
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full max-w-lg mx-auto mb-8 flex items-center gap-3 px-4 py-4 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 text-left group shadow-lg hover:shadow-xl"
            >
              <Search className="h-5 w-5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
              <span className="flex-1 text-muted-foreground">Search tutorials, references, examples...</span>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-muted text-xs text-muted-foreground border border-border font-mono">
                ⌘K
              </kbd>
            </button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25">
                <Link to="/getting-started">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-2">
                <Link to="/docs/html/introduction">Learn HTML</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-2">
                <Link to="/docs/css/introduction">Learn CSS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid - W3Schools style */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Learn by Examples</h2>
            <p className="text-muted-foreground">Choose a programming language and start learning</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {languages.map((lang) => (
              <Link key={lang.name} to={lang.href} className="group p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${lang.color} flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg`}>{lang.icon}</div>
                <h3 className="font-semibold text-foreground group-hover:text-emerald-500 transition-colors mb-1">{lang.name}</h3>
                <p className="text-xs text-muted-foreground">{lang.lessons} lessons</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Try It Yourself Section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <Play className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Try It Yourself</h2>
              <p className="text-sm text-muted-foreground">Click to run code examples</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {tryItExamples.map((example) => (
              <Link
                key={example.title}
                to={example.href}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${example.color} text-white`}>
                    {example.language}
                  </span>
                  <button 
                    onClick={(e) => { e.preventDefault(); copyCode(example.code); }}
                    className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  >
                    {copiedCode === example.code ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <h3 className="font-medium text-foreground mb-3 group-hover:text-emerald-500 transition-colors">
                  {example.title}
                </h3>
                <pre className="text-xs bg-muted/50 p-3 rounded-lg overflow-x-auto text-muted-foreground font-mono">
                  {example.code}
                </pre>
                <div className="mt-3 flex items-center gap-1 text-sm text-emerald-500">
                  <Play className="h-3.5 w-3.5" /> Try it
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exercises Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <CheckCircle className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Exercises</h2>
              <p className="text-sm text-muted-foreground">Test your skills with exercises</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {exercises.map((exercise) => (
              <Link
                key={exercise.language}
                to={exercise.href}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 text-center hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl ${exercise.color} flex items-center justify-center mx-auto mb-3 font-bold text-lg`}>
                  {exercise.icon}
                </div>
                <h3 className="font-medium text-foreground group-hover:text-blue-500 transition-colors">
                  {exercise.language}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{exercise.count} exercises</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <BookOpen className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">References</h2>
              <p className="text-sm text-muted-foreground">Complete language references</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {references.map((ref) => (
              <Link
                key={ref.title}
                to={ref.href}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ref.color} flex items-center justify-center mb-4 text-white`}>
                  <ref.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-purple-500 transition-colors mb-1">
                  {ref.title}
                </h3>
                <p className="text-sm text-muted-foreground">{ref.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <Lightbulb className="h-5 w-5 text-amber-500" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">How To</h2>
              <p className="text-sm text-muted-foreground">Step-by-step guides for common tasks</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {howToGuides.map((guide) => (
              <Link
                key={guide.title}
                to={guide.href}
                className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-amber-500/50 transition-all duration-300 hover:shadow-md"
              >
                <Wrench className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground group-hover:text-amber-500 transition-colors truncate">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{guide.category}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-amber-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link to="/tutorials" className="text-amber-500 hover:text-amber-600 text-sm font-medium inline-flex items-center gap-1">
              View all How To guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20">
              <Layout className="h-5 w-5 text-pink-500" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Templates</h2>
              <p className="text-sm text-muted-foreground">Free website templates to get started</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {templates.map((template) => (
              <Link
                key={template.title}
                to={template.href}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                  <template.icon className="h-10 w-10 text-pink-500" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-pink-500 transition-colors mb-1">
                  {template.title}
                </h3>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <GraduationCap className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Certificates</h2>
              <p className="text-sm text-muted-foreground">Get certified and boost your career</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert) => (
              <Link
                key={cert.title}
                to={cert.href}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full`} />
                <GraduationCap className={`h-10 w-10 mb-4 bg-gradient-to-br ${cert.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 text-white`}>
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-emerald-500 transition-colors mb-2">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full bg-muted">{cert.level}</span>
                  <span>{cert.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's New */}
      <WhatsNew />

      {/* Career Paths */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Career Focused
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Career Learning Paths</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your future. Each path takes you from fundamentals to job-ready skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {learningPaths.map((path) => (
              <Link key={path.name} to={path.href} className="group relative p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <path.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-emerald-500 transition-colors">{path.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {path.topics.map((topic) => (
                    <span key={topic} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{topic}</span>
                  ))}
                </div>
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Quick Links</h2>
            <p className="text-muted-foreground">Everything you need in one place</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <link.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="font-medium text-foreground group-hover:text-emerald-500 transition-colors">{link.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-500/5 to-transparent">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              Start Today
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers mastering programming and modern tech skills with Zerovex.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25">
                <Link to="/getting-started">
                  Start Learning for Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <span className="font-bold text-foreground">Zerovex</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The world's largest developer documentation site. Learn HTML, CSS, JavaScript, Python, and more.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Tutorials</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/docs/html/introduction" className="hover:text-foreground transition-colors">HTML</Link>
                <Link to="/docs/css/introduction" className="hover:text-foreground transition-colors">CSS</Link>
                <Link to="/docs/javascript/introduction" className="hover:text-foreground transition-colors">JavaScript</Link>
                <Link to="/docs/python/introduction" className="hover:text-foreground transition-colors">Python</Link>
              </nav>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">References</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/docs/html/elements" className="hover:text-foreground transition-colors">HTML Reference</Link>
                <Link to="/docs/css/properties" className="hover:text-foreground transition-colors">CSS Reference</Link>
                <Link to="/docs/javascript/functions" className="hover:text-foreground transition-colors">JavaScript Reference</Link>
                <Link to="/api-reference" className="hover:text-foreground transition-colors">API Reference</Link>
              </nav>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Resources</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/tutorials" className="hover:text-foreground transition-colors">Tutorials</Link>
                <Link to="/resources" className="hover:text-foreground transition-colors">Downloads</Link>
                <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
                <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              </nav>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Zerovex. Free to use and open source.
            </p>
            <nav className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/security" className="hover:text-foreground transition-colors">Privacy</Link>
              <a href="https://github.com/zainabqureshi09" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                GitHub <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
