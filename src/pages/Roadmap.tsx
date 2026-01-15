import { DocLayout } from '@/components/DocLayout';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const roadmapItems = [
  { status: 'done', title: 'Core Documentation', desc: 'Python, JavaScript, HTML, CSS, C++, Java' },
  { status: 'done', title: 'AI/ML Learning Path', desc: 'From math foundations to deep learning' },
  { status: 'done', title: 'AI-Powered Search', desc: 'Natural language documentation search' },
  { status: 'progress', title: 'Interactive Code Playground', desc: 'Run code directly in the browser' },
  { status: 'progress', title: 'Cloud & DevOps Path', desc: 'AWS, Docker, Kubernetes tutorials' },
  { status: 'planned', title: 'Video Tutorials', desc: 'Video content for visual learners' },
  { status: 'planned', title: 'Community Forums', desc: 'Discussion and Q&A platform' },
  { status: 'planned', title: 'Certification Program', desc: 'Verified skill certificates' },
];

const statusIcons = { done: CheckCircle2, progress: Clock, planned: Circle };
const statusColors = { done: 'text-green-500', progress: 'text-yellow-500', planned: 'text-muted-foreground' };

export default function Roadmap() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6"><span className="language-badge bg-primary/10 text-primary">Roadmap</span></div>
        <h1 className="doc-heading">Product Roadmap</h1>
        <p className="doc-paragraph">What we've built and what's coming next for Neurovera.</p>
        
        <div className="space-y-4 my-8">
          {roadmapItems.map((item) => {
            const Icon = statusIcons[item.status as keyof typeof statusIcons];
            return (
              <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <Icon className={`h-5 w-5 mt-0.5 ${statusColors[item.status as keyof typeof statusColors]}`} />
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DocLayout>
  );
}
