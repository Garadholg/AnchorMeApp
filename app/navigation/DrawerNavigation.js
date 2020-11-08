import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Feather } from '@expo/vector-icons';

import { LocalizedStrings as t } from '../translations/Translations';
import DrawerMenu from '../components/drawer/DrawerMenu';
import HarbourTabNavigator from './HarbourTabNavigator';
import MyProfileScreen from '../screens/home/MyProfileScreen';
import SettingsScreen from '../screens/home/SettingsScreen';
import Colours from '../constants/colours';

const DrawerNavigator = createDrawerNavigator(
    {
        Harbours: {
            screen: HarbourTabNavigator,
            navigationOptions: {
                drawerLabel: t('navigation.drawer_labels.harbours'),
                drawerIcon: ({ tintColor }) => <Feather name="anchor" size={24} color={tintColor} />
            }
        },
        Profile: {
            screen: MyProfileScreen,
            navigationOptions: {
                drawerLabel: t('navigation.drawer_labels.profile'),
                drawerIcon: ({ tintColor }) => <Feather name="user" size={24} color={tintColor} />
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                drawerLabel: t('navigation.drawer_labels.settings'),
                drawerIcon: ({ tintColor }) => <Feather name="settings" size={24} color={tintColor} />
            }
        },
    },
    {
        contentComponent: DrawerMenu,
        contentOptions: {
            activeTintColor: Colours.white,
            activeBackgroundColor: Colours.dark
        }
    }
);

export default DrawerNavigator;