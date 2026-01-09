import { DocLayout } from '@/components/DocLayout';
import { DocFeedback } from '@/components/DocFeedback';
import { Download, FileText, Book, ExternalLink, Code2, Terminal, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CheatSheet {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

const cheatSheets: CheatSheet[] = [
  {
    title: 'Python Cheat Sheet',
    description: 'Essential Python syntax, data types, and common patterns',
    icon: <Code2 className="h-5 w-5" />,
    color: 'from-yellow-400 to-yellow-600',
    items: ['Variables & Types', 'Control Flow', 'Functions', 'List Comprehensions', 'File I/O', 'Classes'],
  },
  {
    title: 'JavaScript Cheat Sheet',
    description: 'Modern JavaScript features and DOM manipulation',
    icon: <Terminal className="h-5 w-5" />,
    color: 'from-yellow-300 to-yellow-500',
    items: ['ES6+ Features', 'Array Methods', 'Async/Await', 'DOM API', 'Event Handling', 'Modules'],
  },
  {
    title: 'Git Commands',
    description: 'Essential Git commands for version control',
    icon: <FileText className="h-5 w-5" />,
    color: 'from-orange-500 to-red-500',
    items: ['Clone & Init', 'Branch Management', 'Commit & Push', 'Merge & Rebase', 'Stash', 'Reset & Revert'],
  },
  {
    title: 'CSS Flexbox & Grid',
    description: 'Layout patterns for modern web design',
    icon: <Palette className="h-5 w-5" />,
    color: 'from-blue-400 to-blue-600',
    items: ['Flexbox Properties', 'Grid Template', 'Responsive Design', 'Gap & Alignment', 'Auto-fit/fill', 'Common Patterns'],
  },
];

interface Resource {
  title: string;
  description: string;
  type: 'tool' | 'book' | 'course' | 'community';
  url: string;
}

const externalResources: Resource[] = [
  { title: 'VS Code', description: 'Free code editor with great extensions', type: 'tool', url: 'https://code.visualstudio.com/' },
  { title: 'Python.org', description: 'Official Python download and docs', type: 'tool', url: 'https://www.python.org/' },
  { title: 'MDN Web Docs', description: 'Comprehensive web development reference', type: 'book', url: 'https://developer.mozilla.org/' },
  { title: 'freeCodeCamp', description: 'Free interactive coding curriculum', type: 'course', url: 'https://www.freecodecamp.org/' },
  { title: 'Stack Overflow', description: 'Q&A community for developers', type: 'community', url: 'https://stackoverflow.com/' },
  { title: 'GitHub', description: 'Code hosting and collaboration platform', type: 'tool', url: 'https://github.com/' },
];

const typeColors = {
  tool: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  book: 'bg-green-500/10 text-green-600 dark:text-green-400',
  course: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  community: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
};

export default function Resources() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Download className="w-4 h-4" />
            Resources
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Cheat Sheets & Resources
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Quick reference guides and curated resources to accelerate your learning journey.
          </p>
        </div>

        {/* Cheat Sheets */}
        <section className="mb-12">
          <h2 className="doc-subheading">Cheat Sheets</h2>
          <p className="doc-paragraph">
            Quick reference guides covering essential syntax and patterns. Click to view or download.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cheatSheets.map((sheet) => (
              <div
                key={sheet.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${sheet.color} text-white`}>
                    {sheet.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {sheet.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{sheet.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {sheet.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Section */}
        <section className="mb-12">
          <h2 className="doc-subheading">Project Templates</h2>
          <p className="doc-paragraph">
            Starter templates to kickstart your projects with best practices built-in.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-lg">🐍</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Python CLI App</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Command-line application template with argument parsing
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                Coming soon
              </Button>
            </div>
            
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-lg">⚛️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">React Starter</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Modern React with TypeScript, Tailwind, and routing
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                Coming soon
              </Button>
            </div>
            
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-lg">🤖</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">ML Notebook</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Jupyter notebook template for machine learning projects
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                Coming soon
              </Button>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="mb-12">
          <h2 className="doc-subheading">Recommended Resources</h2>
          <p className="doc-paragraph">
            Curated external resources to supplement your learning.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {externalResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all flex items-start gap-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[resource.type]}`}>
                  {resource.type}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Learning Tips */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Book className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">How to Use These Resources</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Keep cheat sheets open while coding for quick reference</li>
                <li>• Use templates as starting points, not final solutions</li>
                <li>• Cross-reference with external docs for deeper understanding</li>
                <li>• Bookmark resources you find yourself using often</li>
              </ul>
            </div>
          </div>
        </div>

        <DocFeedback pageTitle="Resources" />
      </div>
    </DocLayout>
  );
}
