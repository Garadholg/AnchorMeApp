import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import NavigationHeader from '../../components/common/NavigationHeader';
import DatePicker from '../../components/common/DatePicker';
import Button from '../../components/common/Button';
import { LocalizedStrings as t } from '../../translations/Translations';
import Colours from '../../constants/colours';

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var dayAfterTomorrow = new Date;
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

const HarbourReservationScreen = props => {
    const [startDate, setStartDate] = useState(tomorrow);
    const [endDate, setEndDate] = useState(dayAfterTomorrow);
    const [minEndDate, setMinEndDate] = useState(dayAfterTomorrow);
    const [details, setDetails] = useState("");

    const onStartDateChanged = (date) => {
        var selectedDate = date || startDate;
        setStartDate(selectedDate);

        var newEndDate = new Date(selectedDate);
        newEndDate.setDate(selectedDate.getDate() + 1); 
        setMinEndDate(newEndDate);

        if (selectedDate >= endDate) {
            setEndDate(newEndDate);
        }
    };

    const onEndDateChanged = (date) => {
        var selectedDate = date || startDate;
        setEndDate(selectedDate);
    };

    const onContinueButtonPressed = () => {
        props.navigation.navigate('ReservationConfirmation');
    };
    
    return (
        <View style={styles.container}>
            <NavigationHeader type="return" navigation={props.navigation} />
            <View style={styles.content}>
                <View style={styles.dateSelection}>
                    <DatePicker 
                        label={t('harbour_reservation.start_date')} 
                        style={styles.pickerStyle}
                        date={startDate}
                        minDate={tomorrow}
                        onChange={(date) => onStartDateChanged(date)}
                    />
                    <DatePicker 
                        label={t('harbour_reservation.end_date')} 
                        style={styles.pickerStyle}
                        date={endDate}
                        minDate={minEndDate}
                        onChange={(date) => onEndDateChanged(date)}
                    />
                </View>

                <View style={styles.input}>
                    <Text style={styles.label}>{t('harbour_reservation.notes')}:</Text>
                    <TextInput 
                        value={details}                       
                        style={styles.details}
                        multiline={true}
                        numberOfLines={8}
                        onChangeText={text => setDetails(text)}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button  
                        style={styles.button}
                        text={t('harbour_reservation.continue')}
                        onPress={onContinueButtonPressed}
                    />
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: getStatusBarHeight(),
        backgroundColor: Colours.background
    },

    content: {
        flex: 1,
        justifyContent: "center",
        width: "90%",
    },

    dateSelection: {
        flexDirection: "row"
    },

    pickerStyle: {
        paddingHorizontal: 4
    },

    input: {
        marginTop: 20,
        paddingHorizontal: 4
    },

    label: {
        fontSize: 19, 
        fontWeight: "700",
        color: Colours.dark
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

    buttonContainer: {
        paddingHorizontal: 4,
        marginVertical: 20
    }
});

export default HarbourReservationScreen;