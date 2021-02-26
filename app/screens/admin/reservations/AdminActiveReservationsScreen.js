import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationEvents } from 'react-navigation';

import NavigationHeader from '../../../components/common/NavigationHeader';
import AdminReservationCard from '../../../components/reservations/AdminReservationCard';
import * as adminReservationsActions from '../../../store/actions/adminReservations';
import { LocalizedStrings as t } from '../../../translations/Translations';
import Colours from '../../../constants/colours';

const AdminActiveReservationsScreen = props => {
    const [isFocused, setIsFocused] = useState(true);

    const activeReservations = useSelector(state => state.adminReservations.activeReservations);

    const dispatch = useDispatch();

    const onReservationSelected = (id, status) => {
        dispatch(adminReservationsActions.setSelectedReservation(id, status));
        props.navigation.navigate('AdminReservationDetails');
    };

    const renderReservationCard = item => {
        return (
            <AdminReservationCard
                reservation={item.item}
                onPress={onReservationSelected}
            />
        );
    };

    useEffect(() => {
        if (isFocused == true) {
            dispatch(adminReservationsActions.getReservationsForAdmin());
        }
    }, [dispatch, isFocused]);

    if (activeReservations.length == 0) {
        return (
            <View style={styles.container}>
                <NavigationEvents 
                    onWillFocus={() => setIsFocused(true)}
                    onWillBlur={() => setIsFocused(false)}
                />
                <NavigationHeader type="drawer" navigation={props.navigation} />
                <View style={styles.noContent}>
                    <View style={styles.noContentCard}>
                        <Text style={styles.noContentText}>{t('reservation_history.no_active_reservation')}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={() => setIsFocused(true)}
                onWillBlur={() => setIsFocused(false)}
            />
            <NavigationHeader type="drawer" navigation={props.navigation} />
            <FlatList 
                style={styles.reservationList} 
                data={activeReservations}
                keyExtractor={(item) => item.ReservationID.toString()}
                renderItem={(item) => renderReservationCard(item)}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colours.background
    },

    noContent: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    noContentCard: {
        width: "90%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: Colours.white,
        borderWidth: 3,
        borderColor: Colours.dark,
        borderRadius: 10,
        elevation: 6
    },

    noContentText: {
        fontSize: 20,
        color: Colours.dark
    },

    reservationList: {
        flex: 1,
        flexGrow: 1,
        width: "90%",
    }
});

export default AdminActiveReservationsScreen;