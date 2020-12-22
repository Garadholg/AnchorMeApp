import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HarboursListScreen from '../screens/harbours/HarboursListScreen';
import HarbourDetailsScreen from '../screens/harbours/HarbourDetailsScreen';
import HarbourReservationScreen from '../screens/harbours/HarbourReservationScreen';
import HarbourReservationConfirmationScreen from '../screens/harbours/HarbourReservationConfirmationScreen';

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