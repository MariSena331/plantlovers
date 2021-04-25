import React from 'react'
import { StyleSheet, View, } from 'react-native'

import { Header } from './Header'
import colors from '../styles/colors'

export function PlantSelect() {
    return (
        <View style={styles.container}>
            <Header/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
})