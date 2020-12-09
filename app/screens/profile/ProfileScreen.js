import React from 'react';
import { useSelector } from 'react-redux';

import UserProfileScreen from './UserProfileScreen';
import AdminProfileScreen from './AdminProfileScreen';

const ProfileScreen = props => {
    const user = useSelector(state => state.auth.user);

    const Screen = user.Role == 1 ? <AdminProfileScreen /> : <UserProfileScreen />;

    return (
        Screen
    );
};

export default ProfileScreen;