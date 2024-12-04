import React from 'react';
import { Logo } from '../Logo';
import type { Company } from '../../types/company';

interface CompanyHeaderProps {
  company: Company;
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px]">
          <div className="w-full h-full rounded-2xl card-gradient flex items-center justify-center">
            <Logo />
          </div>
        </div>
        <h1 className="text-4xl font-bold">{company.name}</h1>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6">{company.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {company.tags.map((tag, index) => (
          <span 
            key={index}
            className="pill bg-secondary/10 text-secondary border border-secondary/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}