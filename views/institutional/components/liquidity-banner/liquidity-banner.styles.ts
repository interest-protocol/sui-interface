import styled from '@emotion/styled';
import Slider from 'react-slick';

export const SlideShow = styled(Slider)`
  .slick-dots {
    top: 0;
    bottom: unset;
    text-align: right;
    right: 1rem;
    & li {
      margin: 0;
      width: auto;
      height: auto;
      & button {
        width: auto;
        height: auto;
        padding: 0.1rem;
        &::before {
          all: unset;
          content: '';
          opacity: 0.3;
          width: 0.4rem;
          height: 0.4rem;
          background: black;
          display: inline-block;
          border-radius: 0.2rem;
          transition: width 300ms ease-in-out;
        }
      }
      &.slick-active button::before {
        opacity: 1;
        width: 1rem;
      }
    }
  }
`;
