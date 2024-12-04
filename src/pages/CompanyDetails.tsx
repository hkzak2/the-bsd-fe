import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { CompanyHeader } from '../components/company/CompanyHeader';
import { CompanyFounders } from '../components/company/CompanyFounders';
import { CompanyLocations } from '../components/company/CompanyLocations';
import { CompanyInvestors } from '../components/company/CompanyInvestors';
import { CompanyResources } from '../components/company/CompanyResources';
import { AlternativesForm } from '../components/company/AlternativesForm';
import { COMPANIES } from '../data/companies';
import type { Alternative } from '../types/company';

export function CompanyDetails() {
  const { id } = useParams<{ id: string }>();
  const company = COMPANIES.find(c => c.id === id);
  const [alternatives, setAlternatives] = useState<Alternative[]>(company?.alternatives || []);

  if (!company) {
    return (
      <PageLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Company not found</h1>
        </div>
      </PageLayout>
    );
  }

  const handleAlternativeSubmit = (alternative: Alternative) => {
    setAlternatives(prev => [...prev, alternative]);
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <CompanyHeader company={company} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CompanyFounders founders={company.founders} />
            <CompanyLocations locations={company.locations} />
            {company.resources && <CompanyResources resources={company.resources} />}
          </div>
          <div>
            <CompanyInvestors investors={company.investors} />
            <AlternativesForm 
              onSubmit={handleAlternativeSubmit}
              alternatives={alternatives}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}