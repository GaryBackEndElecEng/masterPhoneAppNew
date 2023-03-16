import React, { useRef,useState,useEffect } from "react";
import { Text, Avatar } from "@react-native-material/core";
import {
  Animated,
  View,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import colors from '../config/colors';


// <FadeDisplay img={imgName} name={name}/>

const ImageEffect = ({ text }) => {
  const [end,setEnd]=useState(false);
  // eleFade will be used as the value for opacity. Initial Value: 0
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
  const eleFade = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change eleFade value to 1 in 1 seconds
    setTimeout(()=>{setEnd(true)},2000);
    Animated.timing(eleFade, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
   
  };

  
  const fadeOut = () => {
    // Will change eleFade value to 0 in 3 seconds
    setEnd(false);
    Animated.timing(eleFade, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(()=>{
    if(end){
      fadeOut();
    }
  },[end]);
  return (
    <View >
      <Animated.Text
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: eleFade,
          },
        ]}
      >

      </Animated.Text>
      
      
        
        {/* <AnimatedTouchable onPress={fadeIn} onMouseOut={fadeOut}>
        <Avatar
          
          image={
            <Image
              source={{ uri:img }}
              style={[styles.avatar, styles.shadowProp]}
            />
          }
          key={key_}
        />
        </AnimatedTouchable> */}
        
        
     
    </View>
  );
};

export default ImageEffect;

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 10,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -1, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 50,
  },
});