import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { DocLayout } from '@/components/DocLayout';

const About = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/zainabqureshi09', username: '@zainabqureshi09' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/zainab0x7', username: '@zainab0x7' },
    { icon: Twitter, label: 'Twitter/X', url: 'https://x.com/zainab_0x7', username: '@zainab_0x7' },
    { icon: Mail, label: 'Email', url: 'mailto:zainab.cyber.dev@gmail.com', username: 'zainab.cyber.dev@gmail.com' },
  ];

  return (
    <DocLayout>
      <div className="max-w-3xl">
        <h1 className="doc-heading">About Me</h1>
        
        <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
          <p className="text-lg text-foreground leading-relaxed">
            Hi, I'm <span className="font-semibold text-primary">Zainab Ayaz</span>, a technology enthusiast focused on learning and sharing modern IT skills.
          </p>
          <p className="text-muted-foreground mt-3">
            This documentation is built to help beginners and developers grow with future-ready technologies.
          </p>
        </div>

        <h2 className="doc-subheading">Mission</h2>
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 mb-8">
          <p className="text-foreground italic">
            "To make complex IT concepts simple, practical, and accessible for everyone."
          </p>
        </div>

        <h2 className="doc-subheading">Connect With Me</h2>
        <div className="grid gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-colors group"
            >
              <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{link.label}</p>
                <p className="text-sm text-muted-foreground">{link.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </DocLayout>
  );
};

export default About;
