import React from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

const DismissKeyboardView = props => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {props.children}
        </TouchableWithoutFeedback>
    );
};

export default DismissKeyboardView;