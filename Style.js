import { StyleSheet } from 'react-native';

export default s = StyleSheet.create({
    featured_container: {
        width: '100%'
    },
    header: {
        padding: 5, 
        width: '100%', 
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#233237'
    },
    card: {
        height: 200,
        width: 160,
        padding: 10,
        alignItems: 'center'
    },
    card_text:{
        marginTop: 10,
        textAlign: 'center'
    },
    image_placeholder: {
        height: 110,
        width: 130,
        flex: 1,
        justifyContent: 'center'
    },
    card_text_price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#228b22'
    },
    scroll_list: {
        height: 220
    }
});