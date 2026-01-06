import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HTMLElements() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-orange-500/10 text-orange-500">
            HTML
          </span>
        </div>

        <h1 className="doc-heading">HTML Elements</h1>

        <p className="doc-paragraph">
          HTML elements are the building blocks of HTML pages. They are represented by tags
          and define the structure and content of a web page.
        </p>

        <h2 className="doc-subheading">Text Elements</h2>

        <CodeBlock
          language="html"
          title="Text elements"
          code={`<!-- Headings -->
<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>

<!-- Paragraphs -->
<p>This is a paragraph of text. Paragraphs are block-level 
   elements that create a new line before and after.</p>

<!-- Text formatting -->
<strong>Bold/Strong text</strong>
<b>Bold text (no semantic meaning)</b>
<em>Emphasized/Italic text</em>
<i>Italic text (no semantic meaning)</i>
<mark>Highlighted text</mark>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
<code>Inline code</code>

<!-- Preformatted text -->
<pre>
  This text preserves
    whitespace and
      line breaks
</pre>`}
        />

        <h2 className="doc-subheading">Links</h2>

        <CodeBlock
          language="html"
          title="Anchor elements"
          code={`<!-- Basic link -->
<a href="https://example.com">Visit Example</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank">Open in New Tab</a>

<!-- Link to section on same page -->
<a href="#section-id">Jump to Section</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Download link -->
<a href="file.pdf" download>Download PDF</a>`}
        />

        <h2 className="doc-subheading">Images</h2>

        <CodeBlock
          language="html"
          title="Image elements"
          code={`<!-- Basic image -->
<img src="photo.jpg" alt="Description of image">

<!-- Image with dimensions -->
<img src="photo.jpg" alt="Description" width="300" height="200">

<!-- Responsive image -->
<img src="photo.jpg" alt="Description" style="max-width: 100%; height: auto;">

<!-- Figure with caption -->
<figure>
    <img src="photo.jpg" alt="A beautiful sunset">
    <figcaption>A beautiful sunset over the ocean</figcaption>
</figure>

<!-- Picture element for responsive images -->
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Responsive image">
</picture>`}
        />

        <h2 className="doc-subheading">Lists</h2>

        <CodeBlock
          language="html"
          title="List elements"
          code={`<!-- Unordered list (bullets) -->
<ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<!-- Nested list -->
<ul>
    <li>Fruits
        <ul>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetables</li>
</ul>

<!-- Description list -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`}
        />

        <h2 className="doc-subheading">Tables</h2>

        <CodeBlock
          language="html"
          title="Table elements"
          code={`<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>30</td>
            <td>Los Angeles</td>
        </tr>
    </tbody>
</table>`}
        />

        <h2 className="doc-subheading">Semantic Elements</h2>

        <CodeBlock
          language="html"
          title="Semantic layout"
          code={`<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>

    <main>
        <article>
            <h1>Article Title</h1>
            <p>Article content...</p>
            
            <section>
                <h2>Section Heading</h2>
                <p>Section content...</p>
            </section>
        </article>

        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/html/introduction">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/html/attributes">
              Next: Attributes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
