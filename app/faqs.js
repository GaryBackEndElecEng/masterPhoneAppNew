import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React,{useEffect,useState} from "react";
import { Box, Stack } from "@react-native-material/core";
import FAQS from "../components/FAQS";
import { useDeviceOrientation } from "@react-native-community/hooks";


const faqs = () => {
  
  const faqImg =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/FAQS.png";
  const [setHeight,setSetHeight]=useState(300);
  const isPortrait = useDeviceOrientation() === "portrait" ? true : false;

  useEffect(()=>{
    const getHeight=isPortrait ? 200:300;
    setSetHeight(getHeight);
  },[setSetHeight,isPortrait]);
  
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
          style={[styles.image,{height:setHeight}]}
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
    width: window.innerWidth,
    height: 400,
    border: "1px solid blue",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
