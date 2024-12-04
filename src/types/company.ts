export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  tags: string[];
  founders: Founder[];
  locations: Location[];
  investors: string[];
  alternatives?: Alternative[];
  resources?: string[];
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