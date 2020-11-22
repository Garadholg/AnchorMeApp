import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

import { LocalizedStrings as t } from '../../translations/Translations';
import Colours from '../../constants/colours';

const HarbourCard = props => {

    return (
        <TouchableOpacity style={{...styles.card, ...props.style }} activeOpacity={0.8}>
            <View style={styles.cardContent}>
                <View style={styles.pictureContainer}>
                    <Feather name="camera-off" size={24} color="#828282" />
                    <Text style={styles.noPictureText}>{t('harbour_card.no_picture')}</Text>
                </View>
                <View style={styles.harbourData}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>Ime luke</Text>
                        <View style={styles.location}>
                            <SimpleLineIcons name="location-pin" size={16} color={Colours.dark} />
                            <Text style={styles.locationText}>Grad, Drzava</Text>
                        </View>
                    </View>
                    <View style={styles.availContainer}>
                        <Text style={styles.availText}>Availabile: 38</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 120,
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 10,
        backgroundColor: Colours.white,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 7,
        elevation: 5,
    },

    cardContent: {
        flexDirection: "row",
    },

    pictureContainer: {
        height: 100,
        width: 100,
        alignItems:"center",
        justifyContent: "center",
        marginRight: 10,
        backgroundColor: Colours.disabled
    },

    noPictureText: {
        color: "#828282",
    },

    harbourData: {
        flexGrow: 1
    },

    infoContainer: {
        flexGrow: 1
    },

    name: {
        fontSize: 20,
        marginBottom: 4,
        fontWeight: "700",
        color: Colours.dark
    },

    location: {
        flexDirection: "row",
        alignItems: "center"
    },

    locationText: {
        color: Colours.dark
    },

    availContainer: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },

    availText: {
        fontSize: 15,
        color: Colours.success
    }
});

export default HarbourCard;