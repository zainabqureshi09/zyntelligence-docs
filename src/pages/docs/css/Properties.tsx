import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CSSProperties() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-500/10 text-blue-500">
            CSS
          </span>
        </div>

        <h1 className="doc-heading">CSS Properties</h1>

        <p className="doc-paragraph">
          CSS properties define how elements are styled. Here are the most commonly used
          properties organized by category.
        </p>

        <h2 className="doc-subheading">Box Model</h2>

        <CodeBlock
          language="css"
          title="Box model properties"
          code={`/* Content dimensions */
width: 300px;
height: 200px;
min-width: 100px;
max-width: 100%;
min-height: 50px;
max-height: 500px;

/* Padding (inside the border) */
padding: 20px;                    /* All sides */
padding: 10px 20px;              /* Vertical | Horizontal */
padding: 10px 20px 15px 25px;    /* Top | Right | Bottom | Left */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;

/* Margin (outside the border) */
margin: 20px;
margin: 0 auto;                   /* Center horizontally */
margin-top: 10px;

/* Border */
border: 1px solid #ccc;
border-width: 2px;
border-style: solid;              /* solid, dashed, dotted, double */
border-color: #333;
border-radius: 8px;               /* Rounded corners */
border-radius: 50%;               /* Circle */

/* Box sizing */
box-sizing: border-box;           /* Include padding/border in width */`}
        />

        <h2 className="doc-subheading">Typography</h2>

        <CodeBlock
          language="css"
          title="Text and font properties"
          code={`/* Font family */
font-family: Arial, Helvetica, sans-serif;
font-family: 'Open Sans', sans-serif;

/* Font size */
font-size: 16px;
font-size: 1rem;
font-size: 1.5em;

/* Font weight */
font-weight: normal;              /* 400 */
font-weight: bold;                /* 700 */
font-weight: 600;

/* Font style */
font-style: italic;
font-style: normal;

/* Line height */
line-height: 1.5;
line-height: 24px;

/* Text alignment */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Text decoration */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;

/* Text transform */
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

/* Letter and word spacing */
letter-spacing: 1px;
word-spacing: 4px;

/* White space */
white-space: nowrap;
white-space: pre-wrap;`}
        />

        <h2 className="doc-subheading">Flexbox</h2>

        <CodeBlock
          language="css"
          title="Flexbox properties"
          code={`/* Container properties */
.flex-container {
    display: flex;
    
    /* Direction */
    flex-direction: row;          /* row | row-reverse | column | column-reverse */
    
    /* Wrapping */
    flex-wrap: wrap;              /* nowrap | wrap | wrap-reverse */
    
    /* Main axis alignment */
    justify-content: center;      /* flex-start | flex-end | center | 
                                     space-between | space-around | space-evenly */
    
    /* Cross axis alignment */
    align-items: center;          /* flex-start | flex-end | center | 
                                     stretch | baseline */
    
    /* Multiple line alignment */
    align-content: flex-start;
    
    /* Gap between items */
    gap: 20px;
    row-gap: 10px;
    column-gap: 20px;
}

/* Item properties */
.flex-item {
    flex-grow: 1;                 /* Grow factor */
    flex-shrink: 0;               /* Shrink factor */
    flex-basis: 200px;            /* Initial size */
    flex: 1 0 auto;               /* Shorthand: grow shrink basis */
    
    align-self: flex-end;         /* Override container align-items */
    order: 2;                     /* Display order */
}`}
        />

        <h2 className="doc-subheading">CSS Grid</h2>

        <CodeBlock
          language="css"
          title="Grid properties"
          code={`/* Container properties */
.grid-container {
    display: grid;
    
    /* Define columns */
    grid-template-columns: 200px 1fr 200px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    /* Define rows */
    grid-template-rows: 100px auto 100px;
    
    /* Gap */
    gap: 20px;
    
    /* Alignment */
    justify-items: center;
    align-items: center;
    place-items: center;          /* Shorthand */
}

/* Item properties */
.grid-item {
    grid-column: 1 / 3;           /* Span columns 1-2 */
    grid-column: span 2;          /* Span 2 columns */
    grid-row: 1 / 2;
    
    /* Named areas */
    grid-area: header;
}

/* Named template areas */
.layout {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}`}
        />

        <h2 className="doc-subheading">Positioning</h2>

        <CodeBlock
          language="css"
          title="Position properties"
          code={`/* Position types */
position: static;                 /* Default - normal flow */
position: relative;               /* Relative to normal position */
position: absolute;               /* Relative to positioned ancestor */
position: fixed;                  /* Relative to viewport */
position: sticky;                 /* Switches between relative and fixed */

/* Offset properties */
top: 10px;
right: 20px;
bottom: 10px;
left: 20px;

/* Z-index (stacking order) */
z-index: 100;

/* Example: Centered modal */
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}

/* Example: Sticky header */
.header {
    position: sticky;
    top: 0;
    z-index: 100;
}`}
        />

        <h2 className="doc-subheading">Transitions & Animations</h2>

        <CodeBlock
          language="css"
          title="Animations"
          code={`/* Transitions */
.button {
    background-color: blue;
    transition: background-color 0.3s ease;
    transition: all 0.3s ease-in-out;
    transition: transform 0.2s, opacity 0.3s;
}

.button:hover {
    background-color: darkblue;
    transform: scale(1.05);
}

/* Keyframe animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.animated-element {
    animation: fadeIn 0.5s ease-out;
    animation: pulse 2s infinite;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/css/selectors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Selectors
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/css/examples">
              Next: Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
