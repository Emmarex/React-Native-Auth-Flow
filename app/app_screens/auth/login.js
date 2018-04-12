import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements'

class Login extends Component {

    static navigationOptions = {
        header: null,
        title : "Login"
    };

    constructor(props) {
        super(props);
        this.state = {
            user_email: '',
            user_password: '',
            error_message: '',
        }
    }

    forgot_password = (event) =>{
        Alert.alert("","Email sent");
    }

    login_user = (event) =>{
        this.props.navigation.navigate('App');
    }

    render() {
        const { navigate } = this.props.navigation;

            return(
                <View style={styles.container}>
                    <FormLabel labelStyle={{color:'#03A9F4'}}>
                        Email
                    </FormLabel>
                    <FormInput 
                        placeholderTextColor='#eee'
                        underlineColorAndroid='#03A9F4'
                        selectionColor='#03A9F4'
                        keyboardType = "email-address"
                        onChangeText={ TextInputValue =>
                            this.setState({user_email : TextInputValue }) 
                        }
                        placeholder="me@you.com"/>
                    { this.state.isFormEmailError && <FormValidationMessage>{this.state.form_email_error}</FormValidationMessage> }
                    <FormLabel labelStyle={{color:'#03A9F4'}}>
                        Password
                    </FormLabel> 
                    <FormInput 
                        placeholderTextColor='#eee'
                        underlineColorAndroid='#03A9F4'
                        selectionColor='#03A9F4'
                        secureTextEntry 
                        keyboardType = "default"
                        onChangeText={ TextInputValue =>
                            this.setState({user_password : TextInputValue }) 
                        }
                        placeholder="Password" />
                    { this.state.isFormPaswordError && <FormValidationMessage>{this.state.form_password_error}</FormValidationMessage> }
                    <View style={styles.spaceContainer} />
                    <Button raised title="Login" 
                        onPress={this.login_user}
                        backgroundColor = "#03A9F4"/>
                    <TouchableOpacity onPress={this.forgot_password} >
                        <Text style={styles.forgotPassText}>Forgot Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{ navigate("Register") }} >
                        <Text style={styles.register}>
                            Dont have an account? Signup
                        </Text>
                    </TouchableOpacity>
                </View>
            )
    }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff'
  },
  innerContainer:{
      backgroundColor: '#ffff'
  },
  spaceContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  register: {
    alignSelf: 'center',
    marginTop: 30,
  },
  forgotPassText: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  }
});
