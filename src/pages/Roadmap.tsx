import { DocLayout } from '@/components/DocLayout';
import { CheckCircle2, Circle, Clock, Rocket, Star, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SEOHead } from '@/components/SEOHead';

interface RoadmapItem {
  status: 'done' | 'progress' | 'planned';
  title: string;
  description: string;
  quarter?: string;
  progress?: number;
  features?: string[];
}

const roadmapItems: RoadmapItem[] = [
  { 
    status: 'done', 
    title: 'Core Documentation', 
    description: 'Comprehensive tutorials for major programming languages',
    quarter: 'Q1 2024',
    features: ['Python tutorials', 'JavaScript guides', 'HTML/CSS basics', 'C++ & Java docs']
  },
  { 
    status: 'done', 
    title: 'AI/ML Learning Path', 
    description: 'Complete machine learning curriculum from basics to advanced',
    quarter: 'Q2 2024',
    features: ['Math foundations', 'Supervised learning', 'Deep learning', 'Hands-on projects']
  },
  { 
    status: 'done', 
    title: 'AI-Powered Search', 
    description: 'Natural language search with intelligent results',
    quarter: 'Q2 2024',
    features: ['Semantic search', 'AI summaries', 'Intent detection', 'Quick answers']
  },
  { 
    status: 'done', 
    title: 'Interactive Code Examples', 
    description: 'Code blocks with multi-language support and AI explanations',
    quarter: 'Q3 2024',
    features: ['Syntax highlighting', 'Copy to clipboard', 'AI explanations', 'Language switching']
  },
  { 
    status: 'progress', 
    title: 'Interactive Code Playground', 
    description: 'Run code directly in the browser with real-time output',
    quarter: 'Q4 2024',
    progress: 65,
    features: ['Python runtime', 'JavaScript sandbox', 'Real-time output', 'Save snippets']
  },
  { 
    status: 'progress', 
    title: 'Cloud & DevOps Path', 
    description: 'Learn cloud infrastructure and modern DevOps practices',
    quarter: 'Q4 2024',
    progress: 40,
    features: ['AWS fundamentals', 'Docker containers', 'Kubernetes basics', 'CI/CD pipelines']
  },
  { 
    status: 'progress', 
    title: 'User Progress Tracking', 
    description: 'Track learning progress and achievements',
    quarter: 'Q4 2024',
    progress: 25,
    features: ['Progress dashboard', 'Completion tracking', 'Achievements', 'Learning streaks']
  },
  { 
    status: 'planned', 
    title: 'Video Tutorials', 
    description: 'Video content for visual learners with code walkthroughs',
    quarter: 'Q1 2025',
    features: ['Screencasts', 'Code walkthroughs', 'Project builds', 'Interview prep']
  },
  { 
    status: 'planned', 
    title: 'Community Forums', 
    description: 'Discussion platform for Q&A and collaboration',
    quarter: 'Q1 2025',
    features: ['Q&A threads', 'Code sharing', 'Upvoting', 'Expert badges']
  },
  { 
    status: 'planned', 
    title: 'Certification Program', 
    description: 'Verified skill certificates upon course completion',
    quarter: 'Q2 2025',
    features: ['Skill assessments', 'Verified certificates', 'LinkedIn badges', 'Portfolio']
  },
  { 
    status: 'planned', 
    title: 'Mobile App', 
    description: 'Native mobile experience with offline support',
    quarter: 'Q2 2025',
    features: ['iOS & Android', 'Offline mode', 'Code practice', 'Push notifications']
  },
  { 
    status: 'planned', 
    title: 'Team & Enterprise Features', 
    description: 'Collaborative learning for teams and organizations',
    quarter: 'Q3 2025',
    features: ['Team dashboards', 'Admin controls', 'Custom content', 'SSO integration']
  },
];

const statusConfig = {
  done: { 
    icon: CheckCircle2, 
    color: 'text-green-500', 
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    label: 'Completed'
  },
  progress: { 
    icon: Clock, 
    color: 'text-yellow-500', 
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    label: 'In Progress'
  },
  planned: { 
    icon: Circle, 
    color: 'text-muted-foreground', 
    bgColor: 'bg-muted',
    borderColor: 'border-border',
    label: 'Planned'
  }
};

const stats = {
  done: roadmapItems.filter(i => i.status === 'done').length,
  progress: roadmapItems.filter(i => i.status === 'progress').length,
  planned: roadmapItems.filter(i => i.status === 'planned').length,
};

export default function Roadmap() {
  return (
    <DocLayout>
      <SEOHead 
        title="Roadmap - Zerovex Docs"
        description="See what we've built and what's coming next for Zerovex Docs. Track our progress on new features and upcoming improvements."
      />
      <div className="doc-container animate-fade-in">
        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Roadmap
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Product Roadmap
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            See what we've built and what's coming next for Zerovex Docs. 
            We're constantly improving based on your feedback.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{stats.done}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-center">
            <Clock className="h-5 w-5 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{stats.progress}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </div>
          <div className="p-4 rounded-xl bg-muted border border-border text-center">
            <Calendar className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{stats.planned}</div>
            <div className="text-sm text-muted-foreground">Planned</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-6">
            {roadmapItems.map((item, index) => {
              const config = statusConfig[item.status];
              const Icon = config.icon;
              
              return (
                <div 
                  key={item.title} 
                  className={`relative flex gap-4 md:gap-6 p-5 rounded-xl border transition-all hover:shadow-md ${config.borderColor} ${config.bgColor}`}
                >
                  {/* Status Icon */}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${config.bgColor} border-2 ${config.borderColor}`}>
                    <Icon className={`h-5 w-5 ${config.color}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <Badge 
                            variant={item.status === 'done' ? 'default' : 'secondary'}
                            className={item.status === 'progress' ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' : ''}
                          >
                            {config.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      {item.quarter && (
                        <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.quarter}
                        </span>
                      )}
                    </div>
                    
                    {/* Progress bar for in-progress items */}
                    {item.status === 'progress' && item.progress !== undefined && (
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    )}
                    
                    {/* Features */}
                    {item.features && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.features.map((feature) => (
                          <span 
                            key={feature}
                            className="text-xs px-2 py-1 rounded-full bg-background border border-border text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Request */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Have a Feature Request?</h3>
                <p className="text-sm text-muted-foreground">
                  We'd love to hear your ideas! Share your suggestions on GitHub.
                </p>
              </div>
            </div>
            <Button asChild>
              <a href="https://github.com/zainabqureshi09" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Request Feature
              </a>
            </Button>
          </div>
        </div>

        {/* Changelog Link */}
        <div className="mt-6 text-center">
          <Button variant="ghost" asChild>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              View Full Changelog
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
