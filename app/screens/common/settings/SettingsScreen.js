import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colours from '../../../constants/colours';

const SettingsScreen = props => {

    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colours.background 
    }
});

export default SettingsScreen;