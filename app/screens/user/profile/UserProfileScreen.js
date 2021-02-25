import React from 'react';
import { View, Image, ScrollView, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Rating } from 'react-native-ratings';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import Colours from '../../../constants/colours';

const UserProfileScreen = props => {

    const userData = useSelector(state => state.auth.user);

    const profilePicture = userData.ProfilePicture == null ? require("../../../assets/cat_profile_picture.jpg") : { url: userData.profilePicture };

    return (
        <View style={styles.container}>
            <View style={styles.navigationIcon}>
                <TouchableWithoutFeedback onPress={() => {props.navigation.openDrawer()}}>
                    <Feather name="menu" size={30} color={Colours.dark} />
                </TouchableWithoutFeedback>     
            </View>

            <ScrollView>
                <View style={styles.pictureView}>
                <View>
                    <View style={styles.profileImage}>
                        <Image 
                            style={styles.image} 
                            source={ profilePicture } 
                            resizeMode="cover">
                        </Image>
                    </View>

                    <View style={styles.btnChangePicture}>
                        <Ionicons name="md-add-circle" size={60} color={Colours.dark} backgroundColor={Colours.white} />
                    </View>
                </View>
                </View>

                <View style={styles.usernameContainer}>
                    <View style={styles.username}>
                        <Text style={styles.usernameText}>{userData.Username}</Text>
                        {userData.IsVerified == true &&
                            <MaterialCommunityIcons name="check-decagram" size={28} color={Colours.dark} style={styles.iconVerified} />
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "15%",
        paddingTop: getStatusBarHeight() + 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colours.background
    },

    navigationIcon: {
        position: "absolute",
        top: 60,
        left: 30
    },

    pictureView: {
        width: "100%",
        alignItems: 'center',
    },

    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 1000,
        overflow: "hidden"
    },

    btnChangePicture: {
        position: "absolute",
        bottom: 0,
        right: 0,
        height: 49.2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colours.white,
        borderRadius: 25
    },

    usernameContainer: {
        width: "100%",
        marginTop: 15,
    },

    username: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    usernameText: {
        fontSize: 25,
        fontWeight: "600"
    },

    iconVerified: {
        marginLeft: 5
    },

    ratingContainer: {
        width: "100%",
        alignItems: 'center',
        marginVertical: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colours.white,
        borderRadius: 20,
        elevation: 4
    },

    ratingText: {
        color: Colours.dark,
        fontSize: 19
    }
});

export default UserProfileScreen;