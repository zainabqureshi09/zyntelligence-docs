import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface DocSection {
  title: string;
  items: { title: string; href: string }[];
}

interface LanguageNav {
  name: string;
  icon: string;
  color: string;
  sections: DocSection[];
}

const languageNavigation: LanguageNav[] = [
  {
    name: 'Python',
    icon: '🐍',
    color: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', href: '/docs/python/introduction' },
          { title: 'Syntax', href: '/docs/python/syntax' },
          { title: 'Variables', href: '/docs/python/variables' },
        ],
      },
      {
        title: 'Control Flow',
        items: [
          { title: 'Conditions', href: '/docs/python/conditions' },
          { title: 'Loops', href: '/docs/python/loops' },
        ],
      },
      {
        title: 'Functions',
        items: [
          { title: 'Functions', href: '/docs/python/functions' },
          { title: 'Examples', href: '/docs/python/examples' },
        ],
      },
    ],
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    color: 'bg-yellow-400/10 text-yellow-500',
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', href: '/docs/javascript/introduction' },
          { title: 'Syntax', href: '/docs/javascript/syntax' },
          { title: 'Variables', href: '/docs/javascript/variables' },
        ],
      },
      {
        title: 'Control Flow',
        items: [
          { title: 'Conditions', href: '/docs/javascript/conditions' },
          { title: 'Loops', href: '/docs/javascript/loops' },
        ],
      },
      {
        title: 'Functions',
        items: [
          { title: 'Functions', href: '/docs/javascript/functions' },
          { title: 'Examples', href: '/docs/javascript/examples' },
        ],
      },
    ],
  },
  {
    name: 'HTML',
    icon: '</>',
    color: 'bg-orange-500/10 text-orange-500',
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', href: '/docs/html/introduction' },
          { title: 'Elements', href: '/docs/html/elements' },
          { title: 'Attributes', href: '/docs/html/attributes' },
        ],
      },
    ],
  },
  {
    name: 'CSS',
    icon: '#',
    color: 'bg-blue-500/10 text-blue-500',
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', href: '/docs/css/introduction' },
          { title: 'Selectors', href: '/docs/css/selectors' },
          { title: 'Properties', href: '/docs/css/properties' },
        ],
      },
    ],
  },
  {
    name: 'C++',
    icon: 'C++',
    color: 'bg-blue-600/10 text-blue-600 dark:text-blue-400',
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', href: '/docs/cpp/introduction' },
          { title: 'Syntax', href: '/docs/cpp/syntax' },
          { title: 'Variables', href: '/docs/cpp/variables' },
        ],
      },
    ],
  },
  {
    name: 'Java',
    icon: '☕',
    color: 'bg-red-500/10 text-red-500',
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', href: '/docs/java/introduction' },
          { title: 'Syntax', href: '/docs/java/syntax' },
          { title: 'Variables', href: '/docs/java/variables' },
        ],
      },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [expandedLanguages, setExpandedLanguages] = useState<string[]>(['Python', 'JavaScript']);
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started', 'Control Flow', 'Functions']);

  const toggleLanguage = (name: string) => {
    setExpandedLanguages((prev) =>
      prev.includes(name) ? prev.filter((l) => l !== name) : [...prev, name]
    );
  };

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  return (
    <aside className="w-[280px] h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto border-r border-sidebar-border bg-sidebar p-4">
      <nav className="space-y-2">
        {languageNavigation.map((lang) => (
          <div key={lang.name} className="animate-slide-in-left">
            <button
              onClick={() => toggleLanguage(lang.name)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium text-sm transition-colors",
                "hover:bg-accent",
                expandedLanguages.includes(lang.name) && "bg-accent"
              )}
            >
              <div className="flex items-center gap-2">
                <span className={cn("w-7 h-7 rounded flex items-center justify-center text-xs font-bold", lang.color)}>
                  {lang.icon}
                </span>
                <span>{lang.name}</span>
              </div>
              {expandedLanguages.includes(lang.name) ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            {expandedLanguages.includes(lang.name) && (
              <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                {lang.sections.map((section) => (
                  <div key={section.title}>
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide"
                    >
                      {section.title}
                      {expandedSections.includes(section.title) ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronRight className="w-3 h-3" />
                      )}
                    </button>

                    {expandedSections.includes(section.title) && (
                      <div className="space-y-0.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                              "sidebar-link text-sm",
                              location.pathname === item.href && "sidebar-link-active"
                            )}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
