import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Light rays effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[800px] bg-gradient-to-b from-primary/20 to-transparent rotate-12 blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute -top-32 right-1/4 w-[500px] h-[800px] bg-gradient-to-b from-secondary/20 to-transparent -rotate-12 blur-3xl transform translate-x-1/2"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}