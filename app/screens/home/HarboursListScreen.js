import React from 'react';
import { FlatList, View, StyleSheet, SafeAreaView } from 'react-native';

import HarbourCard from '../../components/harbours/HarbourCard';
import Colours from '../../constants/colours';

const data = [1, 2, 3, 4, 5];

const renderHarbourCard = (item) => {
    return (
        <HarbourCard />
    );
};

const HarboursScreen = props => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.scrollView} 
                data={data}
                keyExtractor={(item) => item.toString()}
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