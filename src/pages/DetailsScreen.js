import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

class DetailsScreen extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Details',
    };

    
    render() {
        return (
            <View style={styles.container}>
               <Text>Details</Text>
                <Button
                    title='Home'
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate('Home')}
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
    button: {
        marginTop: 20,
        padding: 2
    }
});

export default DetailsScreen;

