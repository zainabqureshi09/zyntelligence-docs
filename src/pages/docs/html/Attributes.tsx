import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HTMLAttributes() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-orange-500/10 text-orange-500">
            HTML
          </span>
        </div>

        <h1 className="doc-heading">HTML Attributes</h1>

        <p className="doc-paragraph">
          HTML attributes provide additional information about elements. They are always
          specified in the start tag and usually come in name/value pairs.
        </p>

        <h2 className="doc-subheading">Attribute Syntax</h2>

        <CodeBlock
          language="html"
          title="Basic syntax"
          code={`<!-- Syntax: attributename="value" -->
<element attribute="value">Content</element>

<!-- Examples -->
<a href="https://example.com">Link</a>
<img src="image.jpg" alt="Description">
<div class="container" id="main">Content</div>`}
        />

        <h2 className="doc-subheading">Global Attributes</h2>

        <p className="doc-paragraph">
          Global attributes can be used on any HTML element:
        </p>

        <CodeBlock
          language="html"
          title="Global attributes"
          code={`<!-- id - unique identifier -->
<div id="unique-element">Only one element can have this ID</div>

<!-- class - for styling and JavaScript -->
<p class="highlight important">Multiple classes separated by spaces</p>

<!-- style - inline CSS -->
<p style="color: blue; font-size: 18px;">Styled text</p>

<!-- title - tooltip on hover -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- hidden - hides element -->
<p hidden>This paragraph is hidden</p>

<!-- data-* - custom data attributes -->
<div data-user-id="123" data-role="admin">
    Custom data storage
</div>

<!-- tabindex - keyboard navigation order -->
<button tabindex="1">First</button>
<button tabindex="2">Second</button>

<!-- contenteditable - make content editable -->
<p contenteditable="true">Click to edit this text</p>`}
        />

        <h2 className="doc-subheading">Link Attributes</h2>

        <CodeBlock
          language="html"
          title="Anchor attributes"
          code={`<!-- href - destination URL -->
<a href="https://example.com">Visit</a>

<!-- target - where to open -->
<a href="url" target="_blank">New tab</a>
<a href="url" target="_self">Same tab (default)</a>
<a href="url" target="_parent">Parent frame</a>
<a href="url" target="_top">Full window</a>

<!-- rel - relationship -->
<a href="url" rel="noopener noreferrer">Secure external link</a>
<a href="url" rel="nofollow">Don't follow this link</a>

<!-- download - download instead of navigate -->
<a href="file.pdf" download="custom-name.pdf">Download</a>`}
        />

        <h2 className="doc-subheading">Image Attributes</h2>

        <CodeBlock
          language="html"
          title="Image attributes"
          code={`<!-- src - image source (required) -->
<img src="photo.jpg">

<!-- alt - alternative text (required for accessibility) -->
<img src="photo.jpg" alt="A sunset over mountains">

<!-- width and height -->
<img src="photo.jpg" alt="Photo" width="300" height="200">

<!-- loading - lazy loading -->
<img src="photo.jpg" alt="Photo" loading="lazy">

<!-- srcset and sizes - responsive images -->
<img 
    src="small.jpg"
    srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
    sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
    alt="Responsive image"
>`}
        />

        <h2 className="doc-subheading">Form Attributes</h2>

        <CodeBlock
          language="html"
          title="Form and input attributes"
          code={`<!-- Form attributes -->
<form action="/submit" method="POST" enctype="multipart/form-data">
    
    <!-- Input attributes -->
    <input type="text" name="username" placeholder="Enter username">
    <input type="email" name="email" required>
    <input type="password" name="password" minlength="8" maxlength="20">
    <input type="number" name="age" min="0" max="120">
    <input type="text" name="readonly" value="Cannot edit" readonly>
    <input type="text" name="disabled" value="Disabled" disabled>
    <input type="text" name="focused" autofocus>
    <input type="text" name="pattern" pattern="[A-Za-z]{3}">
    
    <!-- Textarea -->
    <textarea name="message" rows="4" cols="50" 
              placeholder="Enter message"></textarea>
    
    <!-- Select -->
    <select name="country" multiple>
        <option value="us" selected>United States</option>
        <option value="uk">United Kingdom</option>
    </select>
    
    <!-- Button -->
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button">Regular Button</button>
</form>`}
        />

        <h2 className="doc-subheading">Boolean Attributes</h2>

        <p className="doc-paragraph">
          Some attributes don't need a value - their presence alone is enough:
        </p>

        <CodeBlock
          language="html"
          title="Boolean attributes"
          code={`<!-- These are equivalent -->
<input type="checkbox" checked>
<input type="checkbox" checked="checked">
<input type="checkbox" checked="">

<!-- Common boolean attributes -->
<input disabled>
<input readonly>
<input required>
<input autofocus>
<option selected>
<audio autoplay loop muted>
<video controls>
<details open>
<script defer>
<script async>`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/html/elements">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Elements
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/html/examples">
              Next: Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
