import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import NavigationHeader from '../../../components/common/NavigationHeader';
import ReservationCard from '../../../components/reservations/ReservationCard';
import * as reservationsActions from '../../../store/actions/reservations';
import Colours from '../../../constants/colours';

const ActiveReservationsScreen = props => {

    const userID = useSelector(state => state.auth.user.ID);
    const activeReservations = useSelector(state => state.reservations.activeReservations);

    const dispatch = useDispatch();

    const renderReservationCard = item => {
        return (
            <ReservationCard
                reservation={item.item}
                onPress={() => props.navigation.navigate('ReservationDetails')}
            />
        );
    };

    useEffect(() => {
        dispatch(reservationsActions.getReservationsForUser(userID));
    }, [dispatch]);

    if (activeReservations.length == 0) {
        return (
            <View style={styles.container}>
                <View style={styles.noContent}>
                    <View style={styles.noContentCard}>
                        <Text style={styles.noContentText}>Trenutno nemate aktivnih rezervacija</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
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

export default ActiveReservationsScreen;