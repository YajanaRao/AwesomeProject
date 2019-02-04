import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, TextInput, Button  } from 'react-native';
import {  StackActions, NavigationActions } from 'react-navigation'; 

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    };
    state = {
        email:'',
        password: '',
        login: false
    }

    componentDidMount = () => AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value, login: true }))

    shouldComponentUpdate(){
        if(this.state.login){
            this.navigateToHome();
            return true;
        }else{
            return false;
        }
        
    }

    handleEmailChange = (text) => {
        this.setState({
            email: text
        });
    }
    handlePasswordChange = (password) => {
        this.setState({
            password: password
        })
    }

    handleSubmit = () => {
        // alert('email: ' + this.state.email + ' password: ' + this.state.password); /10.0.3.2:8081
        AsyncStorage.setItem('email',this.state.email);
        AsyncStorage.setItem('password',this.state.password);
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
            <View style={styles.container}>
                <Text style={styles.header}>Login To the application</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmailChange} />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={this.handlePasswordChange} />
                <Button
                    onPress={this.handleSubmit}
                    title="Submit"
                    color="#841584"
                    accessibilityLabel="Login"
                />
            </View>
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
    flex: {
        flex: 1,
        flexDirection: 'row'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input:{
        margin: 15,
        height: 40,
        width: 200,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
});

export default LoginScreen;