import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,


    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',

        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    bedrooms: {
        marginVertical: 5,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 14,
        lineHeight: 22
    },
    prices: {
        fontSize: 18,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through'

    },
    newPrice: {
        fontWeight: 'bold',

    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    },

    
});

export default styles;