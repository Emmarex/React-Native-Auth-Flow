import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator, Alert} from 'react-native';
import { Card, FormLabel, FormInput, Button, Text } from 'react-native-elements'

class Main extends Component {

    static navigationOptions = {
        header: "Auth Flow App",
        title : "Register"
    };

    render() {
        return(
            <View style={styles.containerStyle}>
                <Text>App Header</Text>
            </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ffff'
    }
});