import React from 'react';
import type { Location } from '../../types/company';

interface CompanyLocationsProps {
  locations: Location[];
}

export function CompanyLocations({ locations }: CompanyLocationsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Office Locations</h2>
      <div className="space-y-2">
        {locations.map((location, index) => (
          <div key={index} className="text-muted-foreground">
            {location.city}
            {location.state && `, ${location.state}`}
            {location.country && `, ${location.country}`}
          </div>
        ))}
      </div>
    </div>
  );
}