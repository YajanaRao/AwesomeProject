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
        const { navigation } = this.props;
        const details = navigation.getParam('data', 'No data found');
        const server = navigation.getParam('server','No server address found')
        return (
            <View style={styles.container}>
                <Image source={{ uri: server + details.file.substring(1) }} style={{ width: 100, height: 100 }} />
                <Text>{details.name}</Text>   
                <Text>Rank : {details.details.rank}</Text>
                <Text>Points Earned : {details.details.total_points_earned}</Text>
                <Text>Total Yearly Visit : {details.details.total_yearly_visit}</Text>
                <Button
                    title='Check In'
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate('Camera')}
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

