import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AntDesign, Feather } from '@expo/vector-icons';

import { LocalizedStrings as t } from '../translations/Translations';
import DrawerMenu from '../components/drawer/DrawerMenu';
import HarbourTabNavigation from './HarbourTabNavigation';
import ReservationsNavigation from './ReservationsNavigation';
import MessagingNavigation from './MessagingNavigation';
import ProfileScreen from '../screens/common/profile/ProfileScreen';
import SettingsScreen from '../screens/common/settings/SettingsScreen';
import Colours from '../constants/colours';

import { initLocalization } from '../translations/Translations';

initLocalization();

const UserDrawerNavigation = createDrawerNavigator(
    {
        Harbours: {
            screen: HarbourTabNavigation,
            navigationOptions: {
                drawerLabel: t('navigation.drawer_labels.harbours'),
                drawerIcon: ({ tintColor }) => <Feather name="anchor" size={24} color={tintColor} />
            }
        },
        Reservations: {
            screen: ReservationsNavigation,
            navigationOptions: {
                drawerLabel: t('navigation.drawer_labels.reservations'),
                drawerIcon: ({ tintColor }) => <AntDesign name="book" size={24} color={tintColor} />
            }
        },
        // Messages: {
        //     screen: MessagingNavigation,
        //     navigationOptions: {
        //         drawerLabel: t('navigation.drawer_labels.messages'),
        //         drawerIcon: ({ tintColor }) => <Feather name="message-square" size={24} color={tintColor} />
        //     }
        // },
        Profile: {
            screen: ProfileScreen,
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

export default UserDrawerNavigation;