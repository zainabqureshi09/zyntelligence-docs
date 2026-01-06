import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HTMLExamples() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-orange-500/10 text-orange-500">
            HTML
          </span>
        </div>

        <h1 className="doc-heading">HTML Examples</h1>

        <p className="doc-paragraph">
          Here are practical HTML examples you can use as templates for your own projects.
        </p>

        <h2 className="doc-subheading">Example 1: Complete Web Page</h2>

        <CodeBlock
          language="html"
          title="complete-page.html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A sample web page">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <a href="/" class="logo">MySite</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>Welcome to My Website</h1>
            <p>Building amazing things with HTML</p>
            <a href="#learn-more" class="button">Learn More</a>
        </section>

        <section id="learn-more" class="features">
            <h2>Our Features</h2>
            <div class="feature-grid">
                <article>
                    <h3>Fast</h3>
                    <p>Lightning quick load times.</p>
                </article>
                <article>
                    <h3>Secure</h3>
                    <p>Your data is protected.</p>
                </article>
                <article>
                    <h3>Reliable</h3>
                    <p>99.9% uptime guaranteed.</p>
                </article>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`}
        />

        <h2 className="doc-subheading">Example 2: Contact Form</h2>

        <CodeBlock
          language="html"
          title="contact-form.html"
          code={`<form action="/submit" method="POST" class="contact-form">
    <h2>Contact Us</h2>
    
    <div class="form-group">
        <label for="name">Full Name *</label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="John Doe"
            required
        >
    </div>

    <div class="form-group">
        <label for="email">Email Address *</label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="john@example.com"
            required
        >
    </div>

    <div class="form-group">
        <label for="phone">Phone Number</label>
        <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="+1 (555) 000-0000"
            pattern="[+]?[0-9\\s\\-\\(\\)]+"
        >
    </div>

    <div class="form-group">
        <label for="subject">Subject *</label>
        <select id="subject" name="subject" required>
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="billing">Billing Question</option>
            <option value="feedback">Feedback</option>
        </select>
    </div>

    <div class="form-group">
        <label for="message">Message *</label>
        <textarea 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="How can we help you?"
            required
        ></textarea>
    </div>

    <div class="form-group">
        <label>
            <input type="checkbox" name="newsletter">
            Subscribe to our newsletter
        </label>
    </div>

    <button type="submit">Send Message</button>
</form>`}
        />

        <h2 className="doc-subheading">Example 3: Product Card</h2>

        <CodeBlock
          language="html"
          title="product-card.html"
          code={`<article class="product-card">
    <figure class="product-image">
        <img 
            src="product.jpg" 
            alt="Wireless Headphones" 
            loading="lazy"
        >
        <span class="badge">Sale</span>
    </figure>
    
    <div class="product-info">
        <h3 class="product-title">
            <a href="/products/headphones">Wireless Headphones</a>
        </h3>
        
        <div class="product-rating">
            <span class="stars">★★★★☆</span>
            <span class="count">(128 reviews)</span>
        </div>
        
        <p class="product-description">
            Premium noise-canceling headphones with 30-hour battery life.
        </p>
        
        <div class="product-pricing">
            <span class="price-current">$199.99</span>
            <span class="price-original">$249.99</span>
            <span class="discount">20% off</span>
        </div>
        
        <div class="product-actions">
            <button type="button" class="btn-primary">
                Add to Cart
            </button>
            <button type="button" class="btn-secondary">
                ♡ Wishlist
            </button>
        </div>
    </div>
</article>`}
        />

        <h2 className="doc-subheading">Example 4: Blog Post</h2>

        <CodeBlock
          language="html"
          title="blog-post.html"
          code={`<article class="blog-post">
    <header class="post-header">
        <div class="post-meta">
            <time datetime="2024-01-15">January 15, 2024</time>
            <span class="category">Technology</span>
        </div>
        <h1>Getting Started with Web Development</h1>
        <p class="post-excerpt">
            Learn the fundamentals of HTML, CSS, and JavaScript.
        </p>
        <div class="author">
            <img src="avatar.jpg" alt="Author photo" class="avatar">
            <div class="author-info">
                <span class="author-name">Jane Smith</span>
                <span class="read-time">5 min read</span>
            </div>
        </div>
    </header>

    <figure class="post-image">
        <img src="featured.jpg" alt="Web development workspace">
        <figcaption>A modern development setup</figcaption>
    </figure>

    <div class="post-content">
        <p>Web development is an exciting field that combines 
           creativity with technical skills...</p>
        
        <h2>What You Will Learn</h2>
        <ul>
            <li>HTML structure and semantics</li>
            <li>CSS styling and layouts</li>
            <li>JavaScript interactivity</li>
        </ul>
        
        <blockquote>
            <p>"The best way to learn is by doing."</p>
            <cite>— Every Developer Ever</cite>
        </blockquote>
    </div>

    <footer class="post-footer">
        <div class="tags">
            <a href="/tag/html">#html</a>
            <a href="/tag/css">#css</a>
            <a href="/tag/javascript">#javascript</a>
        </div>
        <div class="share">
            <span>Share:</span>
            <a href="#" aria-label="Share on Twitter">Twitter</a>
            <a href="#" aria-label="Share on Facebook">Facebook</a>
        </div>
    </footer>
</article>`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Practice Tips</h3>
          <p className="text-muted-foreground">
            Copy these examples and modify them to build your own pages. 
            Experiment with different elements and attributes!
          </p>
        </div>

        <div className="flex justify-start mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/html/attributes">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Attributes
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
