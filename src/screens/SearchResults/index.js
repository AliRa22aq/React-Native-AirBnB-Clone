import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

// import feed from '../../../assets/data/feed';
import Post from '../../components/Post'

import { listPosts } from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'


const SearchResultScreen = (props) => {

    const guests = props.guests;

    console.log(props)

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchPosts = async () => {

            try {
                const postResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            maxGuests: {
                                ge: guests
                            }
                        }
                    })
                )
                console.log(postResult.data.listPosts.items)
                setPosts(postResult.data.listPosts.items)

            } catch (e) {
                console.log(e)
            }
        }
        fetchPosts()
    }, [])


    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={(index) => {
                    return index.toString();
                }} />
        </View>
    )
}

export default SearchResultScreen
