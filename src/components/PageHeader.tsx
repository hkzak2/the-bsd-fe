import React from 'react';

interface PageHeaderProps {
  title: string;
  highlightedWord: string;
  subtitle: string;
  subtitleHighlight: string;
}

export function PageHeader({ title, highlightedWord, subtitle, subtitleHighlight }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-6xl md:text-7xl font-bold mb-6">
        {title} <span className="text-gradient">{highlightedWord}</span>
      </h1>
      <p className="text-xl text-muted-foreground">
        {subtitle} <span className="text-foreground">{subtitleHighlight}</span>.
      </p>
    </div>
  );
}