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
import React, { useEffect, useState ,useRef} from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useRouter } from "expo-router";
import { Box, Stack, Text } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";
import api from "./axios/api";
import products from "./extra/products";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

const Videos = ({width}) => {
  const scrollRef=useRef();
  const isPortrait = useDeviceOrientation() === "portrait" ? true : false;
  const staticImage = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const image = `${staticImage}/video/videoImage.png`;
  const route = useRouter();
  const [videoArr, setVideoArr] = useState({ loaded: false, data: [] });
  const getWidth=isPortrait ? width:width/2*1.4;
  useEffect(() => {
    if (products && products.length > 0) {
      let videos = products.filter((obj) => obj.type === "video");
      if (videos && videos.length > 0) {
        setVideoArr({ loaded: true, data: videos });
      }
    }
  }, [products, setVideoArr]);

  return (
    <Stack direction="column" style={styles.container}>
      <Text
        variant="h4"
        style={{ margin: "auto", marginBottom: 20, width: "70%",textAlign:"center" }}
      >
        Videos to view
      </Text>
      <ScrollView
        horizontal={true}
        vertical={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        snapToStart={true}
        style={{ width: getWidth, height: "100%", textAlign: "center",}}
      >
        <MaterialCommunityIcons name="gesture-swipe-right" size={24} color="black"
            style={styles.swipeRight}
            />
            <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="black"
            style={styles.swipeLeft}
            />
        {videoArr.loaded &&
          videoArr.data.map((obj, index) => (
            <Stack
              direction="column"
              spacing={1}
              key={`${obj.id}--${index}`}
              style={[styles.stackCol,{alignItems:"center",justifyContent:"center",width:getWidth,}]}
            >
              <MaterialIcons
              name="touch-app"
              size={24}
              color="black"
              style={styles.touchIcon}
            />
                <Text
                  variant="h5"
                  style={{ top:"10%", marginBottom: 20, width: "70%",textAlign:"center" }}
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
                  style={{ width:"80%", minHeight:400,margin:"auto",height:"100%",padding:50 }}
                  variant="contain"
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
    flex: 1,
    width: "100%",
    minWidth: 365,
    maxWidth: 800,
    alignItems: "center",
    justifyContent: "flex-start",
    overflowX: "hidden",
  },
  stackCol: {
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    justifySelf: "flex-start",
    gap: 10,
  },
  swipeRight:{
    position:"absolute",
    top:"5%",
    right:"-0.1%",
    zIndex:1000
},
swipeLeft:{
    position:"absolute",
    top:"5%",
    left:"1.3%",
    zIndex:1000
},
touchIcon: {
  position: "absolute",
  top: "5%",
  right: "20%",
  zIndex: 200,
},
});
