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
    },
    detail_view_container: {
        width: '100%',
        alignItems: 'center'
    },
    detail_view_image_placeholder: {
        height: 300,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    last_sale: {
        flexDirection: 'row'
    },
    last_sale_text: {
        paddingTop: 5,
        paddingRight: 5
    },
    last_sale_price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#228b22'
    },
    buy_sell_bar: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#233237',
        paddingRight: 15
    },
    size_picker: {
        height: 80,
        width: 80
    },
    buy_sell_button:{
        height: 60,
        width: 120,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
    button_text: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white'
    },
    buy_button: {
        backgroundColor: '#228b22'
    },
    sell_button: {
        backgroundColor: '#cc0000'
    },
    picker_text: {
        fontSize: 18,
        color: 'white'
    }
});