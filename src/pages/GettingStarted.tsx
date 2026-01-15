import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { DocFeedback } from '@/components/DocFeedback';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, BookOpen, Rocket, Target, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: 1,
    title: 'Choose Your Path',
    description: 'Select between learning programming fundamentals or jumping into a career path.',
    items: [
      'New to coding? Start with Python or JavaScript',
      'Have basics? Explore AI/ML, Cloud, or Cybersecurity paths',
      'Want web development? Begin with HTML, CSS, then JavaScript',
    ],
  },
  {
    number: 2,
    title: 'Follow the Structure',
    description: 'Each tutorial is organized in a logical learning sequence.',
    items: [
      'Introduction → Core concepts overview',
      'Syntax → Language rules and structure',
      'Variables → Data types and storage',
      'Conditions → Decision making',
      'Loops → Repetition and iteration',
      'Functions → Reusable code blocks',
      'Examples → Real-world applications',
    ],
  },
  {
    number: 3,
    title: 'Practice with Examples',
    description: 'Every topic includes code examples you can run and modify.',
    items: [
      'Copy code examples to your local environment',
      'Modify variables and see what changes',
      'Build mini-projects based on examples',
      'Check the Examples section for complete projects',
    ],
  },
  {
    number: 4,
    title: 'Build Projects',
    description: 'Apply your skills with hands-on projects at the end of each path.',
    items: [
      'Start with beginner projects',
      'Progress to intermediate challenges',
      'Tackle advanced real-world applications',
      'Add projects to your portfolio',
    ],
  },
];

const quickLinks = [
  { title: 'Python Basics', href: '/docs/python/introduction', icon: '🐍', color: 'from-yellow-400 to-yellow-600' },
  { title: 'JavaScript Basics', href: '/docs/javascript/introduction', icon: 'JS', color: 'from-yellow-300 to-yellow-500' },
  { title: 'AI & ML Path', href: '/paths/ai-ml/introduction', icon: '🤖', color: 'from-purple-500 to-pink-500' },
  { title: 'Web Development', href: '/docs/html/introduction', icon: '🌐', color: 'from-orange-400 to-red-500' },
];

export default function GettingStarted() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        {/* Hero Section */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Quick Start Guide
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Getting Started with Neurovera
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Welcome! This guide will help you navigate the platform and start your learning journey in under 5 minutes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-muted/50 text-center">
            <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">6</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 text-center">
            <Target className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">8</div>
            <div className="text-sm text-muted-foreground">Career Paths</div>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 text-center">
            <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">100+</div>
            <div className="text-sm text-muted-foreground">Lessons</div>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 text-center">
            <Users className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">Free</div>
            <div className="text-sm text-muted-foreground">Forever</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="doc-subheading">Popular Starting Points</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white text-xl mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-12">
          <h2 className="doc-subheading">How to Use This Platform</h2>
          
          {steps.map((step) => (
            <div key={step.number} className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-3">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* First Example */}
        <div className="mb-12">
          <h2 className="doc-subheading">Your First Code</h2>
          <p className="doc-paragraph">
            Here's a simple Python example to get you started. This program greets the user:
          </p>
          
          <CodeBlock
            language="python"
            title="hello.py"
            code={`# Your first Python program
name = input("What is your name? ")
print(f"Hello, {name}! Welcome to Neurovera!")

# Calculate something simple
age = int(input("How old are you? "))
print(f"In 10 years, you'll be {age + 10}!")`}
          />
          
          <p className="doc-paragraph">
            To run this code, you'll need Python installed on your computer. Check our{' '}
            <Link to="/docs/python/introduction" className="text-primary hover:underline">
              Python Introduction
            </Link>{' '}
            for installation instructions.
          </p>
        </div>

        {/* Tips */}
        <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 mb-12">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            💡 Pro Tips for Learning
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-foreground">1.</span>
              <span><strong>Use keyboard shortcuts:</strong> Press <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border text-xs">⌘K</kbd> to quickly search any topic</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-foreground">2.</span>
              <span><strong>Code along:</strong> Don't just read — type out every example yourself</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-foreground">3.</span>
              <span><strong>Break things:</strong> Modify examples to see what happens when things go wrong</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-foreground">4.</span>
              <span><strong>Take notes:</strong> Write down concepts in your own words</span>
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Ready to dive in?</h3>
          <p className="text-muted-foreground mb-4">
            Choose a path that matches your goals and start learning today.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/docs/python/introduction">
                Start with Python
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/paths/ai-ml/introduction">
                Explore AI/ML Path
              </Link>
            </Button>
          </div>
        </div>

        <DocFeedback pageTitle="Getting Started" />
      </div>
    </DocLayout>
  );
}
