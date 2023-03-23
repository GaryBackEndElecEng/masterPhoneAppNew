import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
  useWindowDimensions,
  Animated,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useRouter } from "expo-router";
import { Box, Stack, Text } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";
import api from "./axios/api";
// import products from "./extra/products";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Videos = ({ width }) => {
  const scrollRef = useRef();
  const isPortrait = useDeviceOrientation() === "portrait" ? true : false;
  const staticImage = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const image = `${staticImage}/video/videoImage.png`;
  const route = useRouter();
  const [video_arr, setVideo_arr] = useState({ loaded: false, data: [] });
  const getWidth = isPortrait ? width : (width / 2) * 1.4;
  useEffect(() => {
    const getVideos = async () => {
      const url = "/account/product/";
      try {
        const res = await api.get(url);
        const body = res.data;
        const videos = body.filter((obj) => obj.type === "video");
        if (videos.length > 0) {
          setVideo_arr({ loaded: true, data: videos });
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    getVideos();
  }, [setVideo_arr]);
 
  return (
    <Stack direction="column" style={styles.container}>
      <Text
        variant="h4"
        style={{
          margin: "auto",
          marginBottom: 20,
          width: "70%",
          textAlign: "center",
        }}
      >
        Videos to view
      </Text>
      <ScrollView
        horizontal={true}
        vertical={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        snapToStart={true}
        style={{ width: getWidth, height: "100%", textAlign: "center" }}
      >
        <MaterialCommunityIcons
          name="gesture-swipe-right"
          size={24}
          color="black"
          style={styles.swipeRight}
        />
        <MaterialCommunityIcons
          name="gesture-swipe-left"
          size={24}
          color="black"
          style={styles.swipeLeft}
        />
        {video_arr.loaded &&
          video_arr.data.map((obj, index) => (
            <Stack
              direction="column"
              spacing={3}
              key={`${obj.id}--${index}`}
              style={[
                styles.stackCol,
                {
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: getWidth,
                },
              ]}
            >
              <MaterialIcons
                name="touch-app"
                size={24}
                color="black"
                style={styles.touchIcon}
              />
              <Text
                variant="h6"
                style={{
                  marginTop: "5%",
                  marginBottom: 20,
                  width: "70%",
                  textAlign: "center",
                }}
              >
                {obj.name}
              </Text>
              <TouchableOpacity
                style={{
                  margin: "auto",
                  marginBottom: 20,
                  marginTop: 20,
                  minHeight: 400,
                  minWidth: 400,
                }}
                onPress={() => route.push(`/detailVideo?id=${obj.id}`)}
              >
                <Image
                  source={{ uri: `${staticImage}/${obj.frontCover}` }}
                  alt="www"
                  style={{
                    width: width,
                    height: 300,
                    margin: "auto",
                    padding: 50,
                  }}
                  
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Stack>
          ))}
      </ScrollView>
    </Stack>
  );
};

export default Videos;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    minWidth: 365,
    // maxWidth: 800,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 0,
    paddingBottom: 10,
  },
  stackCol: {
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    justifySelf: "flex-start",
    gap: 10,
  },
  swipeRight: {
    position: "absolute",
    top: "5%",
    right: "-0.1%",
    // zIndex:1000
  },
  swipeLeft: {
    position: "absolute",
    top: "5%",
    left: "1.3%",
    // zIndex:1000
  },
  touchIcon: {
    position: "absolute",
    top: "5%",
    right: "10%",
    // zIndex: 200,
  },
});
