import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Badge from './Badge';

export default function CustomButton(props) {

  return (
    <TouchableHighlight style={[props.style, styles.button, {backgroundColor: props.color || 'transparent'}]} onPress={() => props.onPress()}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.icon && <View>
          {props.iconBadge && <Badge title={props.iconBadge} />}
          <Icon solid={props.iconSolid} style={{padding: 5}} name={props.icon} size={props.iconSize || 30} color={props.textColor || props.iconColor || 'white'} />
        </View>}
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
