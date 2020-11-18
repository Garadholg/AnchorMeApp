import React from 'react';
import { useSelector } from 'react-redux';

import UserProfileScreen from '../profile/UserProfileScreen';
import AdminProfileScreen from '../profile/AdminProfileScreen';

const ProfileScreen = props => {
    const user = useSelector(state => state.auth.user);
    console.log(user);

    const Screen = user.Role == 1 ? <AdminProfileScreen /> : <UserProfileScreen />;

    return (
        Screen
    );
};

export default ProfileScreen;