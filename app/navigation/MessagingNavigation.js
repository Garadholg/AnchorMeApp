import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import MessagesListScreen from '../screens/common/messaging/MessagesListScreen';

const MessagingNavigation = createStackNavigator(
    {
        MessagesList: MessagesListScreen
    },
    {
        headerMode: 'none'
    }
);

export default MessagingNavigation;