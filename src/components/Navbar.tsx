import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, Search, Github } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Z</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              Zyntelligence
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/docs/python/introduction" className="nav-link">
              Documentation
            </Link>
            <Link to="/docs/python/examples" className="nav-link">
              Examples
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 animate-fade-in">
          <nav className="flex flex-col gap-2">
            <Link
              to="/docs/python/introduction"
              className="sidebar-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              to="/docs/python/examples"
              className="sidebar-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Examples
            </Link>
            <Link
              to="/about"
              className="sidebar-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
