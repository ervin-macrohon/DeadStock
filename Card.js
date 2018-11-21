import React, { Component }  from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import s from './Style';
import Image from 'react-native-scalable-image';

export default Card = (props) => {
    return(
        <TouchableHighlight
            onPress={() => props.navDetailView(props.data)}>
            <View style={s.card}>
                <View style={s.image_placeholder}>
                    <Image
                        width={130}
                        source={{
                            uri: props.data.img
                        }}
                    />
                </View>
                <Text style={s.card_text}>
                    {props.data.brand} {props.data.model} {props.data.colourway}
                </Text>
                <Text style={[s.card_text, s.card_text_price]}>
                    ${props.data.averagePrice}
                </Text>
            </View>
        </TouchableHighlight>
    );
}