import React from 'react';
import { useSelector } from 'react-redux';

import UserProfileScreen from '../profile/UserProfileScreen';
import AdminProfileScreen from '../profile/AdminProfileScreen';

const ProfileScreen = props => {
    const user = useSelector(state => state.user);
    
    // HARDCODED DATA - TO BE CHANGED
    const userType = "user";

    const Screen = userType == "admin" ? <AdminProfileScreen /> : <UserProfileScreen />;

    return (
        Screen
    );
};

export default ProfileScreen;