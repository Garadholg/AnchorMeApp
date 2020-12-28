import React from 'react';
import { useSelector } from 'react-redux';

import UserProfileScreen from '../../user/profile/UserProfileScreen';
import AdminProfileScreen from '../../admin/profile/AdminProfileScreen';

const ProfileScreen = props => {
    const user = useSelector(state => state.auth.user);

    const Screen = user.Role == 1 ? <AdminProfileScreen navigation={props.navigation} /> : <UserProfileScreen navigation={props.navigation} />;

    return (
        Screen
    );
};

export default ProfileScreen;