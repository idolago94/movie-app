import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';

export default class Main extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, padding: 20}}>Welcome Stranger!</Text>
                    <Image 
                        style={{borderRadius: 999, height: 200, aspectRatio: 1}}
                        source={require('../../assets/non-profile.png')} 
                    />
                    <Text style={{padding: 20}}>Please log in to explore more movies</Text>
                </View>
                <View style={{position: 'absolute', bottom: 10, flexDirection: 'row'}}>
                    <CustomButton icon="facebook" title={'Login with Facebook'} color={'blue'} />
                    <CustomButton icon="google" title={'Or with Google'} color={'red'} />
                </View>
            </View>
        )
    }
}