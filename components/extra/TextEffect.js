import React, { useRef,useState,useEffect } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import colors from './colors';
import { Box, Stack,Avatar,Text } from "@react-native-material/core";


// <FadeDisplay img={imgName} name={name}/>

const TextEffect = ({ text,delay,fontSize,fontFamily,bold }) => {
  const [end,setEnd]=useState(false);
  const [getBold,setGetBold]=useState("");
  // eleFade will be used as the value for opacity. Initial Value: 0
  // const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
  const eleFade = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change eleFade value to 1 in 1 seconds
    Animated.timing(eleFade, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
   
  };

  useEffect(()=>{
    setTimeout(()=>{
      fadeIn();
    },delay);
    if(bold){
    setGetBold("bold");
    }else{
      setGetBold("400");
    }
  },[bold]);
  
  const fadeOut = () => {
    // Will change eleFade value to 0 in 3 seconds
    setEnd(false);
    Animated.timing(eleFade, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  
  return (
      <Animated.Text
        style={[
          styles.fadingText,
          {
            // Bind opacity to animated value
            opacity: eleFade,
            fontSize:fontSize,
            fontFamily:fontFamily,
            fontWeight:getBold,
          },
        ]}
      >
        {text}
      </Animated.Text>
  );
};

export default TextEffect;

const styles = StyleSheet.create({
  
  fadingText: {
    padding: 10,
    backgroundColor: "rgba(255,255,255,.5)",
    textAlign:"center",
    fontWeight:"bold"
  },
  
  
});