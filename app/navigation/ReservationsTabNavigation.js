import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import ActiveReservationsScreen from '../screens/reservations/ActiveReservationsScreen';
import PastReservationsScreen from '../screens/reservations/PastReservationsScreen';
import { LocalizedStrings as t, initLocalization } from '../translations/Translations';
import Colours from '../constants/colours';

initLocalization();

const ReservationNavigation = createMaterialTopTabNavigator(
    {
        ActiveReservations: {
            screen: ActiveReservationsScreen,
            navigationOptions: {
                tabBarLabel: t('navigation.reservations_tab_labels.active')
            },
        },
        PastReservations: {
            screen: PastReservationsScreen,
            navigationOptions: {
                tabBarLabel: t('navigation.reservations_tab_labels.past')
            }
        }
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
            style: {
                paddingBottom: 5,
                paddingTop: getStatusBarHeight(),
                backgroundColor: Colours.white,
            }
        }
});

export default ReservationNavigation;