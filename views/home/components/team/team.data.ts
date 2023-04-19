import {
  BehanceSVG,
  DiscordSVG,
  DribbleSVG,
  GithubSVG,
  LinkedInSVG,
  TwitterSVG,
} from '@/svg';

export const SOCIAL_SVG = {
  github: GithubSVG,
  linkedin: LinkedInSVG,
  twitter: TwitterSVG,
  discord: DiscordSVG,
  dribbble: DribbleSVG,
  behance: BehanceSVG,
};

export const TEAM_MEMBERS = [
  {
    name: 'José Cerqueira',
    role: 'landingPage.roleCEO',
    image: 'jose-cerqueira',
    social: {
      github: 'https://github.com/josemvcerqueira',
      linkedin: 'https://www.linkedin.com/in/josemvcerqueira/',
      twitter: 'https://twitter.com/josemvcerqueira',
    },
  },
  {
    name: 'José P. Nelumba',
    role: 'landingPage.team.roleCFO',
    image: 'jose-nelumba',
    social: {
      linkedin:
        'https://www.linkedin.com/in/jos%C3%A9-pedro-cerqueira-nelumba/',
      twitter: 'https://twitter.com/Pedro102792',
    },
  },
  {
    name: 'Marco Pitra',
    role: 'landingPage.team.developer',
    image: 'marco-pitra',
    social: {
      github: 'https://github.com/git-marcopitra',
      linkedin: 'https://www.linkedin.com/in/marco-pitra/',
      twitter: 'https://twitter.com/marcopitra',
    },
  },
  {
    name: 'António Kipanda',
    role: 'landingPage.team.developer',
    image: 'antonio-cardoso',
    social: {
      github: 'https://github.com/KipandaJr',
      linkedin: 'https://www.linkedin.com/in/kipanda-cardoso/',
      twitter: 'https://twitter.com/kipaskipasJr',
    },
  },
  {
    name: 'Nilam Jaiswal',
    role: 'landingPage.team.marketingManager',
    image: 'nilam-jaiswal',
    social: {
      discord: 'http://discordapp.com/users/851547717163024437',
      linkedin: 'https://www.linkedin.com/in/nilam-jjaiswal/',
      twitter: 'https://twitter.com/crypto_wife1',
    },
  },
  {
    name: 'Leonardo Hernandez',
    role: 'landingPage.team.designer',
    image: 'leonardo-hernandez',
    social: {
      linkedin:
        'https://www.linkedin.com/in/leonardo-hernandez-celli-81499093/',
      dribbble: 'https://dribbble.com/lhcelli',
      behance: 'https://www.behance.net/lhcelli',
    },
  },
];
