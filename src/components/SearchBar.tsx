import React from 'react';
import { Search } from 'lucide-react';
import type { SearchProps } from '../types';

export function SearchBar({ placeholder = 'Search companies...', onChange, value }: SearchProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-8 py-5 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
        />
        <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      </div>
      
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
        <span className="pill bg-card text-muted-foreground border border-border">
          Tech Companies
        </span>
        <span className="pill bg-card text-muted-foreground border border-border">
          Investors
        </span>
      </div>
    </div>
  );
}