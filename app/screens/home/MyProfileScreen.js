import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colours from '../../constants/colours';

const MyProfileScreen = props => {

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
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

export default MyProfileScreen;