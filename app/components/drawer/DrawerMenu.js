import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, TouchableHighlight, Text, Modal, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';
import { Feather } from '@expo/vector-icons';

import { LocalizedStrings as t } from '../../translations/Translations';
import Dialog from '../../components/common/Dialog';
import * as authActions from '../../store/actions/auth';
import Colours from '../../constants/colours';

const DrawerMenu = props => {
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();

    const onLogoutPressed = () => {
        setModalVisible(true);
    }

    const onLogoutConfirmed = () => {
        dispatch(authActions.logout());
        setModalVisible(false);
        props.navigation.navigate('Auth');
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
            </SafeAreaView>
            <TouchableOpacity onPress={onLogoutPressed}>
                <View style={styles.item}>
                    <View style={styles.iconContainer}>
                        <Feather name="log-out" size={24} color={Colours.error} />
                    </View>
                    <Text style={styles.label}>{t('navigation.drawer_labels.logout')}</Text>
                </View>
            </TouchableOpacity>
            
            <Dialog
                label={t('dialog.logout')}
                modalVisible={modalVisible}
                buttonNumber={2}
                buttonText={t('dialog.buttons.confirm_logout')}
                buttonStyle={styles.buttonOK}
                onButtonPressed={onLogoutConfirmed}
                button2Text={t('dialog.buttons.cancel')}
                button2Style={styles.buttonCancel}
                onButton2Pressed={() => setModalVisible(false)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,  
        flexDirection: 'column', 
        justifyContent: 'space-between' 
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    label: {
        margin: 16,
        fontWeight: 'bold',
        color: Colours.error,
    },

    iconContainer: {
        marginHorizontal: 16,
        width: 24,
        alignItems: 'center',
    },

    icon: {
        width: 24,
        height: 24,
    },

    buttonOK: {
        backgroundColor: Colours.error
    },

    buttonCancel: {
        backgroundColor: Colours.disabled
    }
});

export default DrawerMenu;