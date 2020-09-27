import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubmitButton = props => {
    return (
        <TouchableOpacity>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

});

export default SubmitButton;