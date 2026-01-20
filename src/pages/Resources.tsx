import { DocLayout } from '@/components/DocLayout';
import { DocFeedback } from '@/components/DocFeedback';
import { Download, FileText, Book, ExternalLink, Code2, Terminal, Palette, Github, Globe, Video, Bookmark, CheckCircle2, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useMemo } from 'react';
import { SEOHead } from '@/components/SEOHead';

interface CheatSheet {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
  downloadUrl?: string;
  popularity: number;
}

const cheatSheets: CheatSheet[] = [
  {
    title: 'Python Cheat Sheet',
    description: 'Essential Python syntax, data types, and common patterns',
    icon: <Code2 className="h-5 w-5" />,
    color: 'from-yellow-400 to-yellow-600',
    items: ['Variables & Types', 'Control Flow', 'Functions', 'List Comprehensions', 'File I/O', 'Classes', 'Error Handling', 'Modules'],
    popularity: 4850,
  },
  {
    title: 'JavaScript Cheat Sheet',
    description: 'Modern JavaScript features and DOM manipulation',
    icon: <Terminal className="h-5 w-5" />,
    color: 'from-yellow-300 to-orange-500',
    items: ['ES6+ Features', 'Array Methods', 'Async/Await', 'DOM API', 'Event Handling', 'Modules', 'Promises', 'Destructuring'],
    popularity: 5200,
  },
  {
    title: 'Git Commands',
    description: 'Essential Git commands for version control',
    icon: <Github className="h-5 w-5" />,
    color: 'from-gray-600 to-gray-800',
    items: ['Clone & Init', 'Branch Management', 'Commit & Push', 'Merge & Rebase', 'Stash', 'Reset & Revert', 'Tags', 'Remote'],
    popularity: 3900,
  },
  {
    title: 'CSS Flexbox & Grid',
    description: 'Layout patterns for modern web design',
    icon: <Palette className="h-5 w-5" />,
    color: 'from-blue-400 to-blue-600',
    items: ['Flexbox Properties', 'Grid Template', 'Responsive Design', 'Gap & Alignment', 'Auto-fit/fill', 'Common Patterns', 'Media Queries'],
    popularity: 4100,
  },
  {
    title: 'Linux Commands',
    description: 'Essential terminal commands for developers',
    icon: <Terminal className="h-5 w-5" />,
    color: 'from-green-500 to-green-700',
    items: ['File Operations', 'Permissions', 'Process Management', 'Network', 'SSH', 'Package Management', 'Grep & Find'],
    popularity: 3200,
  },
  {
    title: 'SQL Queries',
    description: 'Database query patterns and best practices',
    icon: <FileText className="h-5 w-5" />,
    color: 'from-purple-500 to-purple-700',
    items: ['SELECT Queries', 'JOINs', 'Aggregations', 'Subqueries', 'Indexes', 'Transactions', 'Window Functions'],
    popularity: 3600,
  },
];

interface Resource {
  title: string;
  description: string;
  type: 'tool' | 'book' | 'course' | 'community' | 'video';
  url: string;
  featured?: boolean;
}

const externalResources: Resource[] = [
  { title: 'VS Code', description: 'Free code editor with great extensions', type: 'tool', url: 'https://code.visualstudio.com/', featured: true },
  { title: 'Python.org', description: 'Official Python download and docs', type: 'tool', url: 'https://www.python.org/' },
  { title: 'MDN Web Docs', description: 'Comprehensive web development reference', type: 'book', url: 'https://developer.mozilla.org/', featured: true },
  { title: 'freeCodeCamp', description: 'Free interactive coding curriculum', type: 'course', url: 'https://www.freecodecamp.org/', featured: true },
  { title: 'Stack Overflow', description: 'Q&A community for developers', type: 'community', url: 'https://stackoverflow.com/' },
  { title: 'GitHub', description: 'Code hosting and collaboration platform', type: 'tool', url: 'https://github.com/', featured: true },
  { title: 'The Odin Project', description: 'Full stack curriculum', type: 'course', url: 'https://www.theodinproject.com/' },
  { title: 'Traversy Media', description: 'Web development tutorials', type: 'video', url: 'https://www.youtube.com/user/TechGuyWeb' },
  { title: 'Dev.to', description: 'Developer blogging platform', type: 'community', url: 'https://dev.to/' },
  { title: 'Fireship', description: 'Quick, high-quality dev content', type: 'video', url: 'https://www.youtube.com/c/Fireship' },
  { title: 'Can I Use', description: 'Browser compatibility tables', type: 'tool', url: 'https://caniuse.com/' },
  { title: 'Roadmap.sh', description: 'Developer roadmaps and guides', type: 'book', url: 'https://roadmap.sh/' },
];

interface Template {
  title: string;
  description: string;
  icon: string;
  tech: string[];
  stars: number;
  url?: string;
}

const templates: Template[] = [
  {
    title: 'Python CLI App',
    description: 'Command-line application template with argument parsing and configuration',
    icon: '🐍',
    tech: ['Python', 'Click', 'TOML'],
    stars: 245,
  },
  {
    title: 'React Starter',
    description: 'Modern React with TypeScript, Tailwind, and routing configured',
    icon: '⚛️',
    tech: ['React', 'TypeScript', 'Tailwind'],
    stars: 512,
  },
  {
    title: 'ML Notebook',
    description: 'Jupyter notebook template for machine learning projects',
    icon: '🤖',
    tech: ['Python', 'Jupyter', 'Scikit-learn'],
    stars: 189,
  },
  {
    title: 'Express API',
    description: 'REST API boilerplate with authentication and database',
    icon: '🚀',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    stars: 367,
  },
  {
    title: 'FastAPI Backend',
    description: 'Modern Python API with automatic documentation',
    icon: '⚡',
    tech: ['Python', 'FastAPI', 'SQLAlchemy'],
    stars: 298,
  },
  {
    title: 'Static Site',
    description: 'Simple HTML/CSS/JS starter with build tools',
    icon: '📄',
    tech: ['HTML', 'CSS', 'Vite'],
    stars: 156,
  },
];

const typeConfig = {
  tool: { color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400', icon: <Globe className="h-4 w-4" /> },
  book: { color: 'bg-green-500/10 text-green-600 dark:text-green-400', icon: <Book className="h-4 w-4" /> },
  course: { color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400', icon: <Bookmark className="h-4 w-4" /> },
  community: { color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400', icon: <Github className="h-4 w-4" /> },
  video: { color: 'bg-red-500/10 text-red-600 dark:text-red-400', icon: <Video className="h-4 w-4" /> },
};

export default function Resources() {
  const [search, setSearch] = useState('');
  const [resourceFilter, setResourceFilter] = useState<string>('all');

  const filteredResources = useMemo(() => {
    return externalResources.filter(r => {
      const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
                           r.description.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = resourceFilter === 'all' || r.type === resourceFilter;
      return matchesSearch && matchesFilter;
    });
  }, [search, resourceFilter]);

  return (
    <DocLayout>
      <SEOHead 
        title="Resources - Zerovex Docs"
        description="Developer resources, cheat sheets, project templates, and curated external links to accelerate your learning."
      />
      <div className="doc-container animate-fade-in">
        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Download className="w-4 h-4" />
            Resources
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Developer Resources
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Cheat sheets, templates, and curated resources to accelerate your learning and boost productivity.
          </p>
        </div>

        <Tabs defaultValue="cheatsheets" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="cheatsheets">Cheat Sheets</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="external">External Resources</TabsTrigger>
          </TabsList>

          {/* Cheat Sheets Tab */}
          <TabsContent value="cheatsheets">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cheatSheets.map((sheet) => (
                <div
                  key={sheet.title}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${sheet.color} text-white shadow-lg`}>
                      {sheet.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {sheet.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{sheet.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sheet.items.slice(0, 6).map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                    {sheet.items.length > 6 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        +{sheet.items.length - 6} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {sheet.popularity.toLocaleString()} downloads
                    </span>
                    <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Request Cheat Sheet */}
            <div className="mt-8 rounded-xl bg-muted/50 border border-border p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Need a cheat sheet we don't have?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Request a new cheat sheet and we'll consider adding it to our collection.
              </p>
              <Button variant="outline">Request Cheat Sheet</Button>
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div
                  key={template.title}
                  className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                      {template.icon}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Github className="h-4 w-4" />
                      {template.stars}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {template.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {template.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {template.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-1">
                      <Github className="h-4 w-4" />
                      Clone
                    </Button>
                    <Button size="sm" className="flex-1 gap-1">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-8 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">More Templates Coming Soon</h3>
                  <p className="text-sm text-muted-foreground">
                    We're adding templates for Django, Next.js, Flutter, and more.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* External Resources Tab */}
          <TabsContent value="external">
            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={resourceFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('all')}
                >
                  All
                </Button>
                {Object.entries(typeConfig).map(([type, config]) => (
                  <Button
                    key={type}
                    variant={resourceFilter === type ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setResourceFilter(type)}
                    className="gap-1"
                  >
                    {config.icon}
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured */}
            {resourceFilter === 'all' && !search && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Featured Resources
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {externalResources.filter(r => r.featured).map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {typeConfig[resource.type].icon}
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </h4>
                        <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* All Resources */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all flex items-start gap-3"
                >
                  <div className={`p-2 rounded-lg ${typeConfig[resource.type].color}`}>
                    {typeConfig[resource.type].icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                        {resource.title}
                      </h4>
                      <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No resources found matching your search.</p>
                <Button variant="link" onClick={() => { setSearch(''); setResourceFilter('all'); }}>
                  Clear filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Learning Tips */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">How to Use These Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Keep cheat sheets open while coding for quick reference
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Use templates as starting points, not final solutions
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Cross-reference with external docs for deeper understanding
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Bookmark resources you find yourself using often
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <DocFeedback pageTitle="Resources" />
      </div>
    </DocLayout>
  );
}
