import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import HarbourCard from '../../components/harbours/HarbourCard';
import * as harboursActions from '../../store/actions/harbours';
import Colours from '../../constants/colours';

const renderHarbourCard = (item) => {
    return (
        <HarbourCard harbour={item.item} />
    );
};

const HarboursScreen = props => {
    
    const harbours = useSelector(state => state.harbours.harbours);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(harboursActions.getAllHarbours());
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.scrollView} 
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
        backgroundColor: Colours.background 
    },

    scrollView: {
        flex: 1,
        flexGrow: 1,
        width: "90%",
        marginTop: 50,
    }
});

export default HarboursScreen;