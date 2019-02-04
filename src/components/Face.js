import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
export default class Face extends Component {
    render() {
        if(this.props.data){
            return (
                // backgroundColor: 'powderblue',color: 'green', onPress={this.props.navigate}
                <TouchableOpacity onPress={()=>this.props.navigate(this.props.data)}>
                    <View style={{ height: 100, width: 50, margin: 10 }}>
                        {this.props.data.file ? <Image source={{ uri: this.props.server + this.props.data.file.substring(1) }} style={{ width: 50, height: 50 }} /> :
                            <Image source={{ uri: this.props.server + this.props.data.substring(1) }} style={{ width: 50, height: 50 }} />}
                        {this.props.data.name ? <Text style={{ color: 'black' }}>{this.props.data.name}</Text> : false}
                    </View>
                </TouchableOpacity>
            );
        }else{
           return (
               <Text>No Known Faces Present</Text>
           )
        }
    }
}

