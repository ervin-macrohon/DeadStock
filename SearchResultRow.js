import React, { Component }  from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import s from './Style';
import Image from 'react-native-scalable-image';

export default SearchResultRow = (props) => {
    return(
        <TouchableOpacity
            onPress={() => props.navDetailView(props.data)}>
            <View style={s.result_row_box}>
                <Image
                        width={105}
                        source={{
                            uri: props.data.img
                        }}
                    />
                <Text style={s.result_row_text}>
                    {props.data.brand} {props.data.model} {props.data.colourway}
                </Text>
            </View>
        </TouchableOpacity>
    );
}