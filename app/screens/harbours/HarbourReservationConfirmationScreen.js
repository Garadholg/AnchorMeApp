import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import Button from '../../components/common/Button';
import * as reservationsActions from '../../store/actions/reservations';
import { LocalizedStrings as t } from '../../translations/Translations';
import Colours from '../../constants/colours';

const HarbourReservationConfirmationScreen = props => {

    const reservationData = props.navigation.getParam('data');
    const harbour = useSelector(state => state.harbours.selectedHarbour);
    const userID = useSelector(state => state.auth.user.ID);
    const dispatch = useDispatch();

    const onReservationConfirmation = () => {
        var data = {
            userID: userID,
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
            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{t('harbour_reservation.summary')}</Text>
                </View>

                <View style={styles.harbourInfo}>
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

                <Button  
                    style={styles.button}
                    text={t('harbour_reservation.request_reservation')}
                    onPress={onReservationConfirmation}
                />
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

    harbourInfo: {
        marginVertical: 15
    },

    infoContainer: {
        marginVertical: 10
    },

    infoLabel: {
        color: Colours.dark,
        fontSize: 19,
        fontWeight: "700"
    },

    infoText: {
        color: Colours.dark,
        fontSize: 17,
    }
});

export default HarbourReservationConfirmationScreen;