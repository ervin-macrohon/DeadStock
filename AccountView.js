import React, { Component }  from 'react';
import { FlatList, Text, ScrollView, View } from 'react-native';
import AccountOptions from './AccountOptions';

class AccountView extends Component{
    static navigationOptions = {
        title: 'Account',
        headerStyle: {
          backgroundColor: '#233237',
        },
        headerTintColor: '#c0c0c0',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24
        },
    };
    state = {
        options: [
            { id: '1', label: 'Change Password' },
            { id: '2', label: 'Log Out' }
        ]
    };
    render (){
        return (
            <View>
                <FlatList 
                    data={this.state.options}
                    renderItem={({ item }) =>
                         <AccountOptions 
                             label={item} />
                    }
                    keyExtractor={(item) => item.id}
                    style={s.scroll_list}
                />
            </View>
        );
    }
}

export default AccountView;