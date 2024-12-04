import React from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { PersonHeader } from '../components/person/PersonHeader';
import { PersonResources } from '../components/person/PersonResources';
import { PersonCompanies } from '../components/person/PersonCompanies';
import { PEOPLE } from '../data/people';
import { COMPANIES } from '../data/companies';

export function PersonDetails() {
  const { id } = useParams<{ id: string }>();
  const person = PEOPLE.find(p => p.id === id);

  if (!person) {
    return (
      <PageLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Person not found</h1>
        </div>
      </PageLayout>
    );
  }

  // Find associated companies based on person's company or investments
  const associatedCompanies = COMPANIES.filter(company => 
    company.name === person.company ||
    company.founders.some(founder => founder.name === person.name) ||
    company.investors.includes(person.company || '')
  );

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <PersonHeader person={person} />
        <div className="space-y-8">
          <PersonCompanies companies={associatedCompanies} />
          {person.resources && <PersonResources resources={person.resources} />}
        </div>
      </div>
    </PageLayout>
  );
}