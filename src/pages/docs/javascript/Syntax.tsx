import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaScriptSyntax() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">JavaScript Syntax</h1>

        <p className="doc-paragraph">
          JavaScript syntax is the set of rules that define how JavaScript programs are constructed.
          Understanding syntax is essential for writing correct and readable code.
        </p>

        <h2 className="doc-subheading">Statements</h2>

        <p className="doc-paragraph">
          JavaScript programs are made up of statements. Each statement is an instruction to be executed:
        </p>

        <CodeBlock
          language="javascript"
          title="Statements"
          code={`// Each line is a statement
let x = 5;
let y = 6;
let z = x + y;

console.log(z); // Output: 11

// Statements can be on one line (separated by semicolons)
let a = 1; let b = 2; let c = a + b;`}
        />

        <h2 className="doc-subheading">Semicolons</h2>

        <p className="doc-paragraph">
          Semicolons separate JavaScript statements. They're optional in most cases due to
          Automatic Semicolon Insertion (ASI), but using them is recommended:
        </p>

        <CodeBlock
          language="javascript"
          title="Semicolons"
          code={`// With semicolons (recommended)
let name = "John";
let age = 25;

// Without semicolons (works but not recommended)
let city = "NYC"
let country = "USA"

// Multiple statements on one line require semicolons
let a = 1; let b = 2; let c = 3;`}
        />

        <h2 className="doc-subheading">Comments</h2>

        <CodeBlock
          language="javascript"
          title="Comments"
          code={`// This is a single-line comment

/* This is a
   multi-line comment */

/**
 * This is a documentation comment (JSDoc)
 * Used to document functions, classes, etc.
 * @param {string} name - The user's name
 * @returns {string} A greeting message
 */
function greet(name) {
    return \`Hello, \${name}!\`;
}`}
        />

        <h2 className="doc-subheading">Code Blocks</h2>

        <p className="doc-paragraph">
          JavaScript uses curly braces <code className="inline-code">{"{}"}</code> to group statements into code blocks:
        </p>

        <CodeBlock
          language="javascript"
          title="Code blocks"
          code={`// Function block
function sayHello() {
    console.log("Hello!");
    console.log("This is inside the function block");
}

// Conditional block
if (true) {
    console.log("This is inside the if block");
}

// Loop block
for (let i = 0; i < 3; i++) {
    console.log(i);
}`}
        />

        <h2 className="doc-subheading">Case Sensitivity</h2>

        <p className="doc-paragraph">
          JavaScript is case-sensitive. <code className="inline-code">myVariable</code> and
          <code className="inline-code">myvariable</code> are different:
        </p>

        <CodeBlock
          language="javascript"
          title="Case sensitivity"
          code={`let myVariable = "Hello";
let myvariable = "World";
let MyVariable = "Different";

console.log(myVariable);  // Hello
console.log(myvariable);  // World
console.log(MyVariable);  // Different

// Keywords are lowercase
let value = true;   // Correct
// let Value = TRUE;  // Error: TRUE is not defined`}
        />

        <h2 className="doc-subheading">Whitespace</h2>

        <p className="doc-paragraph">
          JavaScript ignores extra whitespace. Use it to make code more readable:
        </p>

        <CodeBlock
          language="javascript"
          title="Whitespace"
          code={`// Compact (hard to read)
let x=5+10;

// With spaces (easier to read)
let x = 5 + 10;

// Line breaks for readability
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// Breaking long lines
const result = longFunctionName(
    argumentOne,
    argumentTwo,
    argumentThree
);`}
        />

        <h2 className="doc-subheading">Reserved Keywords</h2>

        <p className="doc-paragraph">
          These words cannot be used as variable names:
        </p>

        <div className="p-4 rounded-lg bg-muted font-mono text-sm mb-6 overflow-x-auto">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
            {['break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
              'default', 'delete', 'do', 'else', 'export', 'extends', 'finally',
              'for', 'function', 'if', 'import', 'in', 'instanceof', 'let',
              'new', 'return', 'static', 'super', 'switch', 'this', 'throw',
              'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'].map((keyword) => (
              <span key={keyword} className="text-primary">{keyword}</span>
            ))}
          </div>
        </div>

        <h2 className="doc-subheading">Naming Conventions</h2>

        <CodeBlock
          language="javascript"
          title="Naming conventions"
          code={`// Variables and functions: camelCase
let firstName = "John";
let calculateTotal = () => {};

// Constants: UPPER_SNAKE_CASE
const MAX_SIZE = 100;
const API_URL = "https://api.example.com";

// Classes: PascalCase
class UserProfile {}
class ShoppingCart {}

// Private properties (convention): underscore prefix
let _privateVariable = "secret";`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/javascript/introduction">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/javascript/variables">
              Next: Variables
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
