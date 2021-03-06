import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'

const Post = ({ post }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

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
                $300 Total
        </Text>

            <Text style={styles.description}>
                {post.description}
            </Text>
        </ScrollView>
    )
}

export default Post
