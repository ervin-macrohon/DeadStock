import React, { Component }  from 'react';
import { Text, View } from 'react-native';

class DetailView extends Component{
    static navigationOptions = {
        title: 'Featured',
        headerStyle: {
          backgroundColor: '#233237',
        },
        headerTintColor: '#c0c0c0',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24
        },
    };
    render(){
        return(
            <View>
                <Text>test</Text>
            </View>
        );
    }
}

export default DetailView;