import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { LocalizedStrings as t } from '../../translations/Translations';

const NoPictureView = props => {

    iconSize = props.iconSize ? props.iconSize : 24;

    return (
        <View style={{ ...styles.pictureContainer, ...props.style }}>
            <Feather name="camera-off" size={iconSize} color="#828282" />
            <Text style={{ ...styles.noPictureText, ...props.textStyle }}>{t('harbour_card.no_picture')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    pictureContainer: {
        height: 100,
        width: 100,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: Colours.disabled
    },

    noPictureText: {
        color: "#828282",
    },
});

export default NoPictureView;