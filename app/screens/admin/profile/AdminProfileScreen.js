import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';
import { SimpleLineIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';

import NoPictureView from '../../../components/common/NoPictureView';
import NavigationHeader from '../../../components/common/NavigationHeader';
import Button from '../../../components/common/Button';
import { LocalizedStrings as t } from '../../../translations/Translations';
import Colours from '../../../constants/colours';

const AdminProfileScreen = props => { 
    const harbour = useSelector(state => state.auth.user.AdminHarbour);

    const [availQty, setAvailQty] = useState(harbour.BerthsQuantity - harbour.UnavailableBerths);
    
    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader type="drawer" navigation={props.navigation} />
            <ScrollView>
                <View style={styles.content}>
                    { harbour.Picture == null ?
                        <NoPictureView 
                            style={styles.picture}
                            iconSize={48}
                            textStyle={styles.npvText}
                        /> :
                        <Image 
                            style={styles.picture} 
                            source={{uri: harbour.Picture}}/>
                    }
                    <View style={styles.harbourInfo}>
                        <View style={{ ...styles.cardContainer, ...styles.mainDataContainer }}>
                            <Text style={styles.harbourNameText} >{harbour.Name}</Text>
                            <View style={styles.horizontalRow}>
                                <SimpleLineIcons name="location-pin" size={18} color={Colours.dark} />
                                <Text style={styles.locationText}>{harbour.City}, {harbour.Country}</Text>
                            </View>
                            <View style={styles.horizontalRow}>
                                <Rating
                                    type='custom'
                                    startingValue={harbour.Rating}
                                    imageSize={23}
                                    fractions={1}
                                    minValue={1}
                                    readonly={true}
                                    style={styles.rating}
                                />
                                <Text style={styles.ratingText}>({harbour.Rating})</Text>
                            </View>
                            <View style={styles.contacts}>
                                <MaterialCommunityIcons name="message" size={28} color={Colours.dark} style={styles.contactIcon} />

                                {harbour.PhoneNumber != null &&
                                    <FontAwesome5 name="phone" size={28} color={Colours.dark} style={styles.contactIcon} />
                                }

                                {harbour.Email != null &&
                                    <MaterialCommunityIcons name="email" size={28} color={Colours.dark} style={styles.contactIcon} />
                                }
                            </View>
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>{t('harbour_details.details')}:</Text>
                        </View>
                        <View style={{ ...styles.cardContainer, ...styles.mainDataContainer, marginTop: 4 }}>
                            <Text style={styles.text}>
                                {harbour.Details}
                            </Text>
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>{t('harbour_details.available')}:</Text>
                        </View>
                        <View style={{ ...styles.cardContainer, ...styles.mainDataContainer, marginTop: 4 }}>
                            
                            <Text style={styles.text}>
                                {availQty}
                            </Text>
                        </View>
                        <Button 
                            text={t('harbour_admin.save_changes')}
                            onPress={() => {}}
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

    picture: {
        width: "100%",
        height: 400
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

    horizontalRow: {
        flexDirection: "row",
        alignItems: "center"
    },

    locationText: {
        fontSize: 17,
        color: Colours.dark
    },

    rating: { 
        paddingVertical: 10, 
        color: Colours.background 
    },

    ratingText: {
        paddingHorizontal: 5,
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

export default AdminProfileScreen;