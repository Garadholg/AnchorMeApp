import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";

import AuthNavigator from './AuthNavigation';
import DrawerNavigator from './DrawerNavigation';

const mainNavigator = createSwitchNavigator(
    {
        Home: DrawerNavigator,
        Auth: AuthNavigator,
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(mainNavigator);