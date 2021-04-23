import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import styles from './styles'
import { useNavigation } from '@react-navigation/core'

const PostCarouselItem = ({post}) => {

    const width = useWindowDimensions().width;

    const navigation = useNavigation();

    const goToPogePage = () => {
        navigation.navigate('Post', {postId: post.id})
    }

    return (
        <Pressable onPress={goToPogePage} style={[styles.container, {width: width - 60}]}>
                <View style={styles.innerContainer}> 

                {/* image */}
                <Image 
                    style={styles.image}
                    source= {{uri: post.image}}
                    />

                        <View style={{ flex: 1, marginHorizontal: 10 }}> 
                        {/* Bed & Bedroom */}
                        <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

                        {/* Tpes and description */}
                        <Text style={styles.description} numberOfLines= {2}> 
                        {post.type} - {post.title}
                        </Text>

                        {/* Old price and new price */}
                        <Text style={styles.prices} >
                        <Text style={styles.newPrice}>${post.newPrice}</Text>
                        /night
                        </Text>
                        
                        </View>
                </View>
        </Pressable>
    )
}

export default PostCarouselItem
