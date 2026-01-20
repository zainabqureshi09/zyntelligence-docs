import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Key, Globe, Shield, Zap, Copy, Check, ChevronRight, Code2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';

interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  auth: boolean;
  category: string;
  requestBody?: string;
  responseExample?: string;
}

const endpoints: Endpoint[] = [
  {
    method: 'GET',
    path: '/docs',
    description: 'List all published documentation pages with optional filtering and pagination.',
    auth: false,
    category: 'Documentation',
    responseExample: `{
  "data": [
    {
      "id": "doc_1",
      "title": "Python Introduction",
      "slug": "python-introduction",
      "summary": "Get started with Python...",
      "category": "python",
      "updated_at": "2024-01-15T10:00:00Z"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 20
  }
}`
  },
  {
    method: 'GET',
    path: '/docs/:slug',
    description: 'Get a specific documentation page by its URL slug.',
    auth: false,
    category: 'Documentation',
    responseExample: `{
  "id": "doc_1",
  "title": "Python Introduction",
  "slug": "python-introduction",
  "content": "# Getting Started with Python...",
  "summary": "Learn the basics of Python",
  "category": "python",
  "version": 3,
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-15T10:00:00Z"
}`
  },
  {
    method: 'POST',
    path: '/docs',
    description: 'Create a new documentation page. Requires editor or admin role.',
    auth: true,
    category: 'Documentation',
    requestBody: `{
  "title": "New Tutorial",
  "slug": "new-tutorial",
  "content": "# Tutorial Content...",
  "category_id": "cat_python",
  "status": "draft"
}`,
    responseExample: `{
  "id": "doc_new",
  "title": "New Tutorial",
  "slug": "new-tutorial",
  "status": "draft",
  "created_at": "2024-01-20T12:00:00Z"
}`
  },
  {
    method: 'PUT',
    path: '/docs/:id',
    description: 'Update an existing documentation page. Creates a new version.',
    auth: true,
    category: 'Documentation',
    requestBody: `{
  "title": "Updated Title",
  "content": "# Updated content...",
  "status": "published"
}`
  },
  {
    method: 'DELETE',
    path: '/docs/:id',
    description: 'Delete a documentation page. Requires admin role.',
    auth: true,
    category: 'Documentation'
  },
  {
    method: 'GET',
    path: '/categories',
    description: 'List all documentation categories with doc counts.',
    auth: false,
    category: 'Categories',
    responseExample: `{
  "data": [
    {
      "id": "cat_1",
      "name": "Python",
      "slug": "python",
      "icon": "🐍",
      "doc_count": 15
    }
  ]
}`
  },
  {
    method: 'POST',
    path: '/search',
    description: 'Search documentation with AI-powered semantic understanding.',
    auth: false,
    category: 'Search',
    requestBody: `{
  "query": "how to create a list in python",
  "limit": 10,
  "ai_summary": true
}`,
    responseExample: `{
  "results": [
    {
      "id": "doc_1",
      "title": "Python Lists",
      "excerpt": "Lists are ordered collections...",
      "relevance": 0.95
    }
  ],
  "ai_summary": "To create a list in Python, use square brackets: my_list = [1, 2, 3]",
  "intent": "learn"
}`
  },
  {
    method: 'POST',
    path: '/explain-code',
    description: 'Get AI-powered explanation for code snippets.',
    auth: true,
    category: 'AI',
    requestBody: `{
  "code": "const sum = arr.reduce((a, b) => a + b, 0);",
  "language": "javascript",
  "detail_level": "beginner"
}`,
    responseExample: `{
  "explanation": "This code calculates the sum of all numbers in an array...",
  "concepts": ["reduce", "arrow functions", "accumulator"],
  "related_docs": ["/docs/javascript/functions"]
}`
  },
];

const methodColors: Record<string, { bg: string; text: string }> = {
  GET: { bg: 'bg-green-500/10', text: 'text-green-600 dark:text-green-400' },
  POST: { bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400' },
  PUT: { bg: 'bg-yellow-500/10', text: 'text-yellow-600 dark:text-yellow-400' },
  DELETE: { bg: 'bg-red-500/10', text: 'text-red-600 dark:text-red-400' },
  PATCH: { bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400' },
};

const categories = [...new Set(endpoints.map(e => e.category))];

export default function ApiReference() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const filteredEndpoints = selectedCategory === 'All' 
    ? endpoints 
    : endpoints.filter(e => e.category === selectedCategory);

  return (
    <DocLayout>
      <SEOHead 
        title="API Reference - Zerovex Docs"
        description="Complete API documentation for Zerovex. Learn about endpoints, authentication, and how to integrate with our platform."
      />
      <div className="doc-container animate-fade-in">
        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Code2 className="w-4 h-4" />
            API Reference
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Zerovex API
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Programmatic access to documentation, search, and AI features. 
            Build integrations and automate your workflow.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-card border border-border">
            <Globe className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-semibold text-foreground text-sm mb-1">Base URL</h4>
            <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              api.zerovex.dev/v1
            </code>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <Key className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-semibold text-foreground text-sm mb-1">Authentication</h4>
            <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              Bearer token
            </code>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <Zap className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-semibold text-foreground text-sm mb-1">Rate Limit</h4>
            <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              1000 req/hour
            </code>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <Shield className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-semibold text-foreground text-sm mb-1">Format</h4>
            <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              JSON
            </code>
          </div>
        </div>

        {/* Authentication Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Authentication</h2>
          <p className="text-muted-foreground mb-4">
            Protected endpoints require a Bearer token in the Authorization header. 
            Get your API key from your account settings.
          </p>

          <Tabs defaultValue="curl" className="w-full">
            <TabsList>
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="curl">
              <CodeBlock
                language="bash"
                title="Authentication Header"
                code={`curl -X GET "https://api.zerovex.dev/v1/docs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              />
            </TabsContent>
            <TabsContent value="javascript">
              <CodeBlock
                language="javascript"
                title="JavaScript Fetch"
                code={`const response = await fetch('https://api.zerovex.dev/v1/docs', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();`}
              />
            </TabsContent>
            <TabsContent value="python">
              <CodeBlock
                language="python"
                title="Python Requests"
                code={`import requests

response = requests.get(
    'https://api.zerovex.dev/v1/docs',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
)

data = response.json()`}
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-6">
          <Button
            variant={selectedCategory === 'All' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('All')}
          >
            All Endpoints
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Endpoints</h2>
          
          <div className="space-y-4">
            {filteredEndpoints.map((endpoint) => (
              <div 
                key={`${endpoint.method}-${endpoint.path}`} 
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                {/* Header */}
                <div className="p-4 border-b border-border bg-muted/30">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${methodColors[endpoint.method].bg} ${methodColors[endpoint.method].text}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                      {endpoint.auth && (
                        <Badge variant="secondary" className="gap-1">
                          <Shield className="h-3 w-3" />
                          Auth
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(`https://api.zerovex.dev/v1${endpoint.path}`)}
                    >
                      {copiedUrl === `https://api.zerovex.dev/v1${endpoint.path}` ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{endpoint.description}</p>
                </div>
                
                {/* Body */}
                {(endpoint.requestBody || endpoint.responseExample) && (
                  <div className="p-4">
                    <Tabs defaultValue={endpoint.requestBody ? "request" : "response"}>
                      <TabsList className="mb-4">
                        {endpoint.requestBody && (
                          <TabsTrigger value="request">Request Body</TabsTrigger>
                        )}
                        {endpoint.responseExample && (
                          <TabsTrigger value="response">Response</TabsTrigger>
                        )}
                      </TabsList>
                      {endpoint.requestBody && (
                        <TabsContent value="request">
                          <CodeBlock
                            language="json"
                            code={endpoint.requestBody}
                          />
                        </TabsContent>
                      )}
                      {endpoint.responseExample && (
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={endpoint.responseExample}
                          />
                        </TabsContent>
                      )}
                    </Tabs>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Error Handling */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Error Handling</h2>
          <p className="text-muted-foreground mb-4">
            The API returns standard HTTP status codes. Error responses include details to help debug issues.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <code className="text-sm font-mono text-green-500">200</code>
              <span className="text-sm text-muted-foreground ml-2">Success</span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <code className="text-sm font-mono text-yellow-500">400</code>
              <span className="text-sm text-muted-foreground ml-2">Bad Request</span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <code className="text-sm font-mono text-red-500">401</code>
              <span className="text-sm text-muted-foreground ml-2">Unauthorized</span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <code className="text-sm font-mono text-red-500">404</code>
              <span className="text-sm text-muted-foreground ml-2">Not Found</span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <code className="text-sm font-mono text-orange-500">429</code>
              <span className="text-sm text-muted-foreground ml-2">Rate Limited</span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <code className="text-sm font-mono text-red-500">500</code>
              <span className="text-sm text-muted-foreground ml-2">Server Error</span>
            </div>
          </div>

          <CodeBlock
            language="json"
            title="Error Response Format"
            code={`{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired access token",
    "status": 401,
    "details": {
      "hint": "Check that your API key is valid and not expired"
    }
  }
}`}
          />
        </section>

        {/* SDKs & Libraries */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">SDKs & Libraries</h3>
              <p className="text-sm text-muted-foreground">
                Official client libraries for JavaScript, Python, and more coming soon.
              </p>
            </div>
            <Button variant="outline" asChild>
              <a href="https://github.com/zainabqureshi09" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link to="/architecture">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Architecture
            </Link>
          </Button>
          <Button asChild>
            <Link to="/tutorials">
              Tutorials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
