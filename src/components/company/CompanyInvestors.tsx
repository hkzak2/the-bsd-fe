import React from 'react';

interface CompanyInvestorsProps {
  investors: string[];
}

export function CompanyInvestors({ investors }: CompanyInvestorsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Investors</h2>
      <div className="flex flex-wrap gap-2">
        {investors.map((investor, index) => (
          <span 
            key={index}
            className="pill bg-card text-muted-foreground border border-border"
          >
            {investor}
          </span>
        ))}
      </div>
    </div>
  );
}