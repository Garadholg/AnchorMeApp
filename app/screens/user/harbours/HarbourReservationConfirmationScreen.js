import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import moment from 'moment';

import Button from '../../../components/common/Button';
import * as reservationsActions from '../../../store/actions/reservations';
import { LocalizedStrings as t } from '../../../translations/Translations';
import Colours from '../../../constants/colours';

const HarbourReservationConfirmationScreen = props => {

    const reservationData = props.navigation.getParam('data');
    const harbour = useSelector(state => state.harbours.selectedHarbour);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const onReservationConfirmation = () => {
        var data = {
            userID: user.ID,
            harbourID: harbour.ID,
            startDate: reservationData.startDate,
            endDate: reservationData.endDate,
            additionalNotes: reservationData.notes
        }

        dispatch(reservationsActions.createReservation(data))
            .then((successful) => {
                if (successful) {
                    props.navigation.navigate('HarboursList');
                }
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigationIcon}>
                <TouchableWithoutFeedback onPress={() => {props.navigation.pop()}}>
                    <Feather name="arrow-left" size={30} color={Colours.dark} />
                </TouchableWithoutFeedback>     
            </View>

            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{t('harbour_reservation.summary')}</Text>
                </View>

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
                                    <Text style={styles.infoText}>{moment(reservationData.startDate).format(t('date_format'))}  -  {moment(reservationData.endDate).format(t('date_format'))}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.notes')}:</Text>
                                    <Text style={styles.infoText}>{reservationData.notes == "" ? "-" : reservationData.notes}</Text>
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

                    <Button  
                        style={styles.button}
                        text={t('harbour_reservation.request_reservation')}
                        onPress={onReservationConfirmation}
                    />

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

    navigationIcon: {
        position: "absolute",
        top: 68,
        left: 30,
        zIndex: 20
    },

    content: {
        width: "80%"
    },

    titleContainer: {
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 15,
        borderBottomColor: Colours.dark,
        borderBottomWidth: 1
    },

    title: {
        fontSize: 40,
        color: Colours.dark
    },

    reservationInfoContainer: {
        marginVertical: 10
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

export default HarbourReservationConfirmationScreen;