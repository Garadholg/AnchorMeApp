import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const SubmitButton = props => {
    return (
        <TouchableOpacity 
            style={{ ...styles.button, ...props.style }}
            activeOpacity={0.5} >
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
        backgroundColor: Colors.dark,
        borderRadius: 7
    },

    text: {
        color: Colors.white,
        fontSize: 20
    }
});

export default SubmitButton;