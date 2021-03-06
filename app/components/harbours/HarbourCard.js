import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';

import NoPictureView from '../common/NoPictureView';
import { LocalizedStrings as t } from '../../translations/Translations';
import Colours from '../../constants/colours';

const HarbourCard = props => {

    return (
        <TouchableOpacity 
            style={{...styles.card, ...props.style }} 
            activeOpacity={0.8}
            onPress={() => props.onPress(props.harbour.ID)} >
            <View style={styles.cardContent}>
                { props.harbour.Picture == null ?
                    <NoPictureView style={styles.picture} /> :
                    <Image 
                        style={styles.picture} 
                        source={{uri: props.harbour.Picture}}/>
                }
                <View style={styles.harbourData}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{ props.harbour.Name }</Text>
                        <View style={styles.location}>
                            <SimpleLineIcons name="location-pin" size={16} color={Colours.dark} />
                            <Text style={styles.locationText}>{ props.harbour.City }, { props.harbour.Country }</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Rating
                                type='custom'
                                startingValue={props.harbour.Rating}
                                imageSize={20}
                                fractions={1}
                                minValue={1}
                                readonly={true}
                                style={{ paddingVertical: 10, color: Colours.background }}
                            />
                            <Text style={styles.ratingText}>({props.harbour.Rating})</Text>
                        </View>
                    </View>
                    <View style={styles.availContainer}>
                        <Text style={styles.availText}>{t('harbour_card.available')}: { props.harbour.BerthsQuantity - props.harbour.UnavailableBerths }</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 135,
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

    picture: {
        marginRight: 10,
        height: 115,
        width: 115
    }, 

    noPictureText: {
        color: "#828282",
    },

    harbourData: {
        flexGrow: 1,
        
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

    ratingContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    ratingText: {
        paddingHorizontal: 5,
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