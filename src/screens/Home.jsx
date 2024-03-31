import {StyleSheet, Text, View,FlatList } from 'react-native'
import {colors} from "../constants/colors"
import {categories} from "../data/categories.json"
import React from 'react'

const Home = () => {
    
  return (
    <View style={styles.flatListContainer}>
        <Text>Este es el home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    flatListContainer:{
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap: 10
    },
})
