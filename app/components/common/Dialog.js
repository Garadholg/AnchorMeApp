import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colours from '../../constants/colours';

const Dialog = props => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}>

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{props.label}</Text>

                    {(!props.buttonNumber || props.buttonNumber == 1) && 
                        <TouchableOpacity
                            style={{ ...styles.button, ...props.buttonStyle }}
                            onPress={props.onButtonPressed}>

                            <Text style={styles.textStyle}>{props.buttonText}</Text>

                        </TouchableOpacity>
                    }

                    {props.buttonNumber == 2 && 
                        <View style={styles.twoButtons}>
                            <TouchableOpacity
                                style={{ ...styles.button, ...props.buttonStyle }}
                                onPress={props.onButtonPressed}>

                                <Text style={styles.textStyle}>{props.buttonText}</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ ...styles.button, ...props.button2Style }}
                                onPress={props.onButton2Pressed}>

                                <Text style={styles.textStyle}>{props.button2Text}</Text>

                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: Colours.backgroundTransparent,
        justifyContent: "center",
        alignItems: "center",
    },

    modalView: {
        borderRadius: 10,
        maxWidth: "60%",
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

    button: {
        backgroundColor: Colours.dark,
        width: "50%",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        elevation: 2
    },

    twoButtons: {
        flexDirection: "row"
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default Dialog;