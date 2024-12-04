import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Person } from '../types';

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/people/${person.id}`);
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden border border-border hover:border-border/80 transition-all duration-300 cursor-pointer" onClick={handleClick}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={person.image} 
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
        <div className="absolute bottom-0 p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
              {person.name}
            </h3>
            <Eye className="text-muted-foreground group-hover:text-white transition-colors" />
          </div>
          
          {(person.role || person.company) && (
            <div className="text-sm text-muted-foreground">
              {person.role} {person.company && `at ${person.company}`}
            </div>
          )}
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {person.description}
          </p>
        </div>
      </div>
    </div>
  );
}