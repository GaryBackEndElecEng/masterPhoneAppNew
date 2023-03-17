import { View, Text, Image,StyleSheet } from 'react-native';
import React from 'react';
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} 
      style={[styles.propShadow,styles.logoStyle]}
      />
      <Text style={styles.master}> masterconnect</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"blue",
        zIndex:10,
        marginTop:0,
        marginBottom:0,
        height:"100%"
    },
    propShadow:{
        shadowOffset:{width:3,height:3},
        shadowOpacity:1,
        shadowRadius:50
    },
    logoStyle:{
        width:85,
        height:85,
        margin:70,
        borderRadius:75/2
    },
    master:{
        position:"absolute",
        top:20,
        fontSize:20
    }
})