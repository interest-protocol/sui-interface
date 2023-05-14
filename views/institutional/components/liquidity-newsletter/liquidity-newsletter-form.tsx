import { Button, TextField } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, MouseEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { capitalize } from '@/utils';

const NewsletterForm: FC = () => {
  const t = useTranslations();
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
        loading: t('liquidity.newsletter.button', {
          isLoading: Number(true),
        }),

        success: capitalize(t('common.success')),
        error: (error) =>
          capitalize(
            t(
              error.code == 1008
                ? 'liquidity.newsletter.errors.1008'
                : 'error.generic'
            )
          ),
      }
    );
  };

  return (
    <>
      <TextField
        fontSize="1rem"
        minHeight="1rem"
        {...register('email')}
        placeholder={t('liquidity.newsletter.placeholder')}
      />
      <Button
        variant="filled"
        mt="2xl"
        disabled={loading}
        justifyContent="center"
        onClick={(e) => handleSubscribe(e)}
      >
        {t('liquidity.newsletter.button', {
          isLoading: Number(loading),
        })}
      </Button>
    </>
  );
};

export default NewsletterForm;
