import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class Register extends Component {
    
    static navigationOptions = {
        header: null,
        title : "Register"
    };
    
    register_user = (event) =>{
        this.props.navigation.navigate('App');
    }

    render(){

        const { navigate } = this.props.navigation;
        
        return(
            <View style={styles.containerStyle}>
                <FormLabel labelStyle={{color:'#03A9F4'}}>
                    First Name
                </FormLabel>
                <FormInput 
                    placeholderTextColor='#eee'
                    underlineColorAndroid='#03A9F4'
                    selectionColor='#03A9F4'
                    keyboardType = "default"
                    placeholder="John"/>
                <FormLabel labelStyle={{color:'#03A9F4'}}>
                    Last Name
                </FormLabel>
                <FormInput 
                    placeholderTextColor='#eee'
                    underlineColorAndroid='#03A9F4'
                    selectionColor='#03A9F4'
                    keyboardType = "default"
                    placeholder="Doe"/>
                <FormLabel labelStyle={{color:'#03A9F4'}}>
                    Email
                </FormLabel>
                <FormInput 
                    placeholderTextColor='#eee'
                    underlineColorAndroid='#03A9F4'
                    selectionColor='#03A9F4'
                    keyboardType = "email-address"
                    placeholder="me@you.com"/>
                <FormLabel labelStyle={{color:'#03A9F4'}}>
                    Password
                </FormLabel> 
                <FormInput 
                    placeholderTextColor='#eee'
                    underlineColorAndroid='#03A9F4'
                    selectionColor='#03A9F4'
                    secureTextEntry 
                    keyboardType = "default"
                    placeholder="Password" />
                <View style={styles.spaceContainer} />
                <Button raised title="Register" 
                    onPress={this.register_user}
                    backgroundColor = "#03A9F4"/>
                <TouchableOpacity onPress={()=>{ navigate("Login") }} >
                    <Text style={styles.register}>
                        Already a member? Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Register;

const styles = StyleSheet.create({
    containerStyle:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    headerRightIcon: {
        paddingHorizontal: 10,
    },
    spaceContainer: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    register: {
      alignSelf: 'center',
      marginTop: 30,
    }
});