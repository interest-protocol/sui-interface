import { Box, ProgressIndicator } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LogoSVG, SuiSVG } from '@/svg';

import CardSection from './card-section';
import CardWrapper from './card-wrapper';
import InputSection from './input-section';
import ModalPreview from './modal';

const RepayCard: FC = () => {
  return (
    <>
      <ModalPreview />
      <CardWrapper position="left" buttonDescription="Preview Repay">
        <InputSection
          title="Available to borrow"
          amount="2.123"
          placeholder={'0.123'}
          Icon={<SuiSVG maxHeight="100%" maxWidth="100%" filled />}
        />
        <CardSection
          title="Currently Repaying"
          lines={[{ description: 'In USD', value: '$0' }]}
        />
        <CardSection
          title="New Borrow Limit"
          lines={[
            { description: 'Borrow Limit', value: '$300' },
            { description: 'Borrow Limit Used', value: '50%' },
          ]}
        >
          <Box mb="1.125rem">
            <ProgressIndicator value={50} variant="bar" />
          </Box>
        </CardSection>
        <CardSection
          title="Rates"
          lines={[
            {
              description: 'SUI Borrow APY',
              value: '3.5%',
              Icon: <SuiSVG maxHeight="0.875rem" maxWidth="0.875rem" filled />,
            },
            {
              description: 'IPX Rewards APY',
              value: '2.4%',
              Icon: (
                <LogoSVG
                  maxHeight="0.875rem"
                  maxWidth="0.875rem"
                  fill="#ACAAAF"
                />
              ),
            },
          ]}
        />
      </CardWrapper>
    </>
  );
};

export default RepayCard;
