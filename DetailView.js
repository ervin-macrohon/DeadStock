import React, { Component }  from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import s from './Style';
import Image from 'react-native-scalable-image';
import { CustomPicker } from 'react-native-custom-picker';
import * as Animatable from 'react-native-animatable';
import MakeItRain from './MakeItRain.js';

class DetailView extends Component{
    static navigationOptions = {
        title: 'Details',
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
        sizePicked: null,
        overlay: false
    };

    showMeTheMoney = () => {
        this.setState({overlay: true});
    }

    render(){
        const options = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5',
            '13', '13.5', '14', '14.5', '15']
        const details = this.props.navigation.getParam('details', '{}');
        return(
            <View style={s.detail_view_container}> 
                <Animatable.View 
                    style={s.detail_view_image_placeholder}
                    animation="bounceInDown">
                    <Image
                        width={360}
                        source={{
                            uri: details.img
                        }}
                    />
                </Animatable.View>
                <Animatable.Text 
                    style={[s.header, {textAlign: 'center'}]}
                    animation="bounceInLeft">
                    {details.brand} {details.model} {details.colourway}
                </Animatable.Text>
                <Animatable.View style={s.last_sale}
                    animation="bounceInLeft">
                    <Text style={s.last_sale_text}>
                        Last Sale: </Text>
                    <Text style={s.last_sale_price}>
                        ${details.averagePrice}
                    </Text>
                </Animatable.View>
                <Animatable.View style={s.buy_sell_bar}
                    animation="bounceInUp">
                    <View style={s.size_picker}>
                        <CustomPicker
                            fieldTemplate={this.renderField}
                            options={options}
                            placeholder='Choose Size'
                            onValueChange={value => {
                                this.setState({sizePicked: value})
                            }}/>
                    </View>
                    <TouchableOpacity style={[s.buy_sell_button, s.buy_button]}>
                        <Text style={s.button_text}>
                            Buy
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[s.buy_sell_button, s.sell_button]}
                        onPress={this.showMeTheMoney}>
                        <Text style={s.button_text}>
                            Sell
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
                <Overlay
                    isVisible={this.state.overlay}
                    fullScreen={true}
                    overlayStyle={s.overlay}>
                    <MakeItRain />
                </Overlay>
            </View>
        );
    }

    renderField(settings) {
        const { selectedItem, defaultText, getLabel, clear } = settings
        return (
          <View>
            <View style={s.picker_field}>
              {!selectedItem && <Text style={s.picker_text}>{defaultText}</Text>}
              {selectedItem && 
                  <Text style={s.picker_text}>
                    Size: {getLabel(selectedItem)}
                  </Text>}
            </View>
          </View>
        )
      }
}

export default DetailView;