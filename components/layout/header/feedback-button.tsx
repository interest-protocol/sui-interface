import { FC } from 'react';

import { Button } from '@/elements';

const FeedbackButton: FC = () => (
  <a
    target="_blank"
    rel="noreferrer"
    href="https://docs.google.com/forms/d/e/1FAIpQLSfLdqMee_f4v3NRnVuKjsfuvmQH0VRu9YblU_nnnEFQ2km0Pw/viewform"
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
