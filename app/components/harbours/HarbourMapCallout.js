import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import NoPictureView from '../../components/common/NoPictureView';
import { LocalizedStrings as t } from '../../translations/Translations';

const HarbourMapCallout = props => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.content}>
                <NoPictureView 
                    style={styles.picture}
                    iconSize={18}
                    textStyle={styles.npvText} />
                <View>
                    <View style={styles.info}>
                        <Text>{ props.harbour.Name }</Text>
                        <Text>{t('harbour_card.available')}: { props.harbour.BerthsQuantity }</Text>
                    </View>
                    <View>
                        <Text>Details &gt;&gt;</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({

    content: {
        flex: 1,
        flexDirection: "row",
        width: 250,
        height: 80,
        paddingVertical: 5,
        backgroundColor: "white"
    },

    picture: {
        height: 70,
        width: 70,
        marginRight: 10
    },

    npvText: {
        fontSize: 10
    },

    info: {
        flexGrow: 1
    }
});

export default HarbourMapCallout;