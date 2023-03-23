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
  import ExpoVideo from '../components/extra/ExpoVideo';
  import api from '../components/axios/api';
  
  const detailVideo = () => {
    const params = useSearchParams();
  const { width, height } = useWindowDimensions();
  const id = params.id;
  const staticImage = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const image = `${staticImage}/video/videoImage.png`;
  const [prodVideo, setProdVideo] = useState({ loaded: false, data: {} });
  const [prod_video, setProd_video] = useState({ loaded: false, data: {} });
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

    useEffect(()=>{
      const getVideo= async()=>{
        const url='/account/product/'
        try {
          const res=await api.get(url);
          const body=res.data;
          const video=body.filter(obj=>(parseInt(obj.id)===parseInt(id)))[0];
          setProd_video({loaded:true,data:video});
        } catch (error) {
          console.error(error.message);
        }
      };
      getVideo();
    },[id]);

  
    return (
      <SafeAreaView style={[styles.container,{marginBottom:50,width:width}]}>
      <ScrollView>
        
          <Stack direction="column"  style={[styles.stackProdCol,{width:width}]}>
            {prod_video.loaded && (
              <View style={{ margin: "auto" }}>
                <TextEffect
                  text={prod_video.data.name}
                  delay={500}
                  fontSize={30}
                  fontFamily={"Roboto"}
                  bold={true}
                />
                <TextEffect
                  text={prod_video.data.category}
                  delay={1000}
                  fontSize={30}
                  fontFamily={"Roboto"}
                  bold={false}
                />
            
                <ExpoVideo 
                video_={`${staticImage}/${prod_video.data.imageName}`}
                width={width} image={`${staticImage}/${prod_video.data.frontCover}`}
                />

                <Text variant="h5" style={styles.titleDollar}>
                  5yr monthly price: ${prod_video.data.monthly}.00
                  
                </Text>
              </View>
            )}
          </Stack>
          <Stack direction="column"  style={[styles.stackProdCol,{alignSelf:"center",justifySelf:"center",width:width,padding:10}]}>
            {prod_video.loaded && (
              <View style={{ margin: "auto" }}>
                <Text variant="h5" style={styles.titleProd}>
                  summary 
                </Text>
                <Text variant="body1" style={[styles.prodSummary,{margin:"auto",width:width,textAlign:"center"}]}>
                  {prod_video.data.summary}
                </Text>
                <Text variant="h5" style={styles.titleProd}>
                  Description
                </Text>
                <Text variant="body2" style={[styles.prodDesc,{margin:"auto",width:width,textAlign:"center"}]}>
                  {prod_video.data.desc}
                </Text>
              </View>
            )}
          </Stack>
       
       
        </ScrollView>
    </SafeAreaView>
    )
  }
  
  export default detailVideo

  const styles = StyleSheet.create({
    container: {
      justifContent:"flex-start",
      alignItems:"center",
      flexDirection:"column"
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
      flex:1,
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom:10
    },
    
    titleProd: {
      textAlign: "center",
      fontWeight: 800,
      fontFamily: "Roboto",
    },
    titleCat: {
      textAlign: "center",
      fontWeight: 800,
      fontFamily: "Roboto",
      textAlign: "center",
    },
    titleDollar: {
      fontWeight: 800,
      fontFamily: "Roboto",
      textAlign: "center",
      color: "green",
    },
    productImage: {
      width: 400,
      height: 300,
    },
    prodSummary: {
      fontWeight: 800,
      fontFamily: "Roboto",
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20,
      paddingLeft: 50,
      paddingRight: 50,
      width:"80%"
    },
    prodDesc: {
      fontWeight: 800,
      fontFamily: "Roboto",
      textAlign: "center",
      paddingLeft: 20,
      paddingRight: 20,
      width:"80%"
      // fontSize:12
    },
    
  });