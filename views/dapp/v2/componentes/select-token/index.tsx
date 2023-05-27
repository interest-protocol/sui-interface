import { Box, Button } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { DotsSVG } from '@/components/svg/v2';

import SelectTokenModal from './select-token-modal';

const SelectToken: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        size="small"
        bg="#1F1F23"
        color="text"
        variant="filled"
        whiteSpace="nowrap"
        onClick={() => setModalOpen(true)}
        SuffixIcon={
          <Box as="span" display="inline-block" ml="m">
            <DotsSVG
              maxWidth="1rem"
              maxHeight="1rem"
              height="100%"
              width="100%"
              filled
            />
          </Box>
        }
      >
        Select Token
      </Button>
      <SelectTokenModal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </>
  );
};

export default SelectToken;
