import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, TextInput } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import moment from 'moment';

import NavigationHeader from '../../../components/common/NavigationHeader';
import Button from '../../../components/common/Button';
import * as userReservationActions from '../../../store/actions/userReservations';
import { LocalizedStrings as t } from '../../../translations/Translations';
import Colours from '../../../constants/colours';

const ReservationDetailsScreen = props => {
    const [modalVisible, setModalVisible] = useState(false);
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState('');

    const reservation = useSelector(state => state.userReservations.selectedReservation);
    const harbour = useSelector(state => state.harbours.harbours.find(h => h.ID == reservation.HarbourID));
    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch();

    const submitRating = () => {
        var data = {
            reservationID: reservation.ReservationID,
            rating: rating,
            comment: comment
        }

        dispatch(userReservationActions.setRatingForReservation(data))
            .then((successful) => {
                if (successful) {
                    setModalVisible(false);
                }
            });
    }

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
                                    <Text style={styles.infoText}>{moment(reservation.StartDate).format(t('date_format'))}  -  {moment(reservation.EndDate).format(t('date_format'))}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoLabel}>{t('harbour_reservation.notes')}:</Text>
                                    <Text style={styles.infoText}>{reservation.Notes == "" || reservation.Notes == null ? "-" : reservation.notes}</Text>
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

                        {reservation.Status == "Completed" &&
                            <View style={styles.infoSection}>
                                <Text style={styles.reservationTitle}>{t('harbour_reservation.rating_info')}:</Text>
                                <View style={styles.reservationInfo}>
                                    <View style={styles.ratingContainer}>
                                        <Rating
                                            type='custom'
                                            startingValue={reservation.Rating}
                                            fractions={1}
                                            minValue={1}
                                            readonly={true}
                                            style={styles.stars}
                                        />
                                        {reservation.Rating == null &&
                                            <Button 
                                                style={styles.ratingButton}
                                                text={t('harbour_reservation.give_rating')}
                                                onPress={() => setModalVisible(true)} 
                                            />
                                        }
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                </ScrollView>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>

                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <AirbnbRating
                            defaultRating={1}
                            showRating={false}
                            onFinishRating={(rating) => setRating(rating)}
                        />
                        <TextInput 
                            value={comment}                       
                            style={styles.ratingComment}
                            multiline={true}
                            numberOfLines={8}
                            onChangeText={text => setComment(text)}
                        />

                        <Button 
                            style={styles.ratingConfirm}
                            text={t('harbour_reservation.give_rating')}
                            onPress={submitRating} 
                        />
                        <Button 
                            style={styles.ratingCancel}
                            text={t('harbour_reservation.cancel_rating')}
                            onPress={() => setModalVisible(false)} 
                        />
                    </View>
                </View>  
            </Modal>
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
    }
});

export default ReservationDetailsScreen;