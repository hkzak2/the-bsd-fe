import React from 'react';

export function Logo() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M250 50L450 400H50L250 50Z"
        className="fill-[#ff3b3b] dark:fill-[#ff3b3b]"
        strokeWidth="20"
        strokeLinejoin="round"
        className="stroke-[#1a1a1a] dark:stroke-white"
      />
      <path
        d="M250 350L450 400H50L250 350Z"
        className="fill-[#4CAF50] dark:fill-[#4CAF50]"
        strokeWidth="20"
        strokeLinejoin="round"
        className="stroke-[#1a1a1a] dark:stroke-white"
      />
      <circle cx="200" cy="200" r="15" className="fill-[#1a1a1a] dark:fill-white" />
      <circle cx="300" cy="200" r="15" className="fill-[#1a1a1a] dark:fill-white" />
      <circle cx="250" cy="250" r="15" className="fill-[#1a1a1a] dark:fill-white" />
      <circle cx="200" cy="300" r="15" className="fill-[#1a1a1a] dark:fill-white" />
      <circle cx="300" cy="300" r="15" className="fill-[#1a1a1a] dark:fill-white" />
    </svg>
  );
}