import React, { useState } from 'react';
import type { Alternative } from '../../types/company';

interface AlternativesFormProps {
  onSubmit: (alternative: Alternative) => void;
  alternatives?: Alternative[];
}

export function AlternativesForm({ onSubmit, alternatives }: AlternativesFormProps) {
  const [alternative, setAlternative] = useState<Alternative>({ name: '', url: '' });
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!alternative.name || !alternative.url) {
      setError('Please fill in all fields');
      return;
    }

    try {
      new URL(alternative.url);
    } catch {
      setError('Please enter a valid URL');
      return;
    }

    onSubmit(alternative);
    setAlternative({ name: '', url: '' });
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Alternatives</h2>
      
      {alternatives?.length > 0 && (
        <div className="mb-6 space-y-3">
          {alternatives.map((alt, index) => (
            <a
              key={index}
              href={alt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-card border border-border hover:border-border/80 transition-all"
            >
              <div className="font-medium text-foreground">{alt.name}</div>
              <div className="text-sm text-primary truncate">{alt.url}</div>
            </a>
          ))}
        </div>
      )}

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-medium mb-4">Suggest an Alternative</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={alternative.name}
              onChange={(e) => setAlternative(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-muted-foreground mb-1">
              URL
            </label>
            <input
              type="url"
              id="url"
              value={alternative.url}
              onChange={(e) => setAlternative(prev => ({ ...prev, url: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {error && (
            <div className="text-sm text-red-500">{error}</div>
          )}
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Submit Alternative
          </button>
        </form>
      </div>
    </div>
  );
}