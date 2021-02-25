import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ReservationsTabNavigation from './ReservationsTabNavigation';
import ReservationDetailsScreen from '../screens/user/reservations/ReservationDetailsScreen';

const UserReservationsNavigation = createStackNavigator(
    {
        Reservations: ReservationsTabNavigation,
        ReservationDetails: ReservationDetailsScreen
    },
    {
        headerMode: 'none'
    }
);

export default UserReservationsNavigation;