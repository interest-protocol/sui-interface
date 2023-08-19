import {
  BehanceSVG,
  DiscordSVG,
  DribbleSVG,
  GithubSVG,
  LinkedInSVG,
  XSVG,
} from '@/svg';

export const SOCIAL_SVG = {
  github: GithubSVG,
  x: XSVG,
  discord: DiscordSVG,
  behance: BehanceSVG,
  dribbble: DribbleSVG,
  linkedin: LinkedInSVG,
};

export const TEAM_MEMBERS = [
  {
    name: 'José Cerqueira',
    role: 'team.roles.CEO',
    image: 'jose-cerqueira',
    social: {
      github: 'https://github.com/josemvcerqueira',
      linkedin: 'https://www.linkedin.com/in/josemvcerqueira/',
      x: 'https://x.com/josemvcerqueira',
    },
  },
  {
    name: 'José P. Nelumba',
    role: 'team.roles.CFO',
    image: 'jose-nelumba',
    social: {
      linkedin:
        'https://www.linkedin.com/in/jos%C3%A9-pedro-cerqueira-nelumba/',
      x: 'https://x.com/Pedro102792',
    },
  },
  {
    name: 'Marco Pitra',
    role: 'team.roles.developer',
    image: 'marco-pitra',
    social: {
      github: 'https://github.com/git-marcopitra',
      linkedin: 'https://www.linkedin.com/in/marco-pitra/',
      x: 'https://x.com/marcopitra',
    },
  },
  {
    name: 'António Kipanda',
    role: 'team.roles.developer',
    image: 'antonio-cardoso',
    social: {
      github: 'https://github.com/KipandaJr',
      linkedin: 'https://www.linkedin.com/in/kipanda-cardoso/',
      x: 'https://x.com/kipaskipasJr',
    },
  },
  {
    name: 'Nilam Jaiswal',
    role: 'team.roles.marketing',
    image: 'nilam-jaiswal',
    social: {
      discord: 'http://discordapp.com/users/851547717163024437',
      linkedin: 'https://www.linkedin.com/in/nilam-jjaiswal/',
      x: 'https://x.com/crypto_wife1',
    },
  },
  {
    name: 'Leonardo Hernandez',
    role: 'team.roles.designer',
    image: 'leonardo-hernandez',
    social: {
      linkedin:
        'https://www.linkedin.com/in/leonardo-hernandez-celli-81499093/',
      dribbble: 'https://dribbble.com/lhcelli',
      behance: 'https://www.behance.net/lhcelli',
    },
  },
];
