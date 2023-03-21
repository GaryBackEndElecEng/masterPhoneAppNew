import { StyleSheet, Text, View,useWindowDimensions, } from 'react-native'
import React from 'react'
import Feedback from '../components/Feedback';

//<Feedback width={width} height={height}/>
const feedback = () => {
    const {width,height}=useWindowDimensions();
  return (
    <View style={styles.container}>
      <Feedback width={width} height={height}/>
    </View>
  )
}

export default feedback

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})