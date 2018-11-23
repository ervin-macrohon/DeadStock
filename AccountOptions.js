import React, { Component }  from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import s from './Style';

export default AccountOptions = (props) => {
    return(
        <TouchableOpacity>
            <View style={s.account_options_box}>
                <Text style={s.account_options_text}>
                    {props.label.label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}