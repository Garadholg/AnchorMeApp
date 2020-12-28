import { createStackNavigator } from 'react-navigation-stack';

import MapScreen from '../screens/user/harbours/MapScreen';
import HarbourDetailsScreen from '../screens/user/harbours/HarbourDetailsScreen';

const HarbourCalloutNavigation = createStackNavigator(
    {
        Map: MapScreen,
        HarbourDetails: HarbourDetailsScreen
    },
    {
        headerMode: 'none'
    }
);

export default HarbourCalloutNavigation;