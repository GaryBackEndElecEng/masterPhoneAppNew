import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Box, Stack } from "@react-native-material/core";
import packages from "./extra/packages";
import { useRouter, Link } from "expo-router";
import apiPackages from "./extra/apiPackages";
import axios from 'axios';

const Packages = ({ width, roboto }) => {
  const route = useRouter();
  const url = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const [Packages, setPackages] = useState({ loaded: false, data: {} });

  const [getPackages, setGetPackages] = useState({});
// console.log(apiPackages());

 useEffect(()=>{
    if(packages){
        setPackages({loaded:true,data:packages});
    }
 },[packages]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          {
            margin: "auto",
            textAlign: "center",
            fontWeight: "800",
            fontSize: 30,
          },
          roboto,
        ]}
      >
        PACKAGES
      </Text>
      <ScrollView
        horizontal={false}
        vertical={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        snapToStart={true}
        style={[styles.scrollview]}
      >
        {Packages.loaded &&
          Packages.data.map((obj, index) => (
            <Stack
              direction="column"
              key={`${obj.id}--${index}`}
              style={[styles.stack1, { width: width }]}
            >
              <Text>name:{obj.name}</Text>
              <Text>Special Offer{obj.specialOffer}</Text>
              <Text>monthly:${obj.monthly}.00</Text>

              <TouchableOpacity
                style={{ margin: "auto", width: width }}
                onPress={() => route.push(`/packageDetail/?id=${obj.id}`)}
              >
                <Image
                  source={{ uri: `${url}/${obj.image}` }}
                  alt="www"
                  style={[styles.image, { width: width }]}
                />
              </TouchableOpacity>
            </Stack>
          ))}
      </ScrollView>
    </View>
  );
};

export default Packages;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    maxHeight: 500,
  },
  scrollview: {
    height: 400,
  },
  stack1: {
    justifyContent: "flex-start",
    alignItems: "center",
    // height:"100%",
  },
  image: {
    margin: "auto",
    height: 300,
  },
});
