import React, { useEffect, useState,useRef } from "react";
import {useRouter} from 'expo-router';
import { Text, Box, Flex,ListItem, Button } from "@react-native-material/core";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import {StyleSheet,View, Animated,TouchableOpacity} from 'react-native';

const Footer = () => {
  const [open, setOpen] = useState();
  const router=useRouter();
  const AnimatedTouchable=Animated.createAnimatedComponent(TouchableOpacity);
  const dropDownEle=useRef(new Animated.Value(0)).current;
  const fadeIn=()=>{
    Animated.timing(dropDownEle,{
      toValue:1,
      duration:1500,
      useNativeDriver:true,
    }).start();
  }
  const fadeOut=()=>{
    Animated.timing(dropDownEle,{
      toValue:0,
      duration:1000,
      useNativeDriver:true,
    }).start();
  }

  const handleOpen = (e) => {
    e.preventDefault();
    if(!open){
      setOpen(true);
      fadeIn();
    }else{fadeOut();setOpen(false);}
  };
  return (
    <View style={[styles.shadowProp,{position:"relative",bottom:0,width:"100%"}]}>
      <Button variant="contain" onPress={(e)=>handleOpen(e)} title="Navigation"/>
      {open &&
    <AnimatedTouchable >
         <ListItem
         onPress={(e)=>router.push('/')}
         title="home"
         size={24}
         leading={<MaterialCommunityIcons name="home" color={"red"} size={28} />}
         trailing={<MaterialCommunityIcons name="chevron-right" color={"black"} size={28} />}
         />
         <ListItem
         onPress={(e)=>router.push('/works')}
         title="works"
         size={24}
         leading={<MaterialCommunityIcons name="book" color={"red"} size={28} />}
         trailing={<MaterialCommunityIcons name="chevron-right" color={"black"} size={28} />}
         />
         <ListItem
         onPress={(e)=>router.push('/faqs')}
         title="FAQS"
         size={24}
         leading={<AntDesign name="barschart" size={24} color="red" />}
         trailing={<MaterialCommunityIcons name="chevron-right" color={"black"} size={28} />}
         />
    </AnimatedTouchable>
    }
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "black",
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 30,
  },
})
