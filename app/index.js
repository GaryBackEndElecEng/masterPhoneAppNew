import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { Box, Stack } from "@react-native-material/core";
import useFonts from "../components/hooks/useFonts";
import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Videos from "../components/Videos";
import Packages from "../components/Packages";
import Feedback from '../components/Feedback';
import colors from '../components/extra/colors';
import {Link} from 'expo-router';

const Index = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  const [isReady, setIsReady] = useState(false);
  const girlPic =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/beautyGirl.png";
  const businessMan =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/businessMan.png";
  const isPortrait = useDeviceOrientation() === "portrait" ? true : false;
  const adjHeight = isPortrait ? "40%" : "100%";
  const roboto = isReady && { fontFamily: "Roboto" };

  useEffect(() => {
    const LoadFonts = async () => {
      try {
        await useFonts();
        setIsReady(true);
      } catch (error) {
        setIsReady(false);
      }
    };
    LoadFonts();
  }, [setIsReady]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        vertical={true}
        horizontal={false}
        scrollEnabled={true}
        snapToStart={true}
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={true}
        // pagingEnabled={true}
        style={[styles.contentContainer]}
      >
        <Footer />

        <View style={styles.msgContainer}>
          <Text style={[styles.msgTitle, roboto]}>Web Design</Text>
        </View>
        <View style={styles.msgContainer}>
          <Text style={[styles.msg, roboto]}>
            The Freedom to Get Exactly What You Want- Hassle-Free!
          </Text>
        </View>
        <Stack
          w={"100%"}
          h={400}
          spacing={0}
          direction="column"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={{ uri: businessMan }}
            style={{ width: "100%", height: "100%" }}
            alt="www"
          />
        </Stack>
        <Stack
          direction="column"
          w={"100%"}
          h={500}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Slider roboto={roboto} />
        </Stack>

        <Stack
          w={"100%"}
          h={600}
          spacing={0}
          direction="column"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Link href={"https://www.masterconnect.ca/video"} style={[styles.text,styles.shadowProp]}>
            <Text style={[styles.text,styles.shadowProp]}>click here for videos</Text>
          </Link>
          <Videos width={width} />
        </Stack>
        <Stack
          w={"100%"}
          h={500}
          spacing={0}
          direction="column"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Packages width={width} roboto={roboto} />
        </Stack>
        <Stack
           w={"100%"}
           h={500}
         direction="column"
         spacing={0}
         style={{paddingTop:10,paddingBottom:10}}
        >
          <Text variant="h3" style={{margin:"auto",height:50,fontSize:30,textAlign:"center",marginBottom:20,backgroundColor:colors.blue.medium,color:"white",width:width}}>Feedback</Text>
        <Feedback width={width} height={height}/>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginBottom: 20,
    marginTop: 0,
    paddingVertical: 20,
    maxHeight: 3000,
    // centerContent:true
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    // alignItems: "center",
    // flexDirection: "column",
    marginTop: 0,
  },
  msgContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  msg: {
    fontSize: 20,
    color: "blue",
  },
  msgTitle: {
    fontSize: 40,
    color: "blue",
  },
  textStyle: {
    // flex:1,
    marginTop: 20,
    marginBottom: 30,
  },

  backgrdImg: {
    marginTop: 0,
    width: "100%",
    // height: "50%",
    // border:"1px solid black"
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    backgroundColor:"rgba(0,0,0,0.3)"
  },
  text:{
    fontSize:20,
    fontWeight:"600",
    margin:20,
    padding:10,
    marginBottom:30
    
  },
});
