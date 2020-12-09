import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { LocalizedStrings as t } from '../../translations/Translations';
import { loginValidation } from '../../utils/validation';
import FloatingLabelInput from '../../components/common/FloatingLabelInput';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';
import Button from '../../components/common/Button';
import Colours from '../../constants/colours';

import * as authActions from '../../store/actions/auth';

const LoginScreen = props => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [toRemember, setToRemember] = useState(false);
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const onLoginPressed = async () => {
        setError();

        if (!loginValidation(username, password)) {
            setError(t('errors.username_password_empty'));
            return;
        }

        let data = {
            username: username,
            password: password
        };

        await dispatch(authActions.login(data))
        .then(async (successful) => {
            if (successful) {
                if (toRemember) {
                    await saveLoginToStorage(data);
                }

                props.navigation.navigate('Home');
            }
        })
        .catch((error) => {
            setError(t('errors.' + error))
        });

    }

    const saveLoginToStorage = async (data) => {
        try {
          const jsonData = JSON.stringify(data);
          await AsyncStorage.setItem('@login', jsonData);
        } catch (error) {
          // saving error
        }
    }

    return (
        <DismissKeyboardView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/anchor-logo.png')}
                    resizeMode="contain"
                />
                <FloatingLabelInput
                    label={t('authentication.username')}
                    style={styles.input}
                    value={username}
                    onChangeText={(value) => {setUsername(value)}}
                />
                <FloatingLabelInput
                    label={t('authentication.password')}
                    style={styles.input}
                    value={password}
                    onChangeText={(value) => {setPassword(value)}}
                    secureTextEntry
                />

                <View style={styles.rememberMe}>
                    <CheckBox
                        value={toRemember}
                        onValueChange={(newValue) => setToRemember(newValue)} 
                        tintColors={{ true: Colours.dark }}
                    />
                    <Text style={styles.text}>{ t('authentication.remember_me') }</Text>
                </View>

                {error && <Text style={styles.error}>{error}</Text>}

                <Button 
                    text={t('authentication.login_button')}
                    style={styles.button}
                    onPress={onLoginPressed}
                />
            </View>
        </DismissKeyboardView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: getStatusBarHeight(),
        backgroundColor: Colours.background
    },

    input: {
        width: "80%",
        backgroundColor: "#fff",
        borderColor: Colours.dark
    },

    logo: {
        width: "50%",
        height: 300
    },

    rememberMe: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%"
    },

    text: {
        fontSize: 16
    },

    error: {
        color: Colours.error,
        fontSize: 16,
        marginTop: 5,
    },

    button: {
        width: "80%",
        marginTop: 16
    }
});

export default LoginScreen;