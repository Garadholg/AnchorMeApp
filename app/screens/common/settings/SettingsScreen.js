import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Picker } from '@react-native-community/picker';

import NavigationHeader from '../../../components/common/NavigationHeader';
import { initLocalization } from '../../../translations/Translations';
import Colours from '../../../constants/colours';

const SettingsScreen = props => {

    const [lang, setLang] = useState('hr');

    useEffect(() => {
        initLocalization(lang);
    }, [lang]);

    return (
        <View style={styles.container}>
            <NavigationHeader type="drawer" navigation={props.navigation} />
            <Text style={styles.text}>Jezik aplikacije:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={lang}
                    style={styles.picker}
                    mode='dropdown'
                    onValueChange={(itemValue) => setLang(itemValue)}>

                    <Picker.Item label="Hrvatski" value="hr" />
                    <Picker.Item label="English" value="en" />

                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: getStatusBarHeight(),
        backgroundColor: Colours.background 
    },
    
    text: {
        color: Colours.dark,
        fontSize: 17,
    },

    pickerContainer: {
        width: "80%",
        marginVertical: 12,
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 7,
        borderColor: Colours.dark
    },

    picker: {
        width: "100%"
    }
});

export default SettingsScreen;