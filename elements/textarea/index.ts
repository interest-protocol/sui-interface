import stylin from '@stylin.js/react';
import { PropsWithChildren } from 'react';

import { BoxElementProps } from '../box/box.types';

const Textarea = stylin<BoxElementProps>(
  'textarea'
)();

export default Textarea;
