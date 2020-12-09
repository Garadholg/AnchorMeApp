import { createStackNavigator } from 'react-navigation-stack';

import MapScreen from '../screens/harbours/MapScreen';
import HarbourDetailsScreen from '../screens/harbours/HarbourDetailsScreen';

const HarbourCalloutNavigator = createStackNavigator(
    {
        Map: MapScreen,
        HarbourDetails: HarbourDetailsScreen
    },
    {
        headerMode: 'none'
    }
);

export default HarbourCalloutNavigator;