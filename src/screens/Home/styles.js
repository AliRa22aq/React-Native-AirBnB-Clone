import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width:'100%',
        height: 400,
        resizeMode: "cover",
        justifyContent: 'center',

    },
    title : {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'black',
        width: "70%",
        marginLeft: 25
    },
    button: {
        backgroundColor: "white",
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText : {
        fontSize: 15,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: "#fff",
        height: 40,
        width: Dimensions.get("screen").width - 20,
        marginHorizontal: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,

    },
    searchButtonText : {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',

    }
});

export default styles;