import { Github, Linkedin, Twitter, Mail, ExternalLink, Heart, Shield, Zap, Users } from 'lucide-react';
import { DocLayout } from '@/components/DocLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Zap,
    title: 'Accessible Learning',
    description: 'Free, high-quality documentation for everyone, regardless of background or location.',
  },
  {
    icon: Shield,
    title: 'Industry Standards',
    description: 'Content aligned with real-world best practices and production-ready patterns.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by developers, for developers. Contributions and feedback are always welcome.',
  },
  {
    icon: Heart,
    title: 'Open Source',
    description: 'Transparent, collaborative, and continuously improving through community effort.',
  },
];

const About = () => {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <h1 className="doc-heading">About Neurovera</h1>
        
        {/* Mission */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-l-4 border-primary rounded-r-xl p-6">
            <p className="text-lg text-foreground font-medium mb-2">Our Mission</p>
            <p className="text-foreground/80 italic text-xl leading-relaxed">
              "To democratize technology education by providing clear, practical, and production-ready documentation for developers at every stage of their journey."
            </p>
          </div>
        </div>

        {/* What is Neurovera */}
        <div className="mb-12">
          <h2 className="doc-subheading">What is Neurovera?</h2>
          <p className="doc-paragraph">
            <span className="font-semibold text-foreground">Neurovera Docs</span> is a comprehensive developer documentation platform designed to bridge the gap between learning and real-world application. We cover programming languages, AI/ML, cloud computing, DevOps, and modern software development practices.
          </p>
          <p className="doc-paragraph">
            Unlike fragmented tutorials scattered across the web, Neurovera provides structured, interconnected learning paths that take you from fundamentals to production-ready skills. Our content is written by industry practitioners and continuously updated to reflect current best practices.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="doc-subheading">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Cover */}
        <div className="mb-12">
          <h2 className="doc-subheading">What We Cover</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-muted/50">
              <h4 className="font-semibold text-foreground mb-2">Programming Languages</h4>
              <p className="text-sm text-muted-foreground">Python, JavaScript, HTML, CSS, C++, Java with practical examples</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <h4 className="font-semibold text-foreground mb-2">AI & Machine Learning</h4>
              <p className="text-sm text-muted-foreground">From math foundations to deep learning and production deployment</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <h4 className="font-semibold text-foreground mb-2">Cloud & DevOps</h4>
              <p className="text-sm text-muted-foreground">Infrastructure, containers, CI/CD, and scalable architectures</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <h4 className="font-semibold text-foreground mb-2">Web Development</h4>
              <p className="text-sm text-muted-foreground">Frontend, backend, APIs, and full-stack application development</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <h4 className="font-semibold text-foreground mb-2">Cybersecurity</h4>
              <p className="text-sm text-muted-foreground">Security best practices, ethical hacking, and threat prevention</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50">
              <h4 className="font-semibold text-foreground mb-2">Emerging Technologies</h4>
              <p className="text-sm text-muted-foreground">Blockchain, IoT, quantum computing, and future tech</p>
            </div>
          </div>
        </div>

        {/* Contributing */}
        <div className="mb-12">
          <h2 className="doc-subheading">Contributing</h2>
          <p className="doc-paragraph">
            Neurovera is an open-source project and we welcome contributions from the community. Whether you want to fix a typo, improve an explanation, or add entirely new content, your help is appreciated.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button asChild variant="outline">
              <a href="https://github.com/neurovera" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/roadmap">
                View Roadmap
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Connect */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/neurovera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://twitter.com/neuroveradocs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span className="text-sm font-medium">Twitter</span>
            </a>
            <a
              href="mailto:hello@neurovera.dev"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
    </DocLayout>
  );
};

export default About;
