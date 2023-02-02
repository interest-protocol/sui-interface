import { css } from '@emotion/react';

import space from '../../../common/space';
import colors from '../colors';

const primary = css`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  color: ${colors.text};
  display: inline-block;
  border-radius: 2rem;
  padding: 0.8rem ${space.XL};
  background: ${colors.accent};
`;

const secondary = css`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: ${space.M};
  color: ${colors.text};
  display: inline-block;
  border-radius: 2rem;
  background: ${colors.bottomBackground};
`;

const tertiary = css`
  outline: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  color: ${colors.accent};
  background: transparent;
  border-radius: 2rem;
  padding: ${space.S} ${space.L};
  border: 1px solid ${colors.accent};
`;

const neutral = css`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  color: ${colors.text};
  display: inline-block;
  border-radius: 2rem;-
  background: ${colors.outline};
  padding: ${space.L} ${space.XL};
`;

const special = css`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  color: ${colors.text};
  display: inline-block;
  border-radius: 2rem;
  padding: 0.8rem ${space.XL};
  background-image: linear-gradient(
    ${colors.accentActive},
    ${colors.accentBackground}
  );
`;

export default {
  primary,
  secondary,
  tertiary,
  neutral,
  special,
};
