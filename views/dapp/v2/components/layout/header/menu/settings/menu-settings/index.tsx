import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import MenuSettingsContent from './settings-list';
import { MenuSettingsListProps } from './settings-list.types';

const MenuSettings: FC<MenuSettingsListProps> = ({ setSettingsClosed }) => (
  <Motion textTransform="capitalize">
    <MenuSettingsContent setSettingsClosed={setSettingsClosed} />
  </Motion>
);

export default MenuSettings;
