import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator, Alert} from 'react-native';
import { Card, FormLabel, FormInput, Button, Text } from 'react-native-elements'

class Main extends Component {

    static navigationOptions = {
        title : "React Auth Flow"
    };

    render() {
        return(
            <View style={styles.containerStyle}>
                <View style={styles.navBar}>
                    <Text>React Auth Flow</Text>
                </View>
            </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: 'white',
        elevation: 4
    }
});