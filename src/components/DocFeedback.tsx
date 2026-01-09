import { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { toast } from 'sonner';

interface DocFeedbackProps {
  pageTitle?: string;
  githubUrl?: string;
}

export function DocFeedback({ pageTitle = 'this page', githubUrl = 'https://github.com/zainabqureshi09' }: DocFeedbackProps) {
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    if (type === 'not-helpful') {
      setShowComment(true);
    } else {
      toast.success('Thanks for your feedback!', {
        description: 'We appreciate you helping us improve.',
      });
    }
  };

  const handleSubmitComment = () => {
    toast.success('Feedback submitted!', {
      description: 'Thank you for helping us improve our documentation.',
    });
    setComment('');
    setShowComment(false);
  };

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <div className="rounded-xl bg-muted/30 p-6 space-y-4">
        {/* Feedback Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="font-semibold text-foreground mb-1">Was this page helpful?</h4>
            <p className="text-sm text-muted-foreground">Let us know how we can improve</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={feedback === 'helpful' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFeedback('helpful')}
              className="gap-2"
            >
              <ThumbsUp className="h-4 w-4" />
              Yes
            </Button>
            <Button
              variant={feedback === 'not-helpful' ? 'destructive' : 'outline'}
              size="sm"
              onClick={() => handleFeedback('not-helpful')}
              className="gap-2"
            >
              <ThumbsDown className="h-4 w-4" />
              No
            </Button>
          </div>
        </div>

        {/* Comment Section */}
        <Collapsible open={showComment} onOpenChange={setShowComment}>
          <CollapsibleContent className="space-y-3">
            <Textarea
              placeholder="What could we improve? (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              className="resize-none"
            />
            <div className="flex justify-end gap-2">
              <Button variant="ghost" size="sm" onClick={() => setShowComment(false)}>
                Cancel
              </Button>
              <Button size="sm" onClick={handleSubmitComment}>
                Submit Feedback
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Contribution Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            Edit on GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://github.com/zainabqureshi09/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            Report an issue
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
