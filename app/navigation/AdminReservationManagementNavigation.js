import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import AdminPendingReservationsScreen from '../screens/admin/reservations/AdminPendingReservationsScreen';
import AdminAcceptedReservationsScreen from '../screens/admin/reservations/AdminAcceptedReservationsScreen';
import AdminActiveReservationsScreen from '../screens/admin/reservations/AdminActiveReservationsScreen';
import AdminCompletedReservationsScreen from '../screens/admin/reservations/AdminCompletedReservationsScreen';
import AdminUnfinishedReservationsScreen from '../screens/admin/reservations/AdminUnfinishedReservationsScreen';
import { LocalizedStrings as t, initLocalization } from '../translations/Translations';
import Colours from '../constants/colours';

initLocalization();

const AdminReservationManagementNavigation = createMaterialTopTabNavigator(
    {
        AdminPendingReservations: {
            screen: AdminPendingReservationsScreen,
            navigationOptions: {
                tabBarLabel: t('navigation.admin_reservations_tab_labels.pending')
            },
        },
        AdminAcceptedReservations: {
            screen: AdminAcceptedReservationsScreen,
            navigationOptions: {
                tabBarLabel: t('navigation.admin_reservations_tab_labels.accepted')
            },
        },
        AdminActiveReservations: {
            screen: AdminActiveReservationsScreen,
            navigationOptions: {
                tabBarLabel: t('navigation.admin_reservations_tab_labels.active')
            },
        },
        AdminCompletedReservations: {
            screen: AdminCompletedReservationsScreen,
            navigationOptions: {
                tabBarLabel: t('navigation.admin_reservations_tab_labels.completed')
            }
        },
        AdminUnfinishedReservations: {
            screen: AdminUnfinishedReservationsScreen,
            navigationOptions: {
                tabBarLabel: t('navigation.admin_reservations_tab_labels.unfinished')
            },
        },
    }, 
    {
        tabBarOptions: {
            activeTintColor: Colours.dark,
            inactiveTintColor: Colours.disabled,
            indicatorStyle: {
                backgroundColor: Colours.dark
            },
            labelStyle: {
                fontSize: 16
            },
            scrollEnabled: true,
            style: {
                paddingBottom: 5,
                paddingTop: getStatusBarHeight(),
                backgroundColor: Colours.white,
            }
        }
});

export default AdminReservationManagementNavigation;