import { Box, ProgressIndicator } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { LogoSVG, SuiSVG } from '@/svg';

import CardSection from './card-section';
import CardWrapper from './card-wrapper';
import InputSection from './input-section';
import { LendCardProps } from './lending-protocol.types';

const RepayCard: FC<LendCardProps> = ({ formLend, name, balance }) => {
  const t = useTranslations();
  return (
    <CardWrapper
      position="left"
      buttonDescription={`${t('lending.card.button')} ${t('common.v2.repay')}`}
      control={formLend.control}
      name={name}
    >
      <InputSection
        register={formLend.register}
        setValue={formLend.setValue}
        name={name}
        amount={balance}
        title={t('lending.card.header', {
          isBorrow: 0,
        })}
        placeholder={'0.123'}
        Icon={<SuiSVG maxHeight="100%" maxWidth="100%" filled />}
      />
      <CardSection
        title={t('lending.card.currentSection.header', {
          isBorrow: 0,
        })}
        lines={[{ description: `${t('common.v2.in')} USD`, value: '$0' }]}
      />
      <CardSection
        title={t('lending.card.borrowLimitSection.header', {
          isBorrow: 0,
        })}
        lines={[
          {
            description: t('lending.card.borrowLimitSection.borrowLimit', {
              isBorrow: 0,
            }),
            value: '$300',
          },
          {
            description: t('lending.card.borrowLimitSection.borrowLimitUsed', {
              isBorrow: 0,
            }),
            value: '50%',
          },
        ]}
      >
        <Box mb="1.125rem">
          <ProgressIndicator value={50} variant="bar" />
        </Box>
      </CardSection>
      <CardSection
        title={t('lending.card.ratesSection.header')}
        lines={[
          {
            description: `SUI ${t('common.v2.borrow')} APY`,
            value: '3.5%',
            Icon: <SuiSVG maxHeight="0.875rem" maxWidth="0.875rem" filled />,
          },
          {
            description: `IPX ${t('common.v2.rewards')} APY`,
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
  );
};

export default RepayCard;
