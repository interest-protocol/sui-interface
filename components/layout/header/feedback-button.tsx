import { FC } from 'react';

import { Button } from '@/elements';

const FeedbackButton: FC = () => (
  <a
    target="_blank"
    rel="noreferrer"
    href="https://forms.gle/aDP4wHvshLPKkKv97"
  >
    <Button
      variant="primary"
      bg="accentSecondary"
      nHover={{ bg: 'accentOutline' }}
    >
      Feedback
    </Button>
  </a>
);

export default FeedbackButton;
