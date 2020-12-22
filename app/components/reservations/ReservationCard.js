import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import moment from 'moment';

import { LocalizedStrings as t } from '../../translations/Translations';
import Colours from '../../constants/colours';

const ReservationCard = props => {

    const bindStatusColor = () => {
        let color = { color: Colours.active };

        if (props.reservation.Status == "Pending") {
            color.color = Colours.pending;
        }

        if (props.reservation.Status == "Declined" || props.reservation.Status == "Cancelled") {
            color.color = Colours.declined;
        }

        return color;
    }
    const statusColor = bindStatusColor();

    return (
        <View style={styles.card}>
            <Text style={styles.name}>{props.reservation.HarbourName}</Text>
            <View style={styles.location}>
                <SimpleLineIcons name="location-pin" size={16} color={Colours.dark} />
                <Text style={styles.locationText}>{ props.reservation.HarbourLocation }</Text>
            </View>
            <Text style={styles.dates}>{moment(props.reservation.StartDate).format(t('date_format'))} - {moment(props.reservation.EndtDate).format(t('date_format'))}</Text>
            <View style={styles.statusContainer}>
                <Text style={styles.statusLabel}>Status: </Text>
                <Text style={{ ...styles.statusText, ...statusColor }}>{props.reservation.Status}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 140,
        marginVertical: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: Colours.white,
        borderRadius: 10,
        elevation: 5
    },

    name: {
        color: Colours.dark,
        fontSize: 20
    },

    location: {
        flexDirection: "row",
        alignItems: "center"
    },

    locationText: {
        color: Colours.dark,
        fontSize: 16
    },

    dates: {
        marginVertical: 10,
        color: Colours.dark,
        fontSize: 20
    },

    statusContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    statusLabel: {
        color: Colours.dark,
        fontSize: 18
    },

    statusText: {
        fontSize: 18
    }
});

export default ReservationCard;