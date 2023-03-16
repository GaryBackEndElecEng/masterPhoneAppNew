import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    useAnimatedValue,
    Image,
    ScrollView,
    useWindowDimensions,
    Button,
    SafeAreaView,
  } from "react-native";
  import React, { useEffect, useState, useRef } from "react";
  import useFonts from "../components/hooks/useFonts";
  import { useDeviceOrientation } from "@react-native-community/hooks";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import {  Stack, Text } from "@react-native-material/core";
  import { Link, useSearchParams } from "expo-router";
  import products from "../components/extra/products";
  import TextEffect from "../components/extra/TextEffect";
  import VideoClass from '../components/extra/VideoClass';
  
  const detailVideo = () => {
    const params = useSearchParams();
  const { width, height } = useWindowDimensions();
  const id = params.id;
  const staticImage = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const image = `${staticImage}/video/videoImage.png`;
  const [prodVideo, setProdVideo] = useState({ loaded: false, data: {} });
  const [isReady, setIsReady] = useState(false);
  const [imgWidth, setImgWidth] = useState(375);
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
    setImgWidth(width);
  }, [setIsReady, width]);

  useEffect(() => {
    // console.log("ID",id)
    if (products && id) {
      // console.log(products[0].name,"ID",id)
      let prodVideo = products.filter(obj=>(obj.type ==="video")).filter(
        (obj) => parseInt(obj.id) === parseInt(id)
      )[0];
      //   console.log(prodVideos)
      setProdVideo({ loaded: true, data: prodVideo });
      
    }
  }, [products, id]);
    return (
      <SafeAreaView style={[styles.container,{marginBottom:50,width:width}]}>
      
        <Stack direction="row"  style={[styles.stackProdRow,{justifyContent:"center"}]}>
          <Stack direction="column"  style={[styles.stackProdCol]}>
            {prodVideo.loaded && (
              <View style={{ margin: "auto" }}>
                <TextEffect
                  text={prodVideo.data.name}
                  delay={500}
                  fontSize={30}
                  fontFamily={"Roboto"}
                  bold={true}
                />
                <TextEffect
                  text={prodVideo.data.category}
                  delay={1000}
                  fontSize={30}
                  fontFamily={"Roboto"}
                  bold={false}
                />
                {/* <Video_ video_={`${staticImage}/${prodVideo.data.imageName}`}
                imgWidth={imgWidth}
                /> */}
                <VideoClass 
                video_={`${staticImage}/${prodVideo.data.imageName}`}
                width={width} image={`${staticImage}/${prodVideo.data.frontCover}`}
                />

                <Text variant="h5" style={styles.titleDollar}>
                  5yr monthly price: ${prodVideo.data.monthly}.00
                  
                </Text>
              </View>
            )}
          </Stack>
          <Stack direction="column"  style={[styles.stackProdCol,{alignSelf:"center",justifySelf:"center"}]}>
            {prodVideo.loaded && (
              <View style={{ margin: "auto" }}>
                <Text variant="h5" style={styles.titleProd}>
                  summary 
                </Text>
                <Text variant="body1" style={[styles.prodSummary,{margin:"auto",width:"80%"}]}>
                  {prodVideo.data.summary}
                </Text>
                <Text variant="h5" style={styles.titleProd}>
                  Description
                </Text>
                <Text variant="body2" style={[styles.prodDesc,{margin:"auto",width:"80%"}]}>
                  {prodVideo.data.desc}
                </Text>
              </View>
            )}
          </Stack>
        </Stack>
       
      
    </SafeAreaView>
    )
  }
  
  export default detailVideo

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scroll: {
      justifyContent: "flex-start",
      flexDirection: "column",
      alignItems: "center",
    },
    stackProdRow: {
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
    stackProdCol: {
      justifyContent: "flex-start",
      alignItems: "center",
    },
    
    titleProd: {
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "Roboto",
    },
    titleCat: {
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "Roboto",
      textAlign: "center",
    },
    titleDollar: {
      fontWeight: "bold",
      fontFamily: "Roboto",
      textAlign: "center",
      color: "green",
    },
    productImage: {
      width: 400,
      height: 300,
    },
    prodSummary: {
      fontWeight: "bold",
      fontFamily: "Roboto",
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20,
      paddingLeft: 50,
      paddingRight: 50,
      width:"80%"
    },
    prodDesc: {
      fontWeight: "bold",
      fontFamily: "Roboto",
      textAlign: "center",
      paddingLeft: 20,
      paddingRight: 20,
      width:"80%"
      // fontSize:12
    },
    
  });