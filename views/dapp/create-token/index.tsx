import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Container } from '@/components';
import { Typography } from '@/elements';

import CreateTokenForm from '../components/create-token-form';

const CreateToken: FC = () => {
  const t = useTranslations();

  return (
    <Container
      dapp
      width={['100%', '100%', '100%', 'auto']}
      height="100%"
      display="flex"
      position="relative"
      flexDirection="column"
      justifyContent="space-between"
      pb="XL"
    >
      <Typography variant="normal" pt="XL" pb="L">
        {t('createToken.title')}
      </Typography>
      <CreateTokenForm />
    </Container>
  );
};

export default CreateToken;
