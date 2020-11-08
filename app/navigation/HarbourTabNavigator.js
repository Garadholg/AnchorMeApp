import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather } from '@expo/vector-icons';

import { LocalizedStrings as t } from '../translations/Translations';
import HarboursListScreen from '../screens/home/HarboursListScreen';
import MapScreen from '../screens/home/MapScreen';
import Colours from '../constants/colours';

const HarbourTabNavigator = createBottomTabNavigator(
    {
        HarbourList: {
            screen: HarboursListScreen,
            navigationOptions: {
                tabBarLabel: t('navigation.tab_labels.list'),
                tabBarIcon: ({tintColor}) => <Feather name="anchor" size={24} color={tintColor} />
            }
        },
        Map: {
            screen: MapScreen,
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