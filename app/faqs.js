import { View, Text, ScrollView, StyleSheet, Image,useWindowDimensions } from "react-native";
import React,{useEffect,useState} from "react";
import { Box, Stack } from "@react-native-material/core";
import FAQS from "../components/FAQS";
import { useDeviceOrientation } from "@react-native-community/hooks";


const faqs = () => {
  const {width,height}=useWindowDimensions();
  const faqImg =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/FAQS.png";
  const [setHeight,setSetHeight]=useState(300);
  const [getwidth,setGetWidth]=useState(0);
  const isPortrait = useDeviceOrientation() === "portrait" ? true : false;

  useEffect(()=>{
    if(width && isPortrait){
    const getHeight=200;
    setSetHeight(getHeight);
    setGetWidth(width);
    }else{
      setGetWidth(width);
      const getHeight=400;
      setSetHeight(getHeight);
    }
  },[setSetHeight,isPortrait,width]);
  
  return (
    <ScrollView
      style={styles.container}
      vertical={true}
      horizontal={false}
      scrollEnabled={true}
      snapToStart={true}
      showsVerticalScrollIndicator={true}
      alwaysBounceVertical={true}
    >
      <Stack spacing={1} direction="column" style={[styles.stack,{height:setHeight}]}>
        <Image
          resizeMode="contain"
          source={{ uri: faqImg }}
          alt="www"
          style={[styles.image,{height:setHeight,width:getwidth}]}
        />
      </Stack>
      <FAQS />
    </ScrollView>
  );
};

export default faqs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:50,
  },
  stack: {
    // flex: 1,
    height: 400,
    
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
