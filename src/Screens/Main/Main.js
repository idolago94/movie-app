import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class Main extends Component {

    initUser(token) {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture&access_token=' + token)
        .then((response) => response.json())
        .then((json) => {
            console.log('Facebook user login: ', json);
            // json.name
            // json.picture.data.['url/height/width']    
        })
        .catch(() => {
          reject('ERROR GETTING DATA FROM FACEBOOK')
        })
      }

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
                        onLogoutFinished={() => console.log("logout.")}
                    />
                </View>
            </View>
        )
    }
}