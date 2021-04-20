import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = () => {
    return (
        <View style={styles.container}>

        {/* image */}
        <Image 
            style={styles.image}
            source= {{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
            />

        {/* Bed & Bedroom */}
        <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

        {/* Tpes and description */}
        <Text style={styles.description} numberOfLines= {2}> 
        Entire Flat - Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type
        </Text>

        {/* Old price and new price */}
        <Text style={styles.prices} >
        <Text style={styles.oldPrice}> $36</Text>
        <Text style={styles.newPrice}> $30</Text>
         /night
        </Text>

        {/* Total price */}

        <Text style={styles.totalPrice}>
            $230 Total
        </Text>

        
        </View>
    )
}

export default Post
