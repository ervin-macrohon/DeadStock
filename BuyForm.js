import React, { Component }  from 'react';
import { TextInput, View, Text } from 'react-native';
import s from './Style';
import { Button } from 'react-native-elements';
import ValidationComponent from 'react-native-form-validator';

export default class BuyForm extends ValidationComponent{
    static navigationOptions = {
        title: 'Checkout',
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
        Name: '',
        Address: '',
        Mobile: '',
        Email: '',
        stateChange: 0
    }

    handleNameChange = (value) => {
        this.setState({
            Name: value
        });
    }

    handleAddressChange = (value) => {
        this.setState({
            Address: value
        });
    }

    handleEmailChange = (value) => {
        this.setState({
            Email: value
        });
    }

    handleMobileChange = (value) => {
        this.setState({
            Mobile: value
        });
    }

    submit = () => {
        this.validate({
            Name: {maxlength: 50, required: true},
            Address: {maxlength: 60, required: true},
            Email: {email: true, required: true, maxlength: 60},
            Mobile: {numbers: true, maxlength: 14}
        //   date: {date: 'YYYY-MM-DD'}
        });
        this.setState(prevState=>({stateChange: prevState.stateChange + 1}));
      }

    render(){
        return(
            <View style={s.buy_form_container}>
                <TextInput 
                    style={s.input_box}
                    placeholder="Name"
                    spellCheck={false}
                    value={this.state.Name}
                    onChangeText={this.handleNameChange}
                    />
                <TextInput 
                    style={s.input_box}
                    placeholder="Email"
                    spellCheck={false}
                    value={this.state.Email}
                    onChangeText={this.handleEmailChange}
                    />
                <TextInput 
                    style={s.input_box}
                    placeholder="Mobile"
                    spellCheck={false}
                    value={this.state.Mobile}
                    onChangeText={this.handleMobileChange}
                    />
                <TextInput 
                    style={s.input_box}
                    placeholder="Address"
                    spellCheck={false}
                    value={this.state.Address}
                    onChangeText={this.handleAddressChange}
                    />
                <Button
                    raised
                    title='Checkout'
                    onPress={this.submit} />
                <View style={s.errors_box}>
                <Text style={{color: 'red'}}>
                    {this.getErrorMessages()}
                </Text>
                </View>
            </View>
        );
    }
}