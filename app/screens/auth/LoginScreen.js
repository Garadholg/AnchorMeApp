import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';

import { LocalizedStrings as t } from '../../translations/Translations';
import { loginValidation } from '../../utils/validation';
import FloatingLabelInput from '../../components/common/FloatingLabelInput';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';
import SubmitButton from '../../components/common/SubmitButton';
import Colours from '../../constants/colours';

import * as authActions from '../../store/actions/auth';

const LoginScreen = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const onLoginPressed = async () => {
        setError();
        setIsLoading(true);

        if (!loginValidation(username, password)) {
            setError(t('errors.username_password_empty'));
            return;
        }

        let data = {
            username: username,
            password: password
        };

        await dispatch(authActions.login(data))
        .then((successful) => {
            if (successful) {
                props.navigation.navigate('Home');
            }
        })
        .catch((error) => {
            setError(t('errors.' + error))
        });

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

                {error && <Text style={styles.error}>{error}</Text>}

                <SubmitButton 
                    text={t('authentication.login_button')}
                    style={styles.button}
                    onPress={onLoginPressed}
                />

                {/* <View>
                    <DropDownPicker
                        items ={[
                            {label: t('languages.croatian'), value: 'hr'},
                            {label: t('languages.english'), value: 'en'}
                        ]}
                        defaultValue={selectedLanguage}
                        containerStyle={{height: 40, width: '80%'}}
                        style={{backgroundColor: '#fafafa', }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => setSelectedLanguage(item)}
                    />
                </View> */}
            </View>
        </DismissKeyboardView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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

    error: {
        color: Colours.error,
        fontSize: 16,
    },

    button: {
        width: "80%",
        marginTop: 16
    }
});

export default LoginScreen;