import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import { window_height, window_width } from '../../utils/Style';

export default function Movie(props) {
    return (
        <TouchableHighlight style={{margin: 5}} onPress={() => props.onPress()}>
            <View style={{alignItems: 'center'}}>
                <Image 
                    style={{width: window_width*0.6, height: window_height*0.4}}
                    source={{uri: `https://image.tmdb.org/t/p/w500${props.data.poster_path}`}}
                />
                <Text style={{fontWeight: 'bold', padding: 5}}>{props.data.title}</Text>
            </View>
        </TouchableHighlight>
    )
}