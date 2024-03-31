import { StyleSheet, Text, View } from "react-native";
import {colors} from "../constants/colors"
import React from "react";


const Header = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTittle}>GA MATES</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: colors.mossGreen300,   
  },
  textTittle:{
    color: colors.lightGrey,
    fontSize: 50

  }
});
