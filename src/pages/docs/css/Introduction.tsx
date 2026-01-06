import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CSSIntroduction() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-500/10 text-blue-500">
            CSS
          </span>
        </div>

        <h1 className="doc-heading">Introduction to CSS</h1>

        <p className="doc-paragraph">
          CSS (Cascading Style Sheets) is the language used to style HTML documents. 
          It describes how HTML elements should be displayed on screen, paper, or other media.
        </p>

        <h2 className="doc-subheading">What is CSS?</h2>

        <ul className="doc-list">
          <li>CSS stands for Cascading Style Sheets</li>
          <li>CSS describes how HTML elements are displayed</li>
          <li>CSS saves a lot of work by controlling layout of multiple pages</li>
          <li>External stylesheets are stored in CSS files</li>
        </ul>

        <h2 className="doc-subheading">CSS Syntax</h2>

        <CodeBlock
          language="css"
          title="CSS rule structure"
          code={`/* Selector { property: value; } */

h1 {
    color: blue;
    font-size: 24px;
}

p {
    color: gray;
    line-height: 1.6;
    margin-bottom: 16px;
}

/* Multiple declarations */
.card {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`}
        />

        <h2 className="doc-subheading">Ways to Add CSS</h2>

        <p className="doc-paragraph">
          There are three ways to insert CSS into HTML:
        </p>

        <CodeBlock
          language="html"
          title="1. External CSS (recommended)"
          code={`<!-- In your HTML <head> -->
<link rel="stylesheet" href="styles.css">

<!-- styles.css file -->
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}`}
        />

        <CodeBlock
          language="html"
          title="2. Internal CSS"
          code={`<head>
    <style>
        body {
            background-color: #f0f0f0;
        }
        h1 {
            color: navy;
        }
    </style>
</head>`}
        />

        <CodeBlock
          language="html"
          title="3. Inline CSS"
          code={`<!-- Inline styles (use sparingly) -->
<p style="color: red; font-size: 18px;">
    This paragraph has inline styles.
</p>`}
        />

        <h2 className="doc-subheading">CSS Colors</h2>

        <CodeBlock
          language="css"
          title="Color formats"
          code={`/* Named colors */
color: red;
color: blue;
color: rebeccapurple;

/* Hexadecimal */
color: #ff0000;       /* Red */
color: #00ff00;       /* Green */
color: #0000ff;       /* Blue */
color: #333;          /* Shorthand for #333333 */

/* RGB */
color: rgb(255, 0, 0);        /* Red */
color: rgba(255, 0, 0, 0.5);  /* Red with 50% opacity */

/* HSL */
color: hsl(0, 100%, 50%);       /* Red */
color: hsla(0, 100%, 50%, 0.5); /* Red with 50% opacity */`}
        />

        <h2 className="doc-subheading">Common CSS Properties</h2>

        <CodeBlock
          language="css"
          title="Frequently used properties"
          code={`/* Text */
color: #333;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: underline;
line-height: 1.5;

/* Box Model */
width: 300px;
height: 200px;
padding: 20px;
margin: 10px auto;
border: 1px solid #ccc;

/* Background */
background-color: #f5f5f5;
background-image: url('image.jpg');
background-size: cover;

/* Display & Position */
display: flex;
position: relative;
top: 10px;
left: 20px;`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Ready to continue?</h3>
          <p className="text-muted-foreground mb-4">
            Learn about CSS selectors to target specific elements.
          </p>
          <Button asChild>
            <Link to="/docs/css/selectors">
              Next: CSS Selectors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
