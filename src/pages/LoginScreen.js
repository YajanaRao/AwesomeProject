import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, Button  } from 'react-native';
import {  StackActions, NavigationActions } from 'react-navigation'; 
import { KeyboardAvoidingView } from 'react-native';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    };
    state = {
        email:'',
        password: '',
        login: false
    }

    handlePasswordChange = (password) => {
        this.setState({
            password: password
        })
    }

    handleSubmit = () => { 
        this.navigateToHome();
    }

    navigateToHome(){
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' })
            ],
        }))
    }
    render() {

        return (
            <KeyboardAvoidingView style = { styles.container } behavior = "padding" enabled>
                <Text style={styles.header}>Login To the application</Text>
                <TextInput style={styles.input}
                    placeholder="Enter PIN"
                    placeholderTextColor="#000000"
                    keyboardType='numeric'
                    secureTextEntry={true}
                    autoFocus
                    onSubmitEditing={this.handleSubmit}
                    onChangeText={this.handlePasswordChange} />
            </ KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#222',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input:{
        margin: 15,
        height: 40,
        width: 300,
        borderBottomWidth: 2,
        borderColor: '#000000',
        // borderWidth: 1
    }
});

export default LoginScreen;