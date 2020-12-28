import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HarboursListScreen from '../screens/user/harbours/HarboursListScreen';
import HarbourDetailsScreen from '../screens/user/harbours/HarbourDetailsScreen';
import HarbourReservationScreen from '../screens/user/harbours/HarbourReservationScreen';
import HarbourReservationConfirmationScreen from '../screens/user/harbours/HarbourReservationConfirmationScreen';

const HarbourCardNavigation = createStackNavigator(
    {
        HarboursList: HarboursListScreen,
        HarbourDetails: HarbourDetailsScreen,
        HarbourReservation: HarbourReservationScreen,
        ReservationConfirmation: HarbourReservationConfirmationScreen
    },
    {
        headerMode: 'none'
    }
);

export default HarbourCardNavigation;