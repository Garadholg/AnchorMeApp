import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';
import { SimpleLineIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import NoPictureView from '../../components/common/NoPictureView';
import NavigationHeader from '../../components/common/NavigationHeader';
import Button from '../../components/common/Button';
import { LocalizedStrings as t } from '../../translations/Translations';
import Colours from '../../constants/colours';
import { color } from 'react-native-reanimated';

const HarbourDetailsScreen = props => {
    
    const selectedHarbour = useSelector(state => state.harbours.selectedHarbour);
    
    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader type="return" navigation={props.navigation} />
            <ScrollView>
                <View style={styles.content}>
                    <NoPictureView 
                        style={styles.npv} 
                        iconSize={48}
                        textStyle={styles.npvText}
                    />
                    <View style={styles.harbourInfo}>
                        <View style={{ ...styles.cardContainer, ...styles.mainDataContainer }}>
                            <Text style={styles.harbourNameText} >{selectedHarbour.Name}</Text>
                            <View style={styles.location}>
                                <SimpleLineIcons name="location-pin" size={18} color={Colours.dark} />
                                <Text style={styles.locationText}>{selectedHarbour.City}, {selectedHarbour.Country}</Text>
                            </View>
                            <View style={styles.contacts}>
                                <MaterialCommunityIcons name="message" size={28} color={Colours.dark} style={styles.contactIcon} />

                                {selectedHarbour.PhoneNumber != null &&
                                    <FontAwesome5 name="phone" size={28} color={Colours.dark} style={styles.contactIcon} />
                                }

                                {selectedHarbour.Email != null &&
                                    <MaterialCommunityIcons name="email" size={28} color={Colours.dark} style={styles.contactIcon} />
                                }
                            </View>
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>{t('harbour_details.details')}:</Text>
                        </View>
                        <View style={{ ...styles.cardContainer, ...styles.mainDataContainer, marginTop: 4 }}>
                            <Text style={styles.text}>
                                {selectedHarbour.Details}
                            </Text>
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>{t('harbour_details.available')}:</Text>
                        </View>
                        <View style={{ ...styles.cardContainer, ...styles.mainDataContainer, marginTop: 4 }}>
                            
                            <Text style={styles.text}>
                                {selectedHarbour.BerthsQuantity}
                            </Text>
                        </View>
                        <Button 
                            text={t('harbour_details.reserve')}
                            onPress={() => props.navigation.navigate('HarbourReservation')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: Colours.background,
    },

    content: {
        alignItems: "center",
        paddingBottom: 30
    },

    npv: {
        width: "100%",
        height: 300
    },

    npvText: {
        fontSize: 25
    },

    harbourInfo: {
        width: "90%",
        alignItems: "center",
    },

    cardContainer: {
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colours.white,
        borderRadius: 20,
        elevation: 4
    },

    mainDataContainer: {
        marginVertical: 20,
    },

    harbourNameText: {
        fontSize: 26,
        fontWeight: "700",
        color: Colours.dark
    },

    location: {
        flexDirection: "row",
        alignItems: "center"
    },

    locationText: {
        fontSize: 17,
        color: Colours.dark
    },

    contacts: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end"
    },

    contactIcon: {
        marginHorizontal: 9
    },

    labelContainer: { 
        width: "100%", 
        paddingLeft: 9,
        alignItems: "flex-start", 
    },

    labelText: { 
        fontSize: 19, 
        fontWeight: "700",
        color: Colours.dark 
    },

    text: { 
        fontSize: 17 
    }
});

export default HarbourDetailsScreen;