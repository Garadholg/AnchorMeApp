import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";

import AuthNavigator from './AuthNavigation';
import DrawerNavigator from './DrawerNavigation';
import SplashScreen from '../screens/common/splash/SplashScreen';

const mainNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen, 
        Home: DrawerNavigator,
        Auth: AuthNavigator,
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(mainNavigator);