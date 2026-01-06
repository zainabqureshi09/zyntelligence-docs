import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaScriptIntroduction() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">Introduction to JavaScript</h1>

        <p className="doc-paragraph">
          JavaScript is the programming language of the web. It's used to make web pages
          interactive, create web applications, server-side applications, games, and much more.
        </p>

        <h2 className="doc-subheading">Why Learn JavaScript?</h2>

        <ul className="doc-list">
          <li>The only programming language that runs natively in web browsers</li>
          <li>Powers both frontend and backend development (Node.js)</li>
          <li>Huge ecosystem with frameworks like React, Vue, and Angular</li>
          <li>Essential for web development careers</li>
          <li>Can be used for mobile apps, desktop apps, and more</li>
        </ul>

        <h2 className="doc-subheading">Your First JavaScript Program</h2>

        <p className="doc-paragraph">
          Here's the classic "Hello, World!" in JavaScript:
        </p>

        <CodeBlock
          language="javascript"
          title="hello.js"
          code={`// Display a message in the console
console.log("Hello, World!");

// You can also use variables
const message = "Welcome to JavaScript!";
console.log(message);

// Display in a browser alert (if in browser)
// alert("Hello from JavaScript!");`}
        />

        <h2 className="doc-subheading">Where JavaScript Runs</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">In the Browser</h3>
            <p className="text-sm text-muted-foreground">
              JavaScript runs directly in web browsers, manipulating HTML and CSS to create
              interactive web pages.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">On the Server</h3>
            <p className="text-sm text-muted-foreground">
              With Node.js, JavaScript runs on servers, handling databases, APIs, and
              backend logic.
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">JavaScript in HTML</h2>

        <p className="doc-paragraph">
          JavaScript is typically included in HTML pages using the <code className="inline-code">&lt;script&gt;</code> tag:
        </p>

        <CodeBlock
          language="html"
          title="index.html"
          code={`<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1 id="greeting">Hello</h1>
    <button onclick="changeText()">Click Me</button>

    <script>
        function changeText() {
            document.getElementById("greeting").textContent = "Hello, JavaScript!";
        }
    </script>
</body>
</html>`}
        />

        <h2 className="doc-subheading">External JavaScript Files</h2>

        <p className="doc-paragraph">
          For larger projects, JavaScript is often kept in separate files:
        </p>

        <CodeBlock
          language="html"
          title="Using external JS"
          code={`<!-- In your HTML file -->
<script src="script.js"></script>

<!-- Or at the end of body (recommended) -->
<body>
    <!-- Your content -->
    <script src="script.js"></script>
</body>`}
        />

        <CodeBlock
          language="javascript"
          title="script.js"
          code={`// Your JavaScript code here
console.log("External JavaScript file loaded!");

function greetUser(name) {
    return \`Hello, \${name}!\`;
}

console.log(greetUser("Developer"));`}
        />

        <h2 className="doc-subheading">JavaScript Versions</h2>

        <p className="doc-paragraph">
          JavaScript evolves through ECMAScript (ES) standards. Key versions include:
        </p>

        <ul className="doc-list">
          <li><strong>ES5 (2009):</strong> Added JSON, strict mode, array methods</li>
          <li><strong>ES6/ES2015:</strong> let/const, arrow functions, classes, promises</li>
          <li><strong>ES2016+:</strong> async/await, spread operator, and more features yearly</li>
        </ul>

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Ready to continue?</h3>
          <p className="text-muted-foreground mb-4">
            Let's dive into JavaScript syntax and learn how to write clean, effective code.
          </p>
          <Button asChild>
            <Link to="/docs/javascript/syntax">
              Next: JavaScript Syntax
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
