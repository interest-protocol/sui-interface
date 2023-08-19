export interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  social: {
    github?: string;
    x?: string;
    discord?: string;
    behance?: string;
    dribbble?: string;
    linkedin?: string;
  };
}
