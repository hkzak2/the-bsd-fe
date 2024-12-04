import React, { useState } from 'react';
import { PeopleSearch } from '../components/PeopleSearch';
import { PersonCard } from '../components/PersonCard';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';
import { PEOPLE } from '../data/people';

export function People() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPeople = PEOPLE.filter(person => 
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout>
      <PageHeader
        title="Boycott"
        highlightedWord="Israeli Tech"
        subtitle="Search for Israeli tech"
        subtitleHighlight="people"
      />

      <PeopleSearch 
        value={searchQuery}
        onChange={setSearchQuery}
      />
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPeople.map(person => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </PageLayout>
  );
}