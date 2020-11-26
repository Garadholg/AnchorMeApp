import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colours from '../../constants/colours';

const HarbourMapMarker = props => {

    return (
        <View style={styles.marker}>
            {/* <Text style={styles.qty}>5</Text> */}{/* Add logic for region/state display */}
            <FontAwesome name="anchor" size={28} color={Colours.dark} />
        </View>
    );
};

const styles = StyleSheet.create({
    marker: {
        justifyContent: "center",
        alignItems: "center"
    },

    qty: {
        paddingVertical: 3,
        paddingHorizontal: 7,
        marginBottom: 3,
        backgroundColor: Colours.dark,
        color: Colours.white,
        borderRadius: 20
    }
});

export default HarbourMapMarker;