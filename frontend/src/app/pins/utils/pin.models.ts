export interface Pin {
  id: number;
  title: string;
  description: string;
  image: string;
  collaboratory: string[];
  privacy: 'public' | 'private';
}
