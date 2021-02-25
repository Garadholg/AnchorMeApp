import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as authActions from '../../../store/actions/auth';

const SplashScreen = props => {

    const dispatch = useDispatch();

    const checklogin = async () => {
        try {
            await AsyncStorage.getItem('@login')
                .then(async (data) => {
                    if (data == null) {
                        props.navigation.navigate('Auth');
                    } else {
                        creds = JSON.parse(data);
                        await dispatch(authActions.login(creds))
                        .then((resp) => {
                            if (resp.successful) {
                                if (resp.role == "user") {
                                    props.navigation.navigate('UserHome');
                                }
                
                                if (resp.role == "admin") {
                                    props.navigation.navigate('AdminHome');
                                }
                            }
                        })
                    }
                });
        } catch(e) {
            // error reading value
        }
    }

    checklogin();

    return (
        <View></View>
    );
};

export default SplashScreen;