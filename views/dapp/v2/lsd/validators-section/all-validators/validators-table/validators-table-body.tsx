import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SUISVG } from '@/components/svg/v2';

import TableRow from '../table-row';

const ValidatorsTableBody: FC = () => {
  const t = useTranslations();
  console.log(t);
  return (
    <>
      {[1, 2, 3].map((item, index) => (
        <Box key={v4()}>
          <TableRow>
            <Typography variant="small">{index + 1}</Typography>
            <Box display="flex" gap="m" alignItems="center">
              <Box display="flex">
                <Box
                  width="2rem"
                  height="2rem"
                  bg="white"
                  borderRadius="0.25rem"
                />
              </Box>
              <Typography variant="medium">Validator Name {item}</Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="small" textAlign="center">
                  41.47 M
                </Typography>
                <Box
                  color="white"
                  bg="#6FBCF0"
                  borderRadius="full"
                  width="1rem"
                  height="1rem"
                  display="flex"
                  justifyContent="center"
                >
                  <SUISVG
                    maxHeight="1rem"
                    maxWidth="1rem"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
            <Typography variant="small" textAlign="right">
              4.95%
            </Typography>
            <Typography variant="small" textAlign="right">
              4.95%
            </Typography>
          </TableRow>
        </Box>
      ))}
    </>
  );
};

export default ValidatorsTableBody;
