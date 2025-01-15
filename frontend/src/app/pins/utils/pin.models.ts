export interface Pins {
  title: string;
  collaboratory: string[];
  privacy: string;
  image: string;
  id: number;
  collaborators: Collaborator[];
}

interface Collaborator {
  title: string;
  email: string;
  region: string;
  country: string;
  id: number;
}
