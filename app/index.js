import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Index = () => {
  const girlPic =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/beautyGirl.png";
  const businessMan =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/businessMan.png";
  const isPortrait = useDeviceOrientation() === "portrait" ? true : false;
  const adjHeight = isPortrait ? "40%" : "100%";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.msgContainer}>
        <Text style={styles.msgTitle}>Wed Design</Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msg}>
          The Freedom to Get Exactly What You Want- Hassle-Free!
        </Text>
      </View>
      <Image
        source={{ uri: businessMan }}
        resizeMode="contain"
        style={[styles.backgrdImg, { height: adjHeight }, styles.shadowProp]}
      />
      <Slider />
      <Image
        source={{ uri: girlPic }}
        resizeMode="contain"
        style={[styles.backgrdImg, { height: adjHeight }, styles.shadowProp]}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  msgContainer: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  msg: {
    baseText: {
      fontFamily: "Roboto",
    },
    fontSize: 20,
    color: "bluegrey",
  },
  msgTitle: {
    baseText: {
      fontFamily: "Roboto",
    },
    fontSize: 40,
    color: "bluegrey",
  },
  logoImg: {
    width: 125,
    height: 125,
  },
  backgrdImg: {
    marginTop: 0,
    width: "100%",
    height: "50%",
    border:"1px solid black"
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
  },
});
