import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

// import { wrapperVariants } from '@/constants';
// import { MenuSettingsProps } from '../menu.types';
import MenuSettingsContent from './settings-list';

const MenuSettings: FC = () => (
  <Motion textTransform="capitalize">
    <MenuSettingsContent /*setSettingsClosed={setSettingsClosed}*/ />
  </Motion>
);

export default MenuSettings;
