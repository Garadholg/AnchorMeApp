import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import AdminReservationManagementNavigator from './AdminReservationManagementNavigation';
import AdminReservationDetailsScreen from '../screens/admin/reservations/AdminReservationDetailsScreen';

const AdminReservationsNavigator = createStackNavigator(
    {
        AdminReservations: AdminReservationManagementNavigator,
        AdminReservationDetails: AdminReservationDetailsScreen
    },
    {
        headerMode: 'none'
    }
);

export default AdminReservationsNavigator;