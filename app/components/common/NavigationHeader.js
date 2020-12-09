import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

import Colours from '../../constants/colours';

const NavigationHeader = props => {

  var actionIcon = () => {
    if (props.type == 'drawer') {
      return (
        <Feather name="menu" size={30} color={Colours.dark} />
      );
    } else if (props.type == 'return') {
      return (
        <Feather name="arrow-left" size={30} color={Colours.dark} />
      );
    }
  }

  var onActionPress = () => {
    if (props.type == 'drawer') {
      props.navigation.openDrawer()
    } else if (props.type == 'return') {
      props.navigation.pop();
    }
  }

  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={onActionPress}>
        {actionIcon()}
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create ({
    header: {
        width: "100%",
        paddingVertical: 10,
        paddingLeft: 24
    }
});

export default NavigationHeader;