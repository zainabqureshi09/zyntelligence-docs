import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const languageMap: Record<string, string> = {
  python: 'python',
  javascript: 'javascript',
  js: 'javascript',
  html: 'markup',
  css: 'css',
  java: 'java',
  cpp: 'cpp',
  'c++': 'cpp',
};

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const prismLanguage = languageMap[language.toLowerCase()] || 'javascript';

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-code-border overflow-hidden mb-6 animate-fade-in">
      {title && (
        <div className="bg-muted px-4 py-2 border-b border-code-border flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          <span className="text-xs uppercase tracking-wide text-muted-foreground font-mono">
            {language}
          </span>
        </div>
      )}
      <div className="relative group">
        <pre className="bg-code p-4 overflow-x-auto m-0">
          <code ref={codeRef} className={`language-${prismLanguage} text-sm`}>
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-success" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  );
}
