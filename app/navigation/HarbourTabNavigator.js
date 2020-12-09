import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather } from '@expo/vector-icons';

import { LocalizedStrings as t } from '../translations/Translations';
import HarbourCardNavigator from './HarbourCardNavigator';
import HarbourCalloutNavigator from './HarbourCalloutNavigator';
import Colours from '../constants/colours';

import { initLocalization } from '../translations/Translations';
initLocalization();

const HarbourTabNavigator = createBottomTabNavigator(
    {
        HarbourList: {
            screen: HarbourCardNavigator,
            navigationOptions: {
                tabBarLabel: t('navigation.tab_labels.list'),
                tabBarIcon: ({tintColor}) => <Feather name="anchor" size={24} color={tintColor} />
            },
        },
        Map: {
            screen: HarbourCalloutNavigator,
            navigationOptions: {
                tabBarLabel: t('navigation.tab_labels.map'),
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

export default HarbourTabNavigator;