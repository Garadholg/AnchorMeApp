import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector } from 'react-redux';

import HarbourMapMarker from '../../components/harbours/HarbourMapMarker';
import HarbourMapCallout from '../../components/harbours/HarbourMapCallout';
import mapStyle from '../../constants/mapStyle';

const mapRegion = {
    latitude: 44.496232,
    longitude: 15.943797,
    latitudeDelta: 7.2,
    longitudeDelta: 5.6,
}

const MapScreen = props => {

    const harbours = useSelector(state => state.harbours.harbours); 

    const renderMarkers = () => {   
        return harbours.map((item) => 
            <Marker
                key={item.ID} 
                coordinate={{ latitude: item.Latitude, longitude: item.Longitude }}>
                <HarbourMapMarker />
                <Callout>
                    <HarbourMapCallout harbour={item} />
                </Callout>
            </Marker>
        );
    };

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                initialRegion={mapRegion}>

                {renderMarkers()}

            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35
    },

    map: {
        flex: 1,
        flexGrow: 1,
    },
});

export default MapScreen;