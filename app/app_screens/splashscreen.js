import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { StackNavigator, SwitchNavigator } from "react-navigation";

import Login from './auth/login'
import Register from './auth/register';

import MainScreen from './secured/main';

class SplashScreen extends React.Component{

    constructor(props) {
        super(props);
        setTimeout(function(){
            this._bootstrapAsync();
        }.bind(this),1000);
    }

    _bootstrapAsync = async () => {
        this.props.navigation.navigate('Auth');
    };

    render(){
        return (
            <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32,}}>Welcome</Text>
            </View>
        )
    }

}

const AuthStack = StackNavigator({
    Login: { screen: Login },
    Register: {screen: Register },
});


export default SwitchNavigator(
  {
    Splash: {screen: SplashScreen },
    App: { screen: MainScreen },
    Auth: { screen: AuthStack }
  },
  {
    initialRouteName: 'Splash',
  }
);