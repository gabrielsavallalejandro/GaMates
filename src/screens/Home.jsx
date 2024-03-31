import {StyleSheet, Text, View,FlatList } from 'react-native'
import {colors} from "../constants/colors"
import categories from "../data/categories.json"
import CategoryeItem from '../components/CategoryeItem'
import React from 'react'

const Home = () => {


  return (
    <View style={styles.flatListContainer}>
      <FlatList
        keyExtractor={elementOfItem => elementOfItem}
        data={categories}
        renderItem = {({item})=> <CategoryeItem category={item}/> }
        
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    flatListContainer:{
        display:"flex",
        flexDirection:'column',
        justifyContent: 'space-between',
        margin:10
    },

})
