import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather } from '@expo/vector-icons';

import { LocalizedStrings as t, initLocalization } from '../translations/Translations';
import HarbourCardNavigator from './HarbourCardNavigation';
import HarbourCalloutNavigator from './HarbourCalloutNavigation';
import Colours from '../constants/colours';

initLocalization();

const HarbourTabNavigation = createBottomTabNavigator(
    {
        HarbourList: {
            screen: HarbourCardNavigator,
            navigationOptions: {
                tabBarLabel: t('navigation.harbours_tab_labels.list'),
                tabBarIcon: ({tintColor}) => <Feather name="anchor" size={24} color={tintColor} />
            },
        },
        Map: {
            screen: HarbourCalloutNavigator,
            navigationOptions: {
                tabBarLabel: t('navigation.harbours_tab_labels.map'),
                tabBarIcon: ({tintColor}) => <Feather name="map" size={24} color={tintColor} />
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Colours.dark,
            inactiveTintColor: Colours.disabled,
            style: {
                height: 55,
                paddingBottom: 5,
                paddingTop: 4
            }
        }
    }
);

export default HarbourTabNavigation;