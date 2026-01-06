import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HTMLIntroduction() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-orange-500/10 text-orange-500">
            HTML
          </span>
        </div>

        <h1 className="doc-heading">Introduction to HTML</h1>

        <p className="doc-paragraph">
          HTML (HyperText Markup Language) is the standard markup language for creating web pages.
          It describes the structure of a web page and tells browsers how to display content.
        </p>

        <h2 className="doc-subheading">What is HTML?</h2>

        <ul className="doc-list">
          <li>HTML stands for HyperText Markup Language</li>
          <li>HTML is the standard markup language for creating Web pages</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
        </ul>

        <h2 className="doc-subheading">Your First HTML Page</h2>

        <CodeBlock
          language="html"
          title="index.html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
</body>
</html>`}
        />

        <h2 className="doc-subheading">HTML Document Structure</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">&lt;!DOCTYPE html&gt;</h3>
            <p className="text-sm text-muted-foreground">
              Declares the document type and HTML version
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">&lt;html&gt;</h3>
            <p className="text-sm text-muted-foreground">
              The root element of an HTML page
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">&lt;head&gt;</h3>
            <p className="text-sm text-muted-foreground">
              Contains meta information about the document
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">&lt;body&gt;</h3>
            <p className="text-sm text-muted-foreground">
              Contains the visible page content
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">HTML Elements</h2>

        <p className="doc-paragraph">
          An HTML element is defined by a start tag, some content, and an end tag:
        </p>

        <CodeBlock
          language="html"
          title="Element structure"
          code={`<tagname>Content goes here...</tagname>

<!-- Examples -->
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">This is a link</a>`}
        />

        <h2 className="doc-subheading">Common HTML Elements</h2>

        <CodeBlock
          language="html"
          title="Common elements"
          code={`<!-- Headings -->
<h1>Heading 1 (largest)</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 (smallest)</h6>

<!-- Paragraphs and text -->
<p>This is a paragraph.</p>
<strong>Bold text</strong>
<em>Italic text</em>
<br> <!-- Line break -->

<!-- Links and images -->
<a href="url">Link text</a>
<img src="image.jpg" alt="Description">

<!-- Lists -->
<ul>
    <li>Unordered item</li>
</ul>
<ol>
    <li>Ordered item</li>
</ol>

<!-- Containers -->
<div>Block container</div>
<span>Inline container</span>`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Ready to continue?</h3>
          <p className="text-muted-foreground mb-4">
            Learn about HTML elements in more detail.
          </p>
          <Button asChild>
            <Link to="/docs/html/elements">
              Next: HTML Elements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
