import { StyleSheet, Text, View, Button } from 'react-native'
import {categories} from '../data/categories.json'
import {colors} from '../constants/colors'
import CardItem from './CardItem'
import React from 'react'

const CategoryeItem = ({category}) => {
  return (
    <CardItem style={styles.categoryeContainer}>
      <Text style={styles.categoryText}> {category}</Text>
    </CardItem>
  )
}

export default CategoryeItem

const styles = StyleSheet.create({
  categoryText: {
    fontSize:35,
    color:colors.lightGrey,
    
  },



})