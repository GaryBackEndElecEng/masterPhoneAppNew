import {
  View,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { Box, Stack,Text } from "@react-native-material/core";
import useFonts from "../components/hooks/useFonts";
import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Videos from "../components/Videos";
import Packages from "../components/Packages";
import Feedback from "../components/Feedback";
import colors from "../components/extra/colors";
import { Link } from "expo-router";
import { A } from '@expo/html-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from 'expo-linking';

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
    <SafeAreaView style={{marginTop:0}}>
      <ScrollView
        vertical={true}
        horizontal={false}
        scrollEnabled={true}
        snapToStart={true}
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={true}
        // pagingEnabled={true}
        style={[styles.contentContainer,]}
      >
        <Footer />

        
        <Stack
          w={"100%"}
          spacing={3}
          direction="column"
          style={{ alignItems: "center", justifyContent: "flex-start", }}
        >
          <View style={styles.msgContainer}>
          <Text style={[styles.msgTitle, roboto]}>Web Design</Text>
        
          <Text style={[styles.msg, roboto]}>
            The Freedom to Get Exactly What You Want- Hassle-Free!
          </Text>
        </View>
          <Image
            source={{ uri: businessMan }}
            style={{ width: "100%",height:400 }}
            alt="www"
          />
        </Stack>
        <Stack direction="column" spacing={3}>
        <Button
        title="Open masterconnect"
        onPress={() => Linking.openURL('https://www.masterconnect.ca')}
        style={styles.button}
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
          // h={700}
          spacing={0}
          direction="column"
          style={{ alignItems: "center", justifyContent: "flex-start",flex:1, }}
        >
          <Link
            href={"https://www.masterconnect.ca/video"}
            style={[styles.text, styles.shadowProp]}
          >
            
            <Text style={[styles.text, styles.shadowProp,{color:"white"}]}>
              click here for videos
            </Text>
          </Link>
         
          <A href={"mailto:masterconnect919@gmail.com"} >
            <TouchableOpacity>
            <Text style={[styles.sendEmail,styles.shadowProp]}>requests</Text>
            </TouchableOpacity>
          </A>
          
          <Videos width={width} />
        </Stack>
        <Stack
          w={"100%"}
          spacing={0}
          direction="column"
          style={[,{ alignItems: "center", justifyContent: "center", }]}
        >
          <Text variant="h4"style={[roboto,{backgroundColor:colors.teal.light,width:width,textAlign:"center"}]}>Packages</Text>
          <ScrollView style={{height:600}}>
          <Packages width={width} roboto={roboto} />
          </ScrollView>
        </Stack>
        <Stack
          w={"100%"}
          // h={200}
          spacing={0}
          direction="column"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 50,
            marginTop: 50,
          }}
        >
          <A href={"mailto:masterconnect919@gmail.com"} >
            <TouchableOpacity>
            <Text style={[styles.sendEmail,styles.shadowProp]}>request a Quote</Text>
            </TouchableOpacity>
          </A>
        
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  contentContainer: {
    marginBottom: 20,
    marginTop: 0,
    paddingVertical: 20,
    maxHeight: 3000,
    marginBottom: 10,
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
    
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  msg: {
    fontSize: 20,
    color: "blue",
  },
  msgTitle: {
    fontSize: 40,
    color: "blue",
    marginBottom:20
  },
  textStyle: {
    // flex:1,
    marginTop: 20,
    marginBottom: 20,
  },

  backgrdImg: {
    marginTop: 0,
    width: "100%",
    // height: "50%",
    
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    margin: 20,
    padding: 10,
    marginBottom: 30,
  },
  sendEmail:{
    marginTop:20,
    marginBottom:20,
    fontSize:20,
    padding:10,
    color:"white",
    borderRadius:40/2
  },
});
