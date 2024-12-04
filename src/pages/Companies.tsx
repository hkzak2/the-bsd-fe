import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { CompanyCard } from '../components/CompanyCard';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';
import { COMPANIES } from '../data/companies';

export function Companies() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = COMPANIES.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <PageLayout>
      <PageHeader
        title="Boycott"
        highlightedWord="Israeli Tech"
        subtitle="Search for Israeli tech"
        subtitleHighlight="companies"
      />

      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </PageLayout>
  );
}