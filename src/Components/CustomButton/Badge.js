import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function Badge(props) {
    return (
        <View style={{position: 'absolute', top: 0, right: 0, backgroundColor: 'red', borderRadius: 999, zIndex: 999}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, aspectRatio: 1, textAlign: 'center'}}>{props.title}</Text>
        </View>
    )
}