import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SuiSVG } from '@/svg';

import CardSection from '../card-section';
import { ModalPreviewProps } from './modal.types';

const PreviewContent: FC<ModalPreviewProps> = ({ amount }) => {
  return (
    <>
      <Box
        p="2.5rem"
        borderTop="1px solid"
        borderColor="#B6C4FF33"
        bg="transparent"
        gap="0.875rem"
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Box
          width="2.5rem"
          height="2.5rem"
          bg="#A5F3FC"
          color="#1D2947"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="2px"
        >
          <SuiSVG
            maxHeight="1.5rem"
            maxWidth="1.5rem"
            width="100%"
            height="100%"
            filled
          />
        </Box>
        <Typography variant="title5">{amount}</Typography>
      </Box>
      <CardSection
        title="New Borrow Limit"
        isModal
        lines={[
          { description: 'Borrow Limit', value: '$300' },
          { description: 'Borrow Limit Used', value: '25%' },
        ]}
      >
        <Box mb="1.125rem">
          <ProgressIndicator value={25} variant="bar" />
        </Box>
      </CardSection>
      <CardSection
        title="New Borrow Balance"
        isModal
        lines={[
          { description: 'Borrow Limit', value: '$300' },
          { description: 'Borrow Limit Used', value: '50%' },
        ]}
      />
    </>
  );
};

export default PreviewContent;
