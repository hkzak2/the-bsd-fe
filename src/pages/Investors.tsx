import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { CompanyCard } from '../components/CompanyCard';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';
import { COMPANIES } from '../data/companies';

export function Investors() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter companies that are investors (have the 'VC' or 'Investment' tag)
  const investors = COMPANIES.filter(company => 
    company.tags.some(tag => ['VC', 'Investment'].includes(tag))
  );

  const filteredInvestors = investors.filter(investor => 
    investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    investor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    investor.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <PageLayout>
      <PageHeader
        title="Boycott"
        highlightedWord="Israeli Tech"
        subtitle="Search for Israeli tech"
        subtitleHighlight="investors"
      />

      <SearchBar 
        value={searchQuery} 
        onChange={setSearchQuery}
        placeholder="Search investors..."
      />
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInvestors.map((investor) => (
          <CompanyCard key={investor.id} company={investor} />
        ))}
      </div>
    </PageLayout>
  );
}