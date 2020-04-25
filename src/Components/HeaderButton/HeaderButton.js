import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import { inject, observer } from "mobx-react";
import Modal from 'react-native-modal';
import { FlatList } from 'react-native-gesture-handler';

@inject('AppStore')
@observer
export default class HeaderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }

    render() {
        const {AppStore} = this.props;
        return (
            <View>
                <CustomButton onPress={() => AppStore.getFavourites.length > 0 && this.setState({openModal: !this.state.openModal})} iconSize={20} iconBadge={AppStore.getFavourites.length < 1 ? (null):(AppStore.getFavourites.length)} iconSolid icon='star' iconColor='black' />
                <Modal isVisible={this.state.openModal}>
                    <View style={{backgroundColor: 'white'}}>
                        <CustomButton style={{position: 'absolute', top: 0, right: 0, zIndex: 999}} onPress={() => this.setState({openModal: !this.state.openModal})} icon='times' iconSize={20} iconColor='black' />
                        <FlatList 
                            keyExtractor={(item, index) => index.toString()}
                            data={AppStore.getFavourites}
                            renderItem={({item, index}) => (
                                <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                                    <Image 
                                        style={{width: 30, height: 50}}
                                        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster}`}}
                                    />
                                    <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 10}}>{item.title}</Text>
                                </View>
                            )}
                        />
                    </View>
                </Modal>
            </View>
        )
    }
}