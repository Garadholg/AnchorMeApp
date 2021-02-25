import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableWithoutFeedback, TextInput } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleLineIcons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';
import { NavigationEvents, ThemeContext } from 'react-navigation';

import NoPictureView from '../../../components/common/NoPictureView';
import NavigationHeader from '../../../components/common/NavigationHeader';
import Button from '../../../components/common/Button';
import * as authActions from '../../../store/actions/auth';
import { LocalizedStrings as t } from '../../../translations/Translations';
import Colours from '../../../constants/colours';

const AdminProfileScreen = props => { 
    const harbour = useSelector(state => state.auth.user.AdminHarbour);

    const [details, setDetails] = useState(harbour.Details);
    const [detailsEditing, setDetailsEditing] = useState(false);
    const [qtyChange, setQtyChange] = useState(0);

    const dispatch = useDispatch();

    const submitProfileChanges = () => {
        let data = {
            details: details,
            qtyChange: qtyChange
        }

        dispatch(authActions.updateAdminInfo(data))
            .then(() => {
                setDetailsEditing(false);
            });
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <NavigationEvents 
                onWillFocus={() => setQtyChange(0)}
            />
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
                        <View style={{ ...styles.labelContainer, ...styles.horizontalRow, justifyContent: 'space-between' }}>
                            <Text style={styles.labelText}>{t('harbour_details.details')}:</Text>
                            <TouchableWithoutFeedback onPress={() => setDetailsEditing(!detailsEditing)}>
                                <View style={styles.editBtn}>
                                    <MaterialIcons name="mode-edit" size={24} color={Colours.dark} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        {detailsEditing == false ?
                            <View style={{ ...styles.cardContainer, ...styles.mainDataContainer, marginTop: 4 }}>
                                <Text style={styles.text}>
                                    {details}
                                </Text>
                            </View> :
                            <TextInput 
                                value={details}                       
                                style={styles.details}
                                multiline={true}
                                numberOfLines={6}
                                onChangeText={text => setDetails(text)}
                            />
                        }
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>{t('harbour_details.available')}:</Text>
                        </View>
                        <View style={{ ...styles.cardContainer, ...styles.quantityContainer, marginTop: 4 }}>
                            <View style={styles.qtyOptions}>
                                <Button 
                                    text="-"
                                    style={styles.qtyChangeButton}
                                    onPress={() => setQtyChange(qtyChange - 1)}
                                />
                                <View style={styles.qtyTextView}>
                                    <Text style={styles.qtyText}>
                                        {harbour.BerthsQuantity - harbour.UnavailableBerths + qtyChange}
                                    </Text>
                                </View>
                                <Button 
                                    text="+"
                                    style={styles.qtyChangeButton}
                                    onPress={() => setQtyChange(qtyChange + 1)}
                                />
                            </View>
                        </View>
                        <Button 
                            text={t('harbour_admin.save_changes')}
                            onPress={submitProfileChanges}
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
        fontSize: 17,
        color: Colours.dark
    },

    editBtn: {
        marginRight: 7
    },

    details: {
        width: "100%",
        paddingHorizontal: 7,
        paddingVertical: 8,
        backgroundColor: Colours.white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colours.dark,
        textAlignVertical: 'top',
        fontSize: 17
    },

    quantityContainer: {
        alignItems: "center",
        marginVertical: 20,
    },

    qtyOptions: {
        flexDirection: "row"
    },

    qtyChangeButton: {
        width: 50,
    },

    qtyTextView: {
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        marginHorizontal: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colours.dark
    },

    qtyText: {
        fontSize: 17,
        color: Colours.dark
    }
});

export default AdminProfileScreen;