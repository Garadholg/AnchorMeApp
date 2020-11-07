import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colours from '../../constants/colours';

const SubmitButton = props => {
    return (
        <TouchableOpacity 
            style={{ ...styles.button, ...props.style }}
            activeOpacity={0.5}
            onPress={props.onPress} >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 16,
        alignItems: "center",
        backgroundColor: Colours.dark,
        borderRadius: 7
    },

    text: {
        color: Colours.white,
        fontSize: 20
    }
});

export default SubmitButton;