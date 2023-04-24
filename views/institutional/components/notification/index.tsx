import {
  Box,
  Button,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, MouseEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { capitalize } from '@/utils';

import Title from '../title';

const NotificationSection: FC = () => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
  const [loading, setLoading] = useState(false);
  const { register, getValues } = useForm({ defaultValues: { email: '' } });

  const handleSubscribe: MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const email = getValues('email');
    setLoading(true);
    toast.promise(
      fetch(`/api/v1/mail/subscribe?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.httpStatus >= 400) throw data;
          if (data.httpStatus == 200) return data;
        })
        .catch((x) => {
          throw x;
        })
        .finally(() => setLoading(false)),
      {
        loading: t('landingPage.footer.getEarlyNotifications.button', {
          isLoading: Number(true),
        }),

        success: capitalize(t('common.success')),
        error: (error) =>
          capitalize(
            t(
              error.code == 1008
                ? 'landingPage.footer.getEarlyNotifications.errors.1008'
                : 'error.generic'
            )
          ),
      }
    );
  };

  return (
    <Box bg="background">
      <Box
        gap="2rem"
        display="flex"
        flexDirection="column"
        width={['unset', 'unset', '34.75rem']}
        margin={['1.25rem', '1.25rem', '0 auto']}
      >
        <Title as="h2" my="2xl" gridColumn="1/8" fontWeight="400">
          <Typography
            as="span"
            display="block"
            textAlign="center"
            variant="displayLarge"
            letterSpacing="-0.15rem"
            background={`linear-gradient(90deg, ${colors.primary} 27.62%, ${colors.primary}33 82.41%)`}
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
            backgroundClip="text"
          >
            {t('landingPage.footer.getEarlyNotifications.title.first')}
          </Typography>
          <Typography
            as="span"
            display="block"
            textAlign="center"
            variant="displayLarge"
            letterSpacing="-0.15rem"
            background={`linear-gradient(270deg, ${colors.primary} 18.13%, ${colors.primary}33 102.01%)`}
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
            backgroundClip="text"
          >
            {t('landingPage.footer.getEarlyNotifications.title.second')}
          </Typography>
          <Typography
            as="span"
            display="block"
            textAlign="center"
            variant="displayLarge"
            justifyContent="center"
            letterSpacing="-0.15rem"
            background={`linear-gradient(90deg, ${colors.primary} 13.04%, ${colors.primary}33 96.06%)`}
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
            backgroundClip="text"
          >
            {t('landingPage.footer.getEarlyNotifications.title.third')}
          </Typography>
        </Title>
        <TextField
          my="0rem"
          fontSize="1rem"
          minHeight="1rem"
          {...register('email')}
          placeholder={t(
            'landingPage.footer.getEarlyNotifications.placeholder'
          )}
        />
        <Button
          variant="filled"
          disabled={loading}
          justifyContent="center"
          onClick={(e) => handleSubscribe(e)}
        >
          {t('landingPage.footer.getEarlyNotifications.button', {
            isLoading: Number(loading),
          })}
        </Button>
      </Box>
    </Box>
  );
};

export default NotificationSection;
