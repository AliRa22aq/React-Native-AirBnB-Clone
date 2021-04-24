import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'


const GuestScreen = () => {

    const navigation = useNavigation();

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    return (
        <View style={styles.container}>

            <View>

                {/* Adults */}

                <View style={styles.row}>
                    <View>
                        <Text style={styles.adult}> Adults </Text>
                        <Text style={styles.age}> Age 13 or more </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            onPress={() => { if (adults > 0) setAdults(adults - 1) }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>

                        <Text style={styles.count}> {adults} </Text>

                        <Pressable
                            onPress={() => { setAdults(adults + 1) }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>

                    </View>

                </View>

                {/* Children */}

                <View style={styles.row}>
                    <View>
                        <Text style={styles.adult}> Children </Text>
                        <Text style={styles.age}> Numbers </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            onPress={() => { if (children > 0) setChildren(children - 1) }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>

                        <Text style={styles.count}> {children} </Text>

                        <Pressable
                            onPress={() => { setChildren(children + 1) }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>

                    </View>

                </View>

                {/* Infants */}

                <View style={styles.row}>
                    <View>
                        <Text style={styles.adult}> Infants </Text>
                        <Text style={styles.age}> Numbers </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            onPress={() => { if (infants > 0) setInfants(infants - 1) }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>

                        <Text style={styles.count}> {infants} </Text>

                        <Pressable
                            onPress={() => { setInfants(infants + 1) }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>

                    </View>

                </View>
            </View>

            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('Home', {
                    screen: "Explore",
                    params: {
                        screen: "SearchResults",
                        params: {
                            screen: 'list',
                            guests: adults + children
                      }
                    }
                })}
            >
                <Text style={styles.searchButtonText}> Search </Text>
            </Pressable>

        </View>
    )
}

export default GuestScreen
