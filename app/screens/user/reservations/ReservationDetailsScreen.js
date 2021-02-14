import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

import NavigationHeader from '../../../components/common/NavigationHeader';
import { LocalizedStrings as t } from '../../../translations/Translations';
import Colours from '../../../constants/colours';

const ReservationDetailsScreen = props => {

    const reservation = useSelector(state => state.reservations.selectedReservation);
    const harbour = useSelector(state => state.harbours.harbours.find(h => h.ID == reservation.HarbourID));
    const user = useSelector(state => state.auth.user);

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
                                    <Text style={styles.infoText}>{user.FirstName} {user.LastName}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.user_contacts')}:</Text>
                                    <View style={styles.contactRow}>
                                        <MaterialCommunityIcons name="email" size={17} color={Colours.dark} style={styles.contactIcon} />
                                        <Text style={styles.infoText}>{user.Email}</Text>
                                    </View>
                                    {user.Phone != null &&
                                        <View style={styles.contactRow}>
                                            <FontAwesome5 name="phone" size={17} color={Colours.dark} style={styles.contactIcon} />
                                            <Text style={styles.infoText}>{user.Phone}</Text>
                                        </View>
                                    }
                                </View>

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
    }
});

export default ReservationDetailsScreen;