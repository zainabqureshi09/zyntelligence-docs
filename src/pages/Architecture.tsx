import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Layers, Database, Cloud, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const architectureLayers = [
  {
    icon: Globe,
    title: 'Presentation Layer',
    description: 'React-based frontend with responsive design and real-time updates',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
  },
  {
    icon: Zap,
    title: 'Application Layer',
    description: 'Business logic, state management, and API integrations',
    technologies: ['React Query', 'Zustand', 'React Router', 'Zod'],
  },
  {
    icon: Cloud,
    title: 'API Layer',
    description: 'Edge functions and serverless API endpoints',
    technologies: ['Supabase Edge Functions', 'Deno', 'REST APIs', 'WebSockets'],
  },
  {
    icon: Database,
    title: 'Data Layer',
    description: 'PostgreSQL database with real-time subscriptions',
    technologies: ['PostgreSQL', 'Row Level Security', 'Realtime', 'Storage'],
  },
  {
    icon: Shield,
    title: 'Security Layer',
    description: 'Authentication, authorization, and data protection',
    technologies: ['JWT', 'RLS Policies', 'RBAC', 'Encryption'],
  },
];

export default function Architecture() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-primary/10 text-primary">
            System Design
          </span>
        </div>

        <h1 className="doc-heading">Architecture Overview</h1>

        <p className="doc-paragraph">
          Neurovera is built on a modern, scalable architecture designed for performance, security, and maintainability. This document provides an overview of our system design and the technologies that power the platform.
        </p>

        {/* Architecture Diagram */}
        <div className="my-10 p-8 rounded-xl bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-6 text-center">System Architecture</h3>
          <div className="flex flex-col gap-3">
            {architectureLayers.map((layer, index) => (
              <div key={layer.title} className="relative">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <layer.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{layer.title}</h4>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
                  </div>
                  <div className="hidden md:flex flex-wrap gap-1 max-w-xs">
                    {layer.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="absolute left-7 -bottom-3 w-0.5 h-3 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        <h2 className="doc-subheading">Core Principles</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-muted/50">
            <h4 className="font-semibold text-foreground mb-2">Separation of Concerns</h4>
            <p className="text-sm text-muted-foreground">
              Each layer has distinct responsibilities, making the codebase easier to understand, test, and maintain.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <h4 className="font-semibold text-foreground mb-2">Security by Default</h4>
            <p className="text-sm text-muted-foreground">
              Row-level security policies ensure data is protected at the database level, not just the application layer.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <h4 className="font-semibold text-foreground mb-2">Type Safety</h4>
            <p className="text-sm text-muted-foreground">
              TypeScript throughout the stack catches errors at compile time and improves developer experience.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <h4 className="font-semibold text-foreground mb-2">Real-time First</h4>
            <p className="text-sm text-muted-foreground">
              Built-in support for real-time updates enables collaborative features and live data synchronization.
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">Data Flow</h2>

        <CodeBlock
          language="typescript"
          title="Example: Fetching Documentation"
          code={`// 1. Component requests data
const { data: docs } = useQuery({
  queryKey: ['docs', categoryId],
  queryFn: async () => {
    // 2. Query goes through Supabase client
    const { data, error } = await supabase
      .from('docs')
      .select('*')
      .eq('category_id', categoryId)
      .eq('status', 'published')
      .order('sort_order');
    
    // 3. RLS policies filter data at DB level
    // 4. Results returned to component
    if (error) throw error;
    return data;
  }
});

// 5. React Query caches and manages state
// 6. Component re-renders with data`}
        />

        <h2 className="doc-subheading">Deployment Architecture</h2>

        <p className="doc-paragraph">
          Neurovera uses a serverless deployment model with edge computing for optimal performance:
        </p>

        <ul className="doc-list">
          <li><strong>Static Assets:</strong> CDN-delivered for global low latency</li>
          <li><strong>API Functions:</strong> Edge functions deployed globally</li>
          <li><strong>Database:</strong> Managed PostgreSQL with automatic backups</li>
          <li><strong>File Storage:</strong> S3-compatible object storage with CDN</li>
        </ul>

        <div className="flex justify-between mt-12">
          <Button variant="outline" asChild>
            <Link to="/getting-started">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Getting Started
            </Link>
          </Button>
          <Button asChild>
            <Link to="/api-reference">
              API Reference
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
