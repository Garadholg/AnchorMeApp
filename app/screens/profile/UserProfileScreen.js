import React from 'react';
import { View, Image, ScrollView, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colours from '../../constants/colours';

const UserProfileScreen = props => {

    const userData = useSelector(state => state.auth.user);

    const profilePicture = userData.ProfilePicture == null ? require("../../assets/cat_profile_picture.jpg") : { url: userData.profilePicture };

    return (
        <View style={styles.container}>
                <ScrollView>
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

                    <View style={styles.usernameContainer}>

                        <View style={styles.username}>
                            <Text style={styles.usernameText}>{userData.Username}</Text>
                            <MaterialCommunityIcons name="check-decagram" size={28} color={Colours.dark} style={styles.iconVerified} />
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
        height: 49.4,
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
    }
});

export default UserProfileScreen;