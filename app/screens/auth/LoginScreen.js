import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { LocalizationContext } from '../../translations/Translations';

import FloatingLabelInput from '../../components/common/FloatingLabelInput';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';
import SubmitButton from '../../components/common/SubmitButton';
import Colors from '../../constants/colors';

const LoginScreen = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { translations, initializeAppLanguage } = useContext(LocalizationContext);
    initializeAppLanguage();

    return (
        <DismissKeyboardView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/anchor-logo.png')}
                    resizeMode="contain"
                />
                <FloatingLabelInput
                    label={translations['authentication.username']}
                    style={styles.input}
                    value={username}
                    onChangeText={(value) => {setUsername(value)}}
                />
                <FloatingLabelInput
                    label={translations['authentication.password']}
                    style={styles.input}
                    value={password}
                    onChangeText={(value) => {setPassword(value)}}
                    secureTextEntry
                />
                <SubmitButton 
                    text="Login"
                />
            </View>
        </DismissKeyboardView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background
    },

    input: {
        width: "80%",
        backgroundColor: "#fff",
        borderColor: Colors.dark
    },

    logo: {
        width: "50%",
        height: 300
    }
});

export default LoginScreen;