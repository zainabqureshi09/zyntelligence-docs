import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Key, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const endpoints = [
  {
    method: 'GET',
    path: '/docs',
    description: 'List all published documentation pages',
    auth: false,
  },
  {
    method: 'GET',
    path: '/docs/:slug',
    description: 'Get a specific documentation page by slug',
    auth: false,
  },
  {
    method: 'POST',
    path: '/docs',
    description: 'Create a new documentation page',
    auth: true,
  },
  {
    method: 'PUT',
    path: '/docs/:id',
    description: 'Update an existing documentation page',
    auth: true,
  },
  {
    method: 'DELETE',
    path: '/docs/:id',
    description: 'Delete a documentation page',
    auth: true,
  },
  {
    method: 'GET',
    path: '/categories',
    description: 'List all documentation categories',
    auth: false,
  },
  {
    method: 'POST',
    path: '/search',
    description: 'Search documentation with AI-powered results',
    auth: false,
  },
  {
    method: 'POST',
    path: '/explain-code',
    description: 'Get AI explanation for code snippets',
    auth: true,
  },
];

const methodColors: Record<string, string> = {
  GET: 'bg-green-500/10 text-green-600 dark:text-green-400',
  POST: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  PUT: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  DELETE: 'bg-red-500/10 text-red-600 dark:text-red-400',
};

export default function ApiReference() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-primary/10 text-primary">
            API
          </span>
        </div>

        <h1 className="doc-heading">API Reference</h1>

        <p className="doc-paragraph">
          Neurovera provides a RESTful API for programmatic access to documentation, search, and AI features. This reference covers all available endpoints, authentication, and usage examples.
        </p>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="p-4 rounded-xl bg-card border border-border">
            <Globe className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-semibold text-foreground text-sm">Base URL</h4>
            <code className="text-xs text-muted-foreground">https://api.neurovera.dev/v1</code>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <Key className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-semibold text-foreground text-sm">Authentication</h4>
            <code className="text-xs text-muted-foreground">Bearer token in header</code>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <Zap className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-semibold text-foreground text-sm">Rate Limit</h4>
            <code className="text-xs text-muted-foreground">1000 req/hour</code>
          </div>
        </div>

        <h2 className="doc-subheading">Authentication</h2>

        <p className="doc-paragraph">
          Protected endpoints require a Bearer token in the Authorization header. Obtain a token by authenticating through the standard login flow.
        </p>

        <CodeBlock
          language="bash"
          title="Authentication Header"
          code={`curl -X GET "https://api.neurovera.dev/v1/docs" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`}
        />

        <h2 className="doc-subheading">Endpoints</h2>

        <div className="space-y-3 mb-8">
          {endpoints.map((endpoint) => (
            <div key={`${endpoint.method}-${endpoint.path}`} className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-0.5 rounded text-xs font-mono font-semibold ${methodColors[endpoint.method]}`}>
                  {endpoint.method}
                </span>
                <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                {endpoint.auth && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3" />
                    Auth required
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{endpoint.description}</p>
            </div>
          ))}
        </div>

        <h2 className="doc-subheading">Example: List Documentation</h2>

        <CodeBlock
          language="javascript"
          title="Fetch all docs"
          code={`// Using fetch
const response = await fetch('https://api.neurovera.dev/v1/docs');
const docs = await response.json();

console.log(docs);
// [
//   { id: '1', title: 'Python Introduction', slug: 'python-introduction', ... },
//   { id: '2', title: 'JavaScript Basics', slug: 'javascript-basics', ... },
//   ...
// ]`}
        />

        <h2 className="doc-subheading">Example: AI Code Explanation</h2>

        <CodeBlock
          language="javascript"
          title="Explain code with AI"
          code={`const response = await fetch('https://api.neurovera.dev/v1/explain-code', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    code: 'const sum = arr.reduce((a, b) => a + b, 0);',
    language: 'javascript'
  })
});

const { explanation } = await response.json();
console.log(explanation);
// "This code calculates the sum of all numbers in an array using reduce()..."`}
        />

        <h2 className="doc-subheading">Error Handling</h2>

        <p className="doc-paragraph">
          The API returns standard HTTP status codes. Error responses include a JSON body with details:
        </p>

        <CodeBlock
          language="json"
          title="Error Response"
          code={`{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired access token",
    "status": 401
  }
}`}
        />

        <div className="flex justify-between mt-12">
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
