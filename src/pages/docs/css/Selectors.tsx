import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CSSSelectors() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-500/10 text-blue-500">
            CSS
          </span>
        </div>

        <h1 className="doc-heading">CSS Selectors</h1>

        <p className="doc-paragraph">
          CSS selectors are patterns used to select the HTML elements you want to style.
          Understanding selectors is key to writing efficient CSS.
        </p>

        <h2 className="doc-subheading">Basic Selectors</h2>

        <CodeBlock
          language="css"
          title="Element, class, and ID selectors"
          code={`/* Element selector - selects all <p> elements */
p {
    color: gray;
}

/* Class selector - selects elements with class="intro" */
.intro {
    font-size: 18px;
    font-weight: bold;
}

/* ID selector - selects element with id="header" */
#header {
    background-color: navy;
    color: white;
}

/* Universal selector - selects all elements */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`}
        />

        <h2 className="doc-subheading">Grouping Selectors</h2>

        <CodeBlock
          language="css"
          title="Grouping selectors"
          code={`/* Instead of repeating */
h1 {
    color: navy;
    font-family: Georgia;
}
h2 {
    color: navy;
    font-family: Georgia;
}

/* Group them together */
h1, h2, h3 {
    color: navy;
    font-family: Georgia;
}`}
        />

        <h2 className="doc-subheading">Combinator Selectors</h2>

        <CodeBlock
          language="css"
          title="Combinator selectors"
          code={`/* Descendant selector (space) - all <p> inside <div> */
div p {
    margin-bottom: 10px;
}

/* Child selector (>) - direct children only */
ul > li {
    list-style-type: square;
}

/* Adjacent sibling (+) - immediately after */
h1 + p {
    font-size: 20px;  /* First p after h1 */
}

/* General sibling (~) - all following siblings */
h1 ~ p {
    color: gray;  /* All p elements after h1 */
}`}
        />

        <h2 className="doc-subheading">Attribute Selectors</h2>

        <CodeBlock
          language="css"
          title="Attribute selectors"
          code={`/* Has attribute */
[disabled] {
    opacity: 0.5;
}

/* Exact value */
[type="submit"] {
    background-color: blue;
}

/* Contains word */
[class~="warning"] {
    color: orange;
}

/* Starts with */
[href^="https"] {
    color: green;
}

/* Ends with */
[href$=".pdf"] {
    background: url('pdf-icon.png') no-repeat;
}

/* Contains substring */
[class*="btn"] {
    cursor: pointer;
}`}
        />

        <h2 className="doc-subheading">Pseudo-classes</h2>

        <CodeBlock
          language="css"
          title="Pseudo-class selectors"
          code={`/* Interactive states */
a:hover {
    color: red;
}

a:active {
    color: darkred;
}

a:visited {
    color: purple;
}

input:focus {
    border-color: blue;
    outline: none;
}

button:disabled {
    background-color: gray;
}

/* Structural pseudo-classes */
li:first-child {
    font-weight: bold;
}

li:last-child {
    border-bottom: none;
}

li:nth-child(odd) {
    background-color: #f9f9f9;
}

li:nth-child(3n) {
    color: blue;  /* Every 3rd item */
}

p:not(.special) {
    color: gray;  /* All p except .special */
}`}
        />

        <h2 className="doc-subheading">Pseudo-elements</h2>

        <CodeBlock
          language="css"
          title="Pseudo-elements"
          code={`/* First line/letter */
p::first-line {
    font-weight: bold;
}

p::first-letter {
    font-size: 2em;
    float: left;
}

/* Before and after content */
.quote::before {
    content: '"';
    font-size: 24px;
}

.quote::after {
    content: '"';
    font-size: 24px;
}

/* Styling selections */
::selection {
    background-color: yellow;
    color: black;
}

/* Placeholder text */
input::placeholder {
    color: #999;
    font-style: italic;
}`}
        />

        <h2 className="doc-subheading">Specificity</h2>

        <p className="doc-paragraph">
          When multiple rules target the same element, specificity determines which applies:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Selector Type</th>
                <th className="text-left py-3 px-4 font-semibold">Specificity</th>
                <th className="text-left py-3 px-4 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Inline styles', '1000', 'style="..."'],
                ['ID', '100', '#header'],
                ['Class, attribute, pseudo-class', '10', '.nav, [type], :hover'],
                ['Element, pseudo-element', '1', 'div, ::before'],
              ].map(([type, spec, example]) => (
                <tr key={type} className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{type}</td>
                  <td className="py-3 px-4 font-mono text-primary">{spec}</td>
                  <td className="py-3 px-4 font-mono">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/css/introduction">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/css/properties">
              Next: Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
