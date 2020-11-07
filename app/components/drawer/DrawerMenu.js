import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';
import { Feather } from '@expo/vector-icons';

import { initLocalization, LocalizedStrings as t } from '../../translations/Translations';

const DrawerMenu = props => {
    //initLocalization();

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
            </SafeAreaView>
            <TouchableOpacity>
            <View style={styles.item}>
                <View style={styles.iconContainer}>
                    <Feather name="log-out" size={24} color="rgba(0, 0, 0, .87)" />
                </View>
                <Text style={styles.label}>{t('drawer_labels.logout')}</Text>
            </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,  
        flexDirection: 'column', 
        justifyContent: 'space-between' 
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
    },

    iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
    },

    icon: {
    width: 24,
    height: 24,
    }
});

export default DrawerMenu;