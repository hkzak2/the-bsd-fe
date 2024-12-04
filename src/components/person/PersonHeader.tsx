import React from 'react';
import type { Person } from '../../types';

interface PersonHeaderProps {
  person: Person;
}

export function PersonHeader({ person }: PersonHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="w-full md:w-1/3">
        <div className="rounded-3xl overflow-hidden border border-border">
          <img 
            src={person.image} 
            alt={person.name}
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
      
      <div className="w-full md:w-2/3">
        <h1 className="text-4xl font-bold mb-4">{person.name}</h1>
        {(person.role || person.company) && (
          <div className="text-xl text-muted-foreground mb-4">
            {person.role} {person.company && `at ${person.company}`}
          </div>
        )}
        <p className="text-lg text-muted-foreground mb-6">{person.description}</p>
      </div>
    </div>
  );
}