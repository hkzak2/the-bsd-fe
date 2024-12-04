export interface Person {
  id: string;
  name: string;
  image: string;
  description: string;
  role?: string;
  company?: string;
  resources?: string[];
}

export interface SearchProps {
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  tags: string[];
  founders: Founder[];
  locations: Location[];
  investors: string[];
}

export interface Founder {
  name: string;
  title?: string;
}

export interface Location {
  city: string;
  state?: string;
  country: string;
}

export interface Alternative {
  name: string;
  url: string;
}