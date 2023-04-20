export interface LearnMoreProps {
  link: string;
  big?: boolean;
  external?: boolean;
  name: 'documentation' | 'ourTeam' | 'mediaKit';
}

export interface LinkWrapperProps {
  href: string;
  external?: boolean;
}
