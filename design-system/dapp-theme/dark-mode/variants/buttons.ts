import { css } from '@emotion/react';

import space from '../../../common/space';
import colors from '../colors';

const primary = css`
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  border-radius: 2rem;
  color: ${colors.text};
  display: inline-block;
  padding: 0.8rem ${space.XL};
  background: ${colors.accent};
  transition: background-color 300ms, color 200ms, width 300ms;
  &:hover {
    background: ${colors.accentActive};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${colors.disabled};
    &:hover {
      background: ${colors.disabled};
    }
  }
`;

const secondary = css`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border-radius: 2rem;
  display: inline-block;
  color: ${colors.text};
  padding: 0.8rem ${space.XL};
  background: ${colors.accentSoft};
  border: 1px solid ${colors.accentActive};
  transition: background-color 300ms, color 200ms, width 300ms;
  &:hover {
    color: ${colors.textInverted};
    background: ${colors.accentActive};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${colors.disabled};
    &:hover {
      background: ${colors.disabled};
    }
  }
`;

const tertiary = css`
  outline: none;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  border-radius: 2rem;
  display: inline-block;
  background: transparent;
  padding: 0.8rem ${space.XL};
  color: ${colors.accentActive};
  border: 1px solid ${colors.accentActive};
  transition: background-color 300ms, color 200ms, width 300ms;
  &:hover {
    color: ${colors.textInverted};
    background: ${colors.accentActive};
  }
  &:disabled {
    cursor: not-allowed;
    border-color: ${colors.disabled};
    &:hover {
      background: ${colors.disabled};
    }
  }
`;

const neutral = css`
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  border-radius: 2rem;
  display: inline-block;
  color: ${colors.textInverted};
  padding: ${space.L} ${space.XL};
  background: ${colors.textSecondary};
  transition: background-color 300ms, color 200ms, width 300ms;
  &:hover {
    background: ${colors.disabled};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${colors.disabled};
    &:hover {
      background: ${colors.disabled};
    }
  }
`;

export default {
  primary,
  secondary,
  tertiary,
  neutral,
};
