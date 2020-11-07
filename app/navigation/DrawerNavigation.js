import React from 'react';
import { LocalizedStrings as t } from '../translations/Translations';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Feather } from '@expo/vector-icons';

import DrawerMenu from '../components/drawer/DrawerMenu';
import HarboursScreen from '../screens/home/HarboursScreen';

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HarboursScreen,
            navigationOptions: {
                drawerLabel: t('drawer_labels.harbours'),
                drawerIcon: <Feather name="anchor" size={24} />
            }
        }
    },
    {
        contentComponent: DrawerMenu
    }
);

export default DrawerNavigator;