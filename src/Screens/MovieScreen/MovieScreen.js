import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { inject, observer } from "mobx-react";
import { window_width, window_height } from '../../utils/Style';

@inject('AppStore')
@observer
export default class MovieScreen extends Component {
    constructor(props) {
        super(props);
    }

    onFavPress() {
        const {AppStore, navigation} = this.props;
        const movieData = navigation.getParam('data');
        if(AppStore.isFavourite(movieData.id)) {
            AppStore.removeFromFavourite(movieData);
        } else AppStore.addToFavourite(movieData);
        
    }

    render() {
        const movieData = this.props.navigation.getParam('data');
        return (
            <View style={{alignItems: 'center'}}>
                <Image 
                    style={{width: window_width*0.7, height: window_height*0.5}}
                    source={{uri: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`}}
                />
                <View style={{padding: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 30}}>{movieData.title}</Text>
                        <CustomButton onPress={() => this.onFavPress()} iconSolid={!!this.props.AppStore.isFavourite(movieData.id)} icon='star' iconColor='black' />
                    </View>
                    <Text>{movieData.overview}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', padding: 10}}>
                        <Text style={{fontSize: 20}}>{movieData.vote_average}/10</Text>
                        <Icon style={{padding: 5}} name='smile' size={20} color='black' />
                    </View>
                </View>
            </View>
        )
    }
}