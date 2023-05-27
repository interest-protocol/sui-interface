import {
  Box,
  Slider,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { InputSectionProps } from './lending-protocol.types';

const InputSection: FC<InputSectionProps> = ({
  title,
  amount,
  Icon,
  placeholder,
}) => {
  const { dark } = useTheme() as Theme;
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F;'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4;';

  return (
    <Box px="1.5rem" pb="1.5rem" pt="1.313rem" bg={surface1}>
      <Box mb="0.688rem" display="flex" justifyContent="space-between">
        <Typography variant="medium" as="span" color="#ACAAAF">
          {title}
        </Typography>
        <Typography variant="medium" as="span">
          {amount}
        </Typography>
      </Box>
      <TextField PrefixIcon={Icon} placeholder={placeholder} />
      <Box mt="1.625rem">
        <Slider max={100} min={0} value={0} />
      </Box>
    </Box>
  );
};

export default InputSection;
