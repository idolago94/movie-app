import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import ApiService from '../../Services/Api';
import { FlatList } from 'react-native-gesture-handler';
import Movie from '../../Components/Movie/Movie';
import Routes from '../../utils/Routes';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            avatar: null,
            moviesList: null
        }
    }

    initUser(token) {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture&access_token=' + token)
        .then((response) => response.json())
        .then((json) => {
            console.log('Facebook user login: ', json);
            this.setState({
                name: json.name,
                avatar: json.picture.data
            });
        })
        .catch(() => {
          reject('ERROR GETTING DATA FROM FACEBOOK')
        })
    }
      
    async getMoviesList() {
        let popularList = await ApiService.getPopularMovies();
        this.setState({moviesList: popularList});
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, padding: 20}}>Welcome {this.state.name || 'Stranger'}!</Text>
                    <Image 
                        style={{borderRadius: 999, height: this.state.avatar ? (this.state.avatar.height):(100), aspectRatio: 1}}
                        source={this.state.avatar ? ({uri: this.state.avatar.url}):(require('../../assets/non-profile.png'))} 
                    />
                    {!this.state.name ? <Text style={{padding: 20}}>Please log in to explore more movies</Text> : 
                        <CustomButton title="Movies List" color="lightblue" textColor="white" />}
                    <CustomButton onPress={() => this.getMoviesList()} title="Show Movies List" color="darkblue" textColor="white" />
                </View>
                
                {this.state.moviesList && <FlatList 
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.moviesList}
                    renderItem={({item, index}) => (
                        <Movie data={item} onPress={() => this.props.navigation.navigate(Routes.Screens.MOVIE.routeName, {data: item})} />
                    )}
                />}
                
                <View style={{position: 'absolute', bottom: 10, flexDirection: 'row'}}>
                    <LoginButton
                        onLoginFinished={(error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then((data) => {
                                    this.initUser(data.accessToken);
                                })
                            }
                        }}
                        onLogoutFinished={() => this.setState({name: null, avatar: null})}
                    />
                </View>
            </View>
        )
    }
}