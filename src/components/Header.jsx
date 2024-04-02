import { StyleSheet, Text, View, Image } from "react-native";
import {colors} from "../constants/colors"
import React from "react";


const Header = ({}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={require('../Img/LOGO PRINCIPAL.jpg')}/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '30%',
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: colors.mossGreen300,   
  },

  logoStyle:{
    height:200,
    width:200,
    borderRadius:10
  }
});
