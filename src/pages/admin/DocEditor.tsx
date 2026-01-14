import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import {
  ArrowLeft,
  Save,
  Sparkles,
  Loader2,
  Eye,
  FileText,
  Zap,
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
}

type DocStatus = 'draft' | 'published' | 'archived';

export default function DocEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isEditor, isLoading: authLoading } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [status, setStatus] = useState<DocStatus>('draft');

  const isNew = id === 'new';

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    } else if (!authLoading && !isEditor) {
      navigate('/');
    }
  }, [user, isEditor, authLoading, navigate]);

  useEffect(() => {
    fetchCategories();
    if (!isNew && id) {
      fetchDoc(id);
    }
  }, [id, isNew]);

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('doc_categories')
      .select('id, name, slug')
      .order('name');
    setCategories(data || []);
  };

  const fetchDoc = async (docId: string) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('docs')
      .select('*')
      .eq('id', docId)
      .maybeSingle();

    if (error || !data) {
      toast.error('Document not found');
      navigate('/admin');
      return;
    }

    setTitle(data.title);
    setSlug(data.slug);
    setContent(data.content);
    setSummary(data.summary || '');
    setCategoryId(data.category_id || '');
    setStatus(data.status as DocStatus);
    setIsLoading(false);
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (isNew) {
      setSlug(generateSlug(value));
    }
  };

  const handleSave = async () => {
    if (!title.trim()) {
      toast.error('Title is required');
      return;
    }

    setIsSaving(true);
    try {
      const docData = {
        title,
        slug: slug || generateSlug(title),
        content,
        summary,
        category_id: categoryId || null,
        status,
        author_id: user?.id,
        published_at: status === 'published' ? new Date().toISOString() : null,
      };

      if (isNew) {
        const { error } = await supabase.from('docs').insert(docData);
        if (error) throw error;
        toast.success('Document created successfully');
      } else {
        const { error } = await supabase
          .from('docs')
          .update(docData)
          .eq('id', id);
        if (error) throw error;
        toast.success('Document updated successfully');
      }

      navigate('/admin');
    } catch (error) {
      console.error('Error saving document:', error);
      toast.error('Failed to save document');
    } finally {
      setIsSaving(false);
    }
  };

  const handleImprove = async () => {
    if (!content.trim()) {
      toast.error('Add some content first');
      return;
    }

    setIsImproving(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-search', {
        body: {
          query: `Improve this documentation content and make it clearer, more comprehensive, and better structured. Return only the improved content without any explanation:\n\n${content}`,
        },
      });

      if (error) throw error;
      
      if (data?.summary) {
        setContent(data.summary);
        toast.success('Content improved with AI');
      }
    } catch (error) {
      console.error('Error improving content:', error);
      toast.error('Failed to improve content');
    } finally {
      setIsImproving(false);
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">
                {isNew ? 'New Document' : 'Edit Document'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Save
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Document title"
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="document-slug"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="content">Content (Markdown)</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleImprove}
                  disabled={isImproving}
                >
                  {isImproving ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <Sparkles className="w-4 h-4 mr-2" />
                  )}
                  Improve with AI
                </Button>
              </div>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your documentation content here using Markdown..."
                className="min-h-[400px] font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Summary</Label>
              <Textarea
                id="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="A brief summary of this document..."
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Document Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={status} onValueChange={(v) => setStatus(v as DocStatus)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={categoryId} onValueChange={setCategoryId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  AI Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={handleImprove}
                  disabled={isImproving}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Improve Content
                </Button>
                <p className="text-xs text-muted-foreground">
                  Use AI to improve clarity, structure, and completeness of your
                  documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
