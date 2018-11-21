import React, { Component }  from 'react';
import { FlatList, Text, ScrollView, View } from 'react-native';
import Card from './Card';
import s from './Style';

class Featured extends Component{
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
    state = {
        mostPopular: [
            {
                id: '1',
                img: `https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F11%2Fair-jordan-11-concord-suprise-drop-nike-snkrs-4.jpg?q=90&w=2800&cbr=1&fit=max`,
                brand: 'Jordan',
                model: '11',
                colourway: 'Concord',
                averagePrice: 420
            },
            {
                id: '2',
                img: `https://sneakerbardetroit.com/wp-content/uploads/2018/01/air-jordan-12-cherry.png`,
                brand: 'Jordan',
                model: '12',
                colourway: 'Cherry',
                averagePrice: 300
            },
            {
                id: '3',
                img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803111_01.jpg`,
                brand: 'Jordan',
                model: '3',
                colourway: 'Black Cement',
                averagePrice: 400
            }
        ],
        endingSoon: [
            {
                id: '4',
                img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803977_01.jpg`,
                brand: 'Nike',
                model: 'Off White Presto',
                colourway: 'Black White Cone',
                averagePrice: 900
            },
            {
                id: '5',
                img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/801781_01.jpg`,
                brand: 'Jordan',
                model: 'Off White 1',
                colourway: 'Black White Varsity Red',
                averagePrice: 2200
            },
            {
                id: '6',
                img: `https://stockx-360.imgix.net/Nike-Blazer-Mid-Off-White-All-Hallows-Eve/Images/Nike-Blazer-Mid-Off-White-All-Hallows-Eve/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1538080256`,
                brand: 'Nike',
                model: 'Off White Blazer',
                colourway: 'Tan Orange',
                averagePrice: 600
            }
        ],
        newReleases:[
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
    }
    navDetailView = (data) => {
        this.props.navigation.navigate('detailView', { details: data });
    }
    render(){
        return(
            <ScrollView style={s.featured_container}>
                <Text style={s.header}>
                    Most Popular
                </Text>
                <FlatList 
                    data={this.state.mostPopular}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <Card 
                            data={item}
                            navDetailView={this.navDetailView} />
                    }
                    keyExtractor={(item) => item.id}
                    style={s.scroll_list}
                />
                <Text style={s.header}>
                    Ending Soon
                </Text>
                <FlatList 
                    data={this.state.endingSoon}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <Card 
                            data={item}
                            navDetailView={this.navDetailView} />
                    }
                    keyExtractor={(item) => item.id}
                    style={s.scroll_list}
                />
                <Text style={s.header}>
                    New Releases
                </Text>
                <FlatList 
                    data={this.state.newReleases}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <Card 
                            data={item}
                            navDetailView={this.navDetailView} />
                    }
                    keyExtractor={(item) => item.id}
                    style={s.scroll_list}
                />
            </ScrollView>
        );
    }
}

export default Featured;