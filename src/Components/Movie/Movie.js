import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import { window_height } from '../../utils/Style';

export default function Movie(props) {
    return (
        <TouchableHighlight style={{margin: 5}} onPress={() => props.onPress()}>
            <View style={{width: 300, height: 400, alignItems: 'center'}}>
                <Image 
                    style={{width: '100%', height: window_height*0.4}}
                    source={{uri: `https://image.tmdb.org/t/p/w500${props.data.poster_path}`}}
                />
                <Text style={{fontWeight: 'bold', padding: 5}}>{props.data.title}</Text>
            </View>
        </TouchableHighlight>
    )
}