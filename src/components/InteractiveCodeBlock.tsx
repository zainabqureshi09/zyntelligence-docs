import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import { Copy, Check, Sparkles, Play, Code2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface CodeVariant {
  language: string;
  code: string;
  label: string;
}

interface InteractiveCodeBlockProps {
  variants: CodeVariant[];
  title?: string;
  defaultLanguage?: string;
  showExplainButton?: boolean;
  showRunButton?: boolean;
  mockResponse?: string;
}

const languageMap: Record<string, string> = {
  javascript: 'javascript',
  js: 'javascript',
  python: 'python',
  py: 'python',
  curl: 'bash',
  bash: 'bash',
  shell: 'bash',
};

export function InteractiveCodeBlock({
  variants,
  title,
  defaultLanguage,
  showExplainButton = true,
  showRunButton = false,
  mockResponse,
}: InteractiveCodeBlockProps) {
  const codeRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultLanguage || variants[0]?.language || 'javascript');
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    codeRefs.current.forEach((el) => {
      if (el) Prism.highlightElement(el);
    });
  }, [variants, activeTab]);

  const getCurrentCode = () => {
    const variant = variants.find((v) => v.language === activeTab);
    return variant?.code || '';
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getCurrentCode());
    setCopied(true);
    toast.success('Code copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExplain = async () => {
    setIsExplaining(true);
    setExplanation(null);

    try {
      const { data, error } = await supabase.functions.invoke('explain-code', {
        body: { code: getCurrentCode(), language: activeTab },
      });

      if (error) throw error;
      setExplanation(data.explanation);
    } catch (error) {
      console.error('Error explaining code:', error);
      toast.error('Failed to generate explanation. Please try again.');
    } finally {
      setIsExplaining(false);
    }
  };

  const handleRun = () => {
    setShowResponse(!showResponse);
  };

  const getPrismLanguage = (lang: string) => {
    return languageMap[lang.toLowerCase()] || 'javascript';
  };

  return (
    <div className="rounded-lg border border-code-border overflow-hidden mb-6 animate-fade-in bg-card">
      {title && (
        <div className="bg-muted px-4 py-2 border-b border-code-border flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            {title}
          </span>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between px-2 py-1 bg-muted/50 border-b border-code-border">
          <TabsList className="h-8 bg-transparent">
            {variants.map((variant) => (
              <TabsTrigger
                key={variant.language}
                value={variant.language}
                className="text-xs px-3 py-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                {variant.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex items-center gap-1">
            {showExplainButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleExplain}
                disabled={isExplaining}
                className="h-7 px-2 text-xs hover:bg-primary/10 hover:text-primary"
              >
                {isExplaining ? (
                  <Loader2 className="w-3 h-3 animate-spin mr-1" />
                ) : (
                  <Sparkles className="w-3 h-3 mr-1" />
                )}
                Explain
              </Button>
            )}

            {showRunButton && mockResponse && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRun}
                className="h-7 px-2 text-xs hover:bg-success/10 hover:text-success"
              >
                <Play className="w-3 h-3 mr-1" />
                {showResponse ? 'Hide' : 'Run'}
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 px-2"
            >
              {copied ? (
                <Check className="w-3 h-3 text-success" />
              ) : (
                <Copy className="w-3 h-3 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>

        {variants.map((variant) => (
          <TabsContent key={variant.language} value={variant.language} className="m-0">
            <pre className="bg-code p-4 overflow-x-auto m-0">
              <code
                ref={(el) => {
                  if (el) codeRefs.current.set(variant.language, el);
                }}
                className={`language-${getPrismLanguage(variant.language)} text-sm`}
              >
                {variant.code}
              </code>
            </pre>
          </TabsContent>
        ))}
      </Tabs>

      {/* AI Explanation Panel */}
      {explanation && (
        <div className="border-t border-code-border bg-primary/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI Explanation</span>
          </div>
          <div className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
            {explanation}
          </div>
        </div>
      )}

      {/* Mock Response Panel */}
      {showResponse && mockResponse && (
        <div className="border-t border-code-border bg-success/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Response Preview</span>
          </div>
          <pre className="text-sm text-muted-foreground font-mono bg-code rounded p-3 overflow-x-auto">
            {mockResponse}
          </pre>
        </div>
      )}
    </div>
  );
}
