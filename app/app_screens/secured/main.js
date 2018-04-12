import React, { Component } from 'react';
import { StyleSheet,ToolbarAndroid, View, Image, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator, Alert} from 'react-native';
import { Card, FormLabel, FormInput, Button, Text } from 'react-native-elements'

class Main extends Component {

    static navigationOptions = {
        title : "React Auth Flow"
    };

    render() {
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.mainText}>
                    React Auth Flow Main Page
                </Text>
            </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    mainText: {
    }
});