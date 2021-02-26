import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Picker } from '@react-native-community/picker';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

import NavigationHeader from '../../../components/common/NavigationHeader';
import Button from '../../../components/common/Button';
import * as adminReservationActions from '../../../store/actions/adminReservations';
import { LocalizedStrings as t } from '../../../translations/Translations';
import Colours from '../../../constants/colours';

const mapStatusValue = status => {
    switch (status) {
        case 'Pending':
            return 1;
        case 'Accepted':
            return 2;
        case 'Active':
            return 3;
        case 'Completed':
            return 4;
        case 'Declined':
            return 5;
        case 'Cancelled':
            return 6;
    };
}

const AdminReservationDetailsScreen = props => {

    const reservation = useSelector(state => state.adminReservations.selectedReservation);
    const harbour = useSelector(state => state.auth.user.AdminHarbour);

    const [reservationStatus, setReservationStatus] = useState(mapStatusValue(reservation.Status));

    const dispatch = useDispatch();

    const submitStateChange = () => {
        const data = {
            reservationID: reservation.ReservationID,
            status: reservationStatus
        }

        dispatch(adminReservationActions.updateReservationStatus(data));
    };

    return (
        <View style={styles.container}>
            <NavigationHeader type="return" navigation={props.navigation} />

            <View style={styles.content}>
                <ScrollView>
                    <View style={styles.reservationInfoContainer}>
                        <View style={styles.infoSection}>
                            <Text style={styles.reservationTitle}>{t('harbour_reservation.info')}:</Text>
                            <View style={styles.reservationInfo}>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.harbour_name')}:</Text>
                                    <Text style={styles.infoText}>{harbour.Name}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.harbour_location')}:</Text>
                                    <Text style={styles.infoText}>{harbour.City}, {harbour.Country}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.reservation_period')}:</Text>
                                    <Text style={styles.infoText}>{moment(reservation.startDate).format(t('date_format'))}  -  {moment(reservation.endDate).format(t('date_format'))}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.notes')}:</Text>
                                    <Text style={styles.infoText}>{reservation.notes == "" ? "-" : reservation.notes}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.reservationTitle}>{t('harbour_reservation.user_info')}:</Text>
                            <View style={styles.reservationInfo}>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.user_full_name')}:</Text>
                                    <Text style={styles.infoText}>{reservation.UserFullName}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.user_contacts')}:</Text>
                                    <View style={styles.contactRow}>
                                        <MaterialCommunityIcons name="email" size={17} color={Colours.dark} style={styles.contactIcon} />
                                        <Text style={styles.infoText}>{reservation.UserEmail}</Text>
                                    </View>
                                    {reservation.UserPhone != null &&
                                        <View style={styles.contactRow}>
                                            <FontAwesome5 name="phone" size={17} color={Colours.dark} style={styles.contactIcon} />
                                            <Text style={styles.infoText}>{reservation.UserPhone}</Text>
                                        </View>
                                    }
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.reservationTitle}>{t('harbour_reservation.status_info')}:</Text>
                            <View style={styles.reservationInfo}>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        selectedValue={reservationStatus}
                                        style={styles.picker}
                                        mode='dropdown'
                                        onValueChange={(itemValue) => setReservationStatus(itemValue)}>

                                        <Picker.Item label="Pending" value="1" />
                                        <Picker.Item label="Accepted" value="2" />
                                        <Picker.Item label="Active" value="3" />
                                        <Picker.Item label="Completed" value="4" />
                                        <Picker.Item label="Declined" value="5" />
                                        <Picker.Item label="Cancelled" value="6" />

                                    </Picker>
                                </View>
                                <Button 
                                    text={t('reservation_history.change_status')}
                                    style={styles.statusButton}
                                    onPress={submitStateChange}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
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

    content: {
        width: "85%"
    },

    reservationInfoContainer: {
        marginVertical: 0
    },

    infoSection: {
        marginVertical: 10
    },

    reservationTitle: {
        paddingLeft: 15,
        fontSize: 19, 
        fontWeight: "700",
        color: Colours.dark 
    },

    reservationInfo: {
        marginTop: 5,
        paddingHorizontal: 15,
        backgroundColor: Colours.white,
        borderRadius: 20,
        elevation: 4
    },

    infoContainer: {
        marginVertical: 10
    },

    infoLabel: {
        color: Colours.dark,
        fontSize: 17,
        fontWeight: "700"
    },

    infoText: {
        color: Colours.dark,
        fontSize: 17,
    },

    contactRow: {
        flexDirection: "row",
        alignItems: "center"
    },

    contactIcon: {
        marginRight: 7
    },

    ratingContainer: {
        alignItems: "center"
    },

    stars: {
        paddingVertical: 15, 
        color: Colours.background
    },

    ratingButton: {
        width: "55%",
        marginBottom: 12
    },

    modalContainer: {
        flex: 1,
        backgroundColor: Colours.backgroundTransparent,
        justifyContent: "center",
        alignItems: "center",
    },

    modalContent: {
        borderRadius: 10,
        width: "80%",
        padding: 35,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    ratingComment: {
        width: "100%",
        marginVertical: 15,
        paddingHorizontal: 7,
        paddingVertical: 8,
        backgroundColor: Colours.white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colours.dark,
        textAlignVertical: 'top',
        fontSize: 17
    },

    ratingConfirm: {
        marginVertical: 10
    },

    ratingCancel: {
        backgroundColor: Colours.disabled
    },

    pickerContainer: {
        width: "100%",
        marginVertical: 12,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: Colours.dark
    },

    statusButton: {
        marginBottom: 12
    }
});

export default AdminReservationDetailsScreen;