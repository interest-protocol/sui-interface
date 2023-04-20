import { css } from '@emotion/react';

export const LandingGlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const DappGlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  ul,
  li {
    list-style-type: '· ';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .breakMobile {
    display: block;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    padding: 2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 0.5rem;
    background: transparent;
    transition: all 300ms ease-in-out;
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: #fff1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5rem;
    border: 5px solid transparent;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #0040c0;
  }

  /* Handle on active */
  ::-webkit-scrollbar-thumb:active {
    background: #0055ff;
  }

  .__react_component_tooltip .multi-line {
    text-align: left !important;
  }

  @media (min-width: 40em) {
    br {
      display: initial;
    }
  }
`;
