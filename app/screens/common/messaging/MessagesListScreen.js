import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import NavigationHeader from '../../../components/common/NavigationHeader';
import Colours from '../../../constants/colours';

const MessagesListScreen = props => {

    return (
        <View style={styles.container}>
            <NavigationHeader type="drawer" navigation={props.navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: Colours.background
    }
});

export default MessagesListScreen;