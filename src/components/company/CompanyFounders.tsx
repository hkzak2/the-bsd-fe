import React from 'react';
import type { Founder } from '../../types/company';

interface CompanyFoundersProps {
  founders: Founder[];
}

export function CompanyFounders({ founders }: CompanyFoundersProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Founders</h2>
      <div className="space-y-2">
        {founders.map((founder, index) => (
          <div key={index} className="text-muted-foreground">
            {founder.name}
            {founder.title && <span className="text-sm ml-2">({founder.title})</span>}
          </div>
        ))}
      </div>
    </div>
  );
}