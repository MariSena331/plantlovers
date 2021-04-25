import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import wateringImg from '../assets/default-plant.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá, </Text>
                <Text style={styles.userName}>Mariana</Text>
            </View>


            <Image
                style={styles.userImage}
                source={wateringImg}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        padding: 20
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 56,
        borderColor: colors.green,
        borderWidth: 1.5
    },
})