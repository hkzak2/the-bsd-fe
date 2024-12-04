import React from 'react';

interface CompanyResourcesProps {
  resources: string[];
}

export function CompanyResources({ resources }: CompanyResourcesProps) {
  if (!resources?.length) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Resources</h2>
      <div className="space-y-2">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary hover:underline"
          >
            {resource}
          </a>
        ))}
      </div>
    </div>
  );
}