import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, Search, Github } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SearchDialog } from '@/components/SearchDialog';

interface NavbarProps {
  onSearchOpen?: () => void;
}

export function Navbar({ onSearchOpen }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    if (onSearchOpen) {
      onSearchOpen();
    } else {
      setSearchOpen(true);
    }
  };

  return (
    <>
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
              <Link to="/getting-started" className="nav-link">
                Getting Started
              </Link>
              <Link to="/docs/python/introduction" className="nav-link">
                Documentation
              </Link>
              <Link to="/resources" className="nav-link">
                Resources
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              onClick={handleSearchClick}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <a 
              href="https://github.com/zainabqureshi09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            
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
              <button
                onClick={() => {
                  handleSearchClick();
                  setMobileMenuOpen(false);
                }}
                className="sidebar-link flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
              <Link
                to="/getting-started"
                className="sidebar-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Getting Started
              </Link>
              <Link
                to="/docs/python/introduction"
                className="sidebar-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                to="/resources"
                className="sidebar-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
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
      
      {!onSearchOpen && <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />}
    </>
  );
}
