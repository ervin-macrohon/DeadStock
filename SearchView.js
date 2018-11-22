import React, { Component }  from 'react';
import { FlatList, Text, ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import SearchResultRow from './SearchResultRow';
import s from './Style';

class SearchView extends Component{
    static navigationOptions = {
        title: 'Search',
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
        keyword: '',
        data: []
    };
    handleChangeKeyword = (value) => {
        this.setState({ keyword: value })
    };
    handleSearchSubmit = (value) => {
        this.setState({
            data: [
                {
                    id: '7',
                    img: `https://stockx.imgix.net/Nike-Kyrie-5-Taco-PE.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1541229814`,
                    brand: 'Nike',
                    model: 'Kyrie 5',
                    colourway: 'Taco PE',
                    averagePrice: 300
                },
                {
                    id: '8',
                    img: `https://stockx.imgix.net/Nike-LeBron-16-I-Promise.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1540436577`,
                    brand: 'Nike',
                    model: 'Lebron XVI',
                    colourway: 'I Promise',
                    averagePrice: 400
                },
                {
                    id: '9',
                    img: `https://stockx.imgix.net/Air-Jordan-XXXIII-Future-Of-Flight.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256`,
                    brand: 'Jordan',
                    model: 'XXXIII',
                    colourway: 'Future of Flight',
                    averagePrice: 300
                }
            ]
        })
    }
    navDetailView = (data) => {
        this.props.navigation.navigate('detailView', { details: data });
    }
    render (){
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TextInput 
                        style={s.search_bar}
                        placeholder="Enter model, brand, colourway..."
                        spellCheck={false}
                        value={this.state.keyword}
                        onChangeText={this.handleChangeKeyword}
                        onSubmitEditing={this.handleSearchSubmit}
                        />
                </View>
                <FlatList 
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <SearchResultRow 
                            data={item}
                            navDetailView={this.navDetailView} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

export default SearchView;