import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from '../screens/common/auth/LoginScreen';

const AuthNavigator = createStackNavigator(
    {
        Login: LoginScreen
    },
    {
        headerMode: "none"
    }
);

export default AuthNavigator;