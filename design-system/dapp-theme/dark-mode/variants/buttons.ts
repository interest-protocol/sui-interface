import { css } from '@emotion/react';

import space from '../../../common/space';
import colors from '../colors';

const primary = css`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  align-items: flex;
  font-weight: bold;
  position: relative;
  border-radius: 2rem;
  justify-content: flex;
  color: ${colors.text};
  display: inline-block;
  background: ${colors.accent};
  padding: ${space.L} ${space.XL};
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
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 2rem;
  align-items: center;
  display: inline-block;
  justify-content: center;
  color: ${colors.accentActive};
  padding: ${space.L} ${space.XL};
  background: ${colors.accentSoft};
  border: 1px solid ${colors.accentActive};
  transition: background-color 300ms, color 200ms, width 300ms;
  &:hover {
    color: ${colors.textInverted};
    background: ${colors.accentActive};
  }
  &:disabled {
    border: none;
    cursor: not-allowed;
    color: ${colors.accentSoft};
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
  display: inline-flex;
  background: transparent;
  padding: 1.3rem ${space.XL};
  color: ${colors.accentActive};
  border: 1px solid ${colors.accentActive};
  transition: background-color 300ms, color 200ms, width 300ms;
  &:hover {
    color: ${colors.text};
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
  display: flex;
  cursor: pointer;
  font-weight: bold;
  align-items: flex;
  position: relative;
  border-radius: 2rem;
  display: inline-block;
  justify-content: flex;
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
