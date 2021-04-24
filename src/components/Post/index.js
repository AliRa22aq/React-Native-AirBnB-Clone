import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'

const Post = ({ post }) => {


    const navigation = useNavigation();

    const days = 7;


    const goToPogePage = () => {
        navigation.navigate('Post', { post: post })
    }

    return (
        <Pressable onPress={goToPogePage} style={styles.container}>

            {/* image */}
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            />

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            {/* Tpes and description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type} - {post.title}
            </Text>

            {/* Old price and new price */}
            <Text style={styles.prices} >
                <Text style={styles.oldPrice}> ${post.oldPrice}</Text>
                <Text style={styles.newPrice}> ${post.newPrice}</Text>
         /night
        </Text>

            {/* Total price */}

            <Text style={styles.totalPrice}>
                ${post.newPrice * days} Total
        </Text>


        </Pressable>
    )
}

export default Post
