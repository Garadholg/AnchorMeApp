import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";

import AuthNavigator from './AuthNavigation';
import UserDrawerNavigator from './UserDrawerNavigation';
import AdminDrawerNavigator from './AdminDrawerNavigation';
import SplashScreen from '../screens/common/splash/SplashScreen';

const mainNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen, 
        UserHome: UserDrawerNavigator,
        AdminHome: AdminDrawerNavigator,
        Auth: AuthNavigator,
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(mainNavigator);