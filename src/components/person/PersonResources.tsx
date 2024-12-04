import React from 'react';

interface PersonResourcesProps {
  resources: string[];
}

export function PersonResources({ resources }: PersonResourcesProps) {
  if (!resources?.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Resources</h2>
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