import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CSSExamples() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-500/10 text-blue-500">
            CSS
          </span>
        </div>

        <h1 className="doc-heading">CSS Examples</h1>

        <p className="doc-paragraph">
          Practical CSS examples you can use and adapt for your own projects.
        </p>

        <h2 className="doc-subheading">Example 1: Modern Button Styles</h2>

        <CodeBlock
          language="css"
          title="buttons.css"
          code={`.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary {
    background-color: #3b82f6;
    color: white;
}

.btn-primary:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-outline {
    background-color: transparent;
    border: 2px solid #3b82f6;
    color: #3b82f6;
}

.btn-outline:hover {
    background-color: #3b82f6;
    color: white;
}

.btn-ghost {
    background-color: transparent;
    color: #64748b;
}

.btn-ghost:hover {
    background-color: #f1f5f9;
}`}
        />

        <h2 className="doc-subheading">Example 2: Card Component</h2>

        <CodeBlock
          language="css"
          title="card.css"
          code={`.card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 24px;
}

.card-title {
    font-size: 20px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 8px;
}

.card-description {
    color: #64748b;
    line-height: 1.6;
}

.card-footer {
    padding: 16px 24px;
    border-top: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}`}
        />

        <h2 className="doc-subheading">Example 3: Responsive Navigation</h2>

        <CodeBlock
          language="css"
          title="navigation.css"
          code={`.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-brand {
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
    color: #3b82f6;
}

/* Mobile menu */
.nav-toggle {
    display: none;
}

@media (max-width: 768px) {
    .nav-toggle {
        display: block;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }

    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: white;
        padding: 16px;
        gap: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: none;
    }

    .nav-links.active {
        display: flex;
    }
}`}
        />

        <h2 className="doc-subheading">Example 4: Form Styling</h2>

        <CodeBlock
          language="css"
          title="forms.css"
          code={`.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
}

.form-input {
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder {
    color: #9ca3af;
}

.form-input:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
}

.form-input.error {
    border-color: #ef4444;
}

.form-error {
    color: #ef4444;
    font-size: 14px;
    margin-top: 4px;
}

/* Checkbox and radio */
.form-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.form-checkbox input {
    width: 18px;
    height: 18px;
    accent-color: #3b82f6;
}`}
        />

        <h2 className="doc-subheading">Example 5: Grid Layout</h2>

        <CodeBlock
          language="css"
          title="layout.css"
          code={`/* Responsive grid */
.grid {
    display: grid;
    gap: 24px;
}

.grid-2 {
    grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
    grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
    grid-template-columns: repeat(4, 1fr);
}

/* Auto-fit responsive grid */
.grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Page layout */
.page-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

@media (max-width: 768px) {
    .page-layout {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    
    .sidebar {
        display: none;
    }
    
    .grid-2,
    .grid-3,
    .grid-4 {
        grid-template-columns: 1fr;
    }
}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">CSS Best Practices</h3>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Use CSS custom properties (variables) for consistent theming</li>
            <li>Mobile-first approach with min-width media queries</li>
            <li>Use flexbox and grid for layouts instead of floats</li>
            <li>Keep specificity low - prefer classes over IDs</li>
          </ul>
        </div>

        <div className="flex justify-start mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/css/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Properties
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
