import { DocLayout } from '@/components/DocLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BookOpen, Code, Rocket, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tutorials = [
  { title: 'Build a REST API with Python', duration: '30 min', level: 'Beginner', href: '/docs/python/examples', category: 'Python' },
  { title: 'Create Interactive Web Forms', duration: '20 min', level: 'Beginner', href: '/docs/html/examples', category: 'HTML' },
  { title: 'Build a Neural Network from Scratch', duration: '45 min', level: 'Intermediate', href: '/paths/ai-ml/deep-learning', category: 'AI/ML' },
  { title: 'JavaScript Array Methods Mastery', duration: '25 min', level: 'Beginner', href: '/docs/javascript/functions', category: 'JavaScript' },
  { title: 'CSS Grid Layout Guide', duration: '35 min', level: 'Intermediate', href: '/docs/css/properties', category: 'CSS' },
  { title: 'Machine Learning with Scikit-learn', duration: '40 min', level: 'Intermediate', href: '/paths/ai-ml/supervised-learning', category: 'AI/ML' },
];

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-600 dark:text-green-400',
  Intermediate: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  Advanced: 'bg-red-500/10 text-red-600 dark:text-red-400',
};

export default function Tutorials() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-primary/10 text-primary">Guides</span>
        </div>
        <h1 className="doc-heading">Tutorials</h1>
        <p className="doc-paragraph">Step-by-step tutorials to help you build real projects and master new skills.</p>

        <div className="grid gap-4 my-8">
          {tutorials.map((tutorial) => (
            <Link key={tutorial.title} to={tutorial.href} className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">{tutorial.category}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${levelColors[tutorial.level]}`}>{tutorial.level}</span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{tutorial.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {tutorial.duration}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-between mt-12">
          <Button variant="outline" asChild><Link to="/api-reference"><ArrowLeft className="mr-2 h-4 w-4" />API Reference</Link></Button>
          <Button asChild><Link to="/faq">FAQ<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </div>
    </DocLayout>
  );
}
