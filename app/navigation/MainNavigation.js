import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AuthNavigator from './AuthNavigation';

const mainNavigator = createStackNavigator(
    {
        Auth: AuthNavigator
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(mainNavigator);