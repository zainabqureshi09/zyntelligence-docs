import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface DocLayoutProps {
  children: ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
