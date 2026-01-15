import { DocLayout } from '@/components/DocLayout';
import { Shield, Lock, Key, Eye, AlertTriangle, CheckCircle2 } from 'lucide-react';

const practices = [
  { icon: Lock, title: 'Row-Level Security', desc: 'Database policies ensure users only access their own data.' },
  { icon: Key, title: 'Token-Based Auth', desc: 'JWT tokens with short expiration for secure sessions.' },
  { icon: Eye, title: 'Input Validation', desc: 'All inputs validated on both client and server side.' },
  { icon: Shield, title: 'HTTPS Everywhere', desc: 'All traffic encrypted with TLS 1.3.' },
];

export default function Security() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6"><span className="language-badge bg-primary/10 text-primary">Security</span></div>
        <h1 className="doc-heading">Security & Best Practices</h1>
        <p className="doc-paragraph">How Neurovera protects your data and security best practices for your applications.</p>
        
        <div className="grid md:grid-cols-2 gap-4 my-8">
          {practices.map((p) => (
            <div key={p.title} className="p-5 rounded-xl bg-card border border-border">
              <p.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="doc-subheading">Reporting Vulnerabilities</h2>
        <p className="doc-paragraph">If you discover a security vulnerability, please email security@neurovera.dev. We take all reports seriously.</p>
      </div>
    </DocLayout>
  );
}
