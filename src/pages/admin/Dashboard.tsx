import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  Users,
  FolderOpen,
  BarChart3,
  Plus,
  Loader2,
  Shield,
  Zap,
  ArrowLeft,
} from 'lucide-react';

interface Stats {
  totalDocs: number;
  publishedDocs: number;
  draftDocs: number;
  totalCategories: number;
  totalUsers: number;
}

interface RecentDoc {
  id: string;
  title: string;
  status: string;
  updated_at: string;
}

export default function AdminDashboard() {
  const { user, isAdmin, isEditor, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentDocs, setRecentDocs] = useState<RecentDoc[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    } else if (!authLoading && !isEditor) {
      navigate('/');
    }
  }, [user, isEditor, authLoading, navigate]);

  useEffect(() => {
    if (isEditor) {
      fetchDashboardData();
    }
  }, [isEditor]);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      // Fetch docs stats
      const { data: docs } = await supabase.from('docs').select('id, status');
      const { data: categories } = await supabase.from('doc_categories').select('id');
      const { data: profiles } = await supabase.from('profiles').select('id');

      // Fetch recent docs
      const { data: recent } = await supabase
        .from('docs')
        .select('id, title, status, updated_at')
        .order('updated_at', { ascending: false })
        .limit(5);

      setStats({
        totalDocs: docs?.length || 0,
        publishedDocs: docs?.filter((d) => d.status === 'published').length || 0,
        draftDocs: docs?.filter((d) => d.status === 'draft').length || 0,
        totalCategories: categories?.length || 0,
        totalUsers: profiles?.length || 0,
      });

      setRecentDocs(recent || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isEditor) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Docs
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Admin Dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={isAdmin ? 'default' : 'secondary'}>
              <Shield className="w-3 h-3 mr-1" />
              {isAdmin ? 'Admin' : 'Editor'}
            </Badge>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your documentation content and view analytics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Docs</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalDocs || 0}</div>
              <p className="text-xs text-muted-foreground">
                {stats?.publishedDocs || 0} published, {stats?.draftDocs || 0} drafts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalCategories || 0}</div>
              <p className="text-xs text-muted-foreground">Documentation categories</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalUsers || 0}</div>
              <p className="text-xs text-muted-foreground">Registered users</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Analytics</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
              <p className="text-xs text-muted-foreground">Coming soon</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="docs" className="space-y-4">
          <TabsList>
            <TabsTrigger value="docs">Documents</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            {isAdmin && <TabsTrigger value="users">Users</TabsTrigger>}
          </TabsList>

          <TabsContent value="docs" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Documents</h2>
              <Link to="/admin/docs/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Document
                </Button>
              </Link>
            </div>

            {recentDocs.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <FileText className="w-12 h-12 text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No documents yet</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Create your first document to get started.
                  </p>
                  <Link to="/admin/docs/new">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Document
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-2">
                {recentDocs.map((doc) => (
                  <Card key={doc.id}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{doc.title}</p>
                          <p className="text-sm text-muted-foreground">
                            Updated {new Date(doc.updated_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={doc.status === 'published' ? 'default' : 'secondary'}
                        >
                          {doc.status}
                        </Badge>
                        <Link to={`/admin/docs/${doc.id}`}>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Categories</h2>
              <Link to="/admin/categories/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Category
                </Button>
              </Link>
            </div>
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <FolderOpen className="w-12 h-12 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-medium mb-2">No categories yet</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Create categories to organize your documentation.
                </p>
                <Link to="/admin/categories/new">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Category
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {isAdmin && (
            <TabsContent value="users" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">User Management</h2>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>User Roles</CardTitle>
                  <CardDescription>
                    Manage user access levels and permissions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    User management features coming soon.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
}
