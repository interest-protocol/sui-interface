export interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  social: {
    github?: string;
    twitter?: string;
    discord?: string;
    behance?: string;
    dribbble?: string;
    linkedin?: string;
  };
}
