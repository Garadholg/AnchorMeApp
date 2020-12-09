import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { LocalizedStrings as t } from '../../translations/Translations';
import Colours from '../../constants/colours';

const DatePicker = props => {
    const [datePickerVisible, setDatePickerVisible] = useState(false); 

    const onDateChanged = (event, date) => {
        setDatePickerVisible(false);
        props.onChange(date);
    }

    return (
        <View style={{ ...styles.component, ...props.style }}>
            {props.label &&
                <Text style={styles.label}>{props.label}:</Text>
            }
            <TouchableWithoutFeedback onPress={() => setDatePickerVisible(true)}>
                <View style={styles.datepicker}>
                    <MaterialCommunityIcons name="calendar-month" size={26} color={Colours.dark} />
                    <Text style={styles.date}>{moment(props.date).format(t('date_format'))}</Text>
                    <FontAwesome name="caret-down" size={24} color={Colours.dark} />
                </View>
            </TouchableWithoutFeedback>

            {datePickerVisible && 
                <DateTimePicker
                    value={props.date}
                    mode='date'
                    onChange={onDateChanged}
                    minimumDate={props.minDate}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        flex: 1
    },

    label: { 
        fontSize: 19, 
        fontWeight: "700",
        color: Colours.dark 
    },

    datepicker: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: Colours.white,
        borderColor: Colours.dark,
        borderWidth: 1,
        borderRadius: 8
    },

    date: {
        flex: 1,
        paddingHorizontal: 5,
        color: Colours.dark,
        fontSize: 20
    }
});

export default DatePicker;