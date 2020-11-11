import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import Colours from '../../constants/colours';

const MyProfileScreen = props => {

    const userData = useSelector(state => state.auth.user);

    const profilePicture = require("../../assets/cat_profile_picture.jpg");
    //    userData.profilePicture == null ? require("../../assets/cat_profile_picture.jpg") : "";

    return (
        <View style={styles.container}>
                <ScrollView>
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
                </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "15%",
        paddingTop: "20%",
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
    }
});

export default MyProfileScreen;