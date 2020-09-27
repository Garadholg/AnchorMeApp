import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const FloatingLabelInput = props => {
    const [isFocused, setIsFocused] = useState(false);

    const labelStyle = {
        top: !isFocused && props.value == '' ? 15 : 3,
        fontSize: !isFocused && props.value == '' ? 20 : 14,
        color: !isFocused && props.value == '' ? '#aaa' : '#000',
    };

    const onFocusHandler = () => {
        setIsFocused(true);
    }

    const onBlurHandler = () => {
        setIsFocused(false);
    }

    return (
        <View style={{ ...styles.component, ...props.style }}>
            <Text style={{ ...styles.label, ...labelStyle, ...props.labelStyle }}>
                {props.label}
            </Text>
            <TextInput
                { ...props }
                textContentType={props.type}
                style={{ ...styles.input, ...props.inputStyle }}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    component: {
        paddingHorizontal: 12,
        paddingTop: 24,
        paddingBottom: 5,
        marginTop: 7,
        marginBottom: 7,
        width: "100%",
        borderWidth: 1,
        borderRadius: 7
    },

    label: {
        position: 'absolute',
        left: 12,
    },

    input: { 
        height: 26, 
        fontSize: 20, 
        color: '#000',
    }

});


export default FloatingLabelInput;