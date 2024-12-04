import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import type { Company } from '../types/company';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/companies/${company.id}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="rounded-3xl overflow-hidden card-gradient border border-border hover:border-border/80 transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff3b3b] to-[#4CAF50] p-[1px]">
              <div className="w-full h-full rounded-2xl card-gradient flex items-center justify-center">
                <Logo />
              </div>
            </div>
            <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300 mb-3">
            {company.name}
          </h3>
          
          <p className="text-muted-foreground mb-6 line-clamp-2">{company.description}</p>
          
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
      </div>
    </div>
  );
}