
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';
import Face from '../components/Face';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';

class User extends Component {
    render() {
        return(
            <TouchableOpacity style={styles.item} onPress={this.props.navigate}>
                <View>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            email: ''
        }
        this.navigateToDetails = this.navigateToDetails.bind(this);
        this.logout = this.logout.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Home",
            headerTitleStyle: { color: '#fff' },
            headerStyle: { backgroundColor: '#3c3c3c' },
            headerRight: (
                <TouchableOpacity onPress={navigation.getParam('logout')}>
                    <View style={styles.rightMenu}>
                        <Text style={styles.headerText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            ),
        }
    };

    logout(){
        this.props.logout();
        this.props.navigation.navigate('Login');
    }

    componentWillMount() {
        this.props.navigation.setParams({ logout: this.logout });
    }
    

    navigateToDetails() {
        this.props.navigation.navigate('Details');
    }


    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>List of all users</Text>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <User title={item.key} navigate={this.navigateToDetails}/>}
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
    },
    item: {
        flex: 1,
        margin: 5
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        height: 10,
    },
    headerText: {
        color: '#ffffff'
    },
    rightMenu: {
        marginRight: 20
    },
});




export default connect(null, { logout })(HomeScreen);