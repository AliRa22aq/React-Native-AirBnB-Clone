import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10
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
    }
});

export default styles;