import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo';
import type { Company } from '../../types/company';

interface PersonCompaniesProps {
  companies: Company[];
}

export function PersonCompanies({ companies }: PersonCompaniesProps) {
  const navigate = useNavigate();

  if (!companies?.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companies.map((company) => (
          <div
            key={company.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/companies/${company.id}`)}
          >
            <div className="rounded-xl overflow-hidden card-gradient border border-border hover:border-border/80 transition-all duration-300 p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-[1px]">
                  <div className="w-full h-full rounded-lg card-gradient flex items-center justify-center">
                    <Logo />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-gradient transition-all duration-300">
                    {company.name}
                  </h3>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {company.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}