import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NavigationEvents } from 'react-navigation'

import HarbourCard from '../../../components/harbours/HarbourCard';
import NavigationHeader from '../../../components/common/NavigationHeader';
import * as harboursActions from '../../../store/actions/harbours';
import Colours from '../../../constants/colours';

const HarboursScreen = props => {
    const [isFocused, setIsFocused] = useState(true);
    
    const harbours = useSelector(state => state.harbours.harbours);

    const dispatch = useDispatch();

    const renderHarbourCard = (item) => {
        return (
            <HarbourCard 
                harbour={item.item} 
                onPress={onHarbourPressed}
            />
        );
    };

    const onHarbourPressed = (id) => {
        dispatch(harboursActions.setSelectedHarbour(id));
        props.navigation.navigate('HarbourDetails');
    }

    useEffect(() => {
        if (isFocused == true) {
            dispatch(harboursActions.getAllHarbours());
        }
    }, [dispatch, isFocused]);

    return (
        <SafeAreaView style={styles.container}>
            <NavigationEvents 
                onWillFocus={() => setIsFocused(true)}
                onWillBlur={() => setIsFocused(false)}
            />
            <NavigationHeader type="drawer" navigation={props.navigation} />
            <FlatList 
                style={styles.harbourList} 
                data={harbours}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={(item) => renderHarbourCard(item)}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: getStatusBarHeight(),
        backgroundColor: Colours.background 
    },

    harbourList: {
        flex: 1,
        flexGrow: 1,
        width: "90%",
    }
});

export default HarboursScreen;