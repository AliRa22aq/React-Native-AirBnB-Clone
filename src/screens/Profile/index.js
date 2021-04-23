import React from 'react'
import { View, Text } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import styles from './styles';


import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
           <Pressable 
                style={styles.button}
                onPress= {() => signOut()}
                >
               <Text> Log Out</Text>

           </Pressable>
        </View>
    )
}

export default ProfileScreen
