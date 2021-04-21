import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: 'space-between',
        height: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'

    },
    adult: {
        fontWeight: 'bold',
    },
    age:{
        color: "#8d8d8d"
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 20, 
        color: '#474747'
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderColor: '#676767',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    count: {
        marginHorizontal: 10, 
        fontSize: 16
    },
    searchButton: {
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 20
    },
    searchButtonText: {
        fontSize: 16,
        color: 'white',
    }
});

export default styles;