import { StyleSheet, Text, View } from 'react-native'
import {colors} from "../constants/colors"
import React from 'react'

const CardItem = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default CardItem

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.mossGreen200,
    alignItems:'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  }
})