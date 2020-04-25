import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomButton(props) {

  return (
    <TouchableHighlight style={[props.style, styles.button, {backgroundColor: props.color || 'transparent'}]} onPress={() => props.onPress()}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.icon && <Icon style={{padding: 5}} name={props.icon} size={30} color={props.textColor || props.iconColor || 'white'} />}
        {props.title && <Text style={[styles.text, {color: props.textColor || 'black'}]}>{props.title}</Text>}
      </View>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        margin: 5,
        paddingVertical: 5,
        paddingHorizontal: 8
    },
    text: {
      fontWeight: 'bold',
    },
});
