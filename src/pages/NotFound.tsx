import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead 
        title="Page Not Found | Zerovex Docs"
        description="The page you're looking for doesn't exist. Return to Zerovex Docs homepage."
        noIndex
      />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-lg px-6">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
            <span className="text-6xl font-bold text-emerald-500">404</span>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Page Not Found
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/docs/python/introduction">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Docs
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Looking for something specific?{" "}
              <Link to="/" className="text-primary hover:underline">
                Try searching our documentation
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
