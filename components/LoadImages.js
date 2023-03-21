import {
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  Animated,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import pics from "./pics";
import get_products from "./extra/products";
import { Box, Stack, Text } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import colors from './extra/colors';

const LoadImages = ({ innerWidth, innerHeight, roboto, isPortrait }) => {
  let arr = [];
  const route = useRouter();
  const titleRef = useRef();
  const staticImage = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState({ loaded: false, data: [] });
  const [getInnerHeight,setGetInnerHeight]=useState(innerHeight/2);
  const setSummaryWidth = isPortrait ? "80%" : "100%";
  const setSummaryLeft = isPortrait ? "12%" : "0%";
  const setSummaryTop = isPortrait ? "70%" : "80%";

  useEffect(() => {
    setProducts({ loaded: true, data: get_products });
  }, [get_products]);
  useEffect(()=>{
    if(innerHeight && innerWidth){
      if(innerWidth < 600){
        setGetInnerHeight(innerHeight/2);
      }else{
        setGetInnerHeight(innerHeight/3.5)
      }
    }
  },[innerHeight,innerWidth]);

  const handleChange = (id) => {
    route.push(`/detailPage/?id=${id}`);
  };

 
  if (products.data.length > 0 && products.loaded) {
    products.data
      .filter((obj) => obj.type === "pageDesign")
      .forEach((product, index) => {
        arr.push(
          <Stack direction="column" spacing={1} style={[styles.stack,{width:innerWidth}]} key={product.id}>
            <Text variant="h4" style={[styles.title, roboto,]}>
                Design Page
              </Text>
            <Text variant="h5" style={[styles.title, roboto,]}>
                {product.name}
              </Text>
            <TouchableOpacity
              onPress={() => handleChange(product.id)}
              key={`${index}-${product.id}`}
              style={[styles.touch, { width: innerWidth,margin:"auto" }]}
            >

              <MaterialIcons
                name="touch-app"
                size={24}
                color="black"
                style={styles.touchIcon}
              />

              <Image
                id={`${index}-${product.id}`}
                source={{ uri: `${staticImage}/${product.imageName}` }}
                style={[{height:getInnerHeight,width:innerWidth}]}
                // resizeMode="contain"
                alt="www"
              />

              <Text
                variant="h5"
                style={[
                  // styles.summary,
                  {
                    width: "100%",
                    margin:"auto",
                    textAlign:"center",
                    color:"white"
                  },
                  roboto,
                ]}
              >
                {product.summary.slice(0, 70)}...
              </Text>
            </TouchableOpacity>
          </Stack>
        );
      });
  }

  return arr;
};
export default LoadImages;

const styles = StyleSheet.create({
  touch: {
    
  },
  stack:{
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:colors.grey.light,
    color:"white"
  },

  imgRow: {
    // textAlign:"center",
    margin:"auto",
    width: "100%",
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: "whitesmoke",
    paddingBottom: 0,
    marginBottom: 0,
    paddingRight: 10,
    paddingLeft: 10,
  },
  title: {
    margin:"auto",
    textAlign: "center",
    color:"white"
    
  },
  summary: {
    textAlign: "center",
    position: "relative",
    // top: "80%",
    paddingBottom: 20,
    // zIndex: 1000,
    color: "white",
    backgroundColor: "rgba(0,0,0,.5)",
    width: "70%",
    left: "20%",
  },
  touchIcon: {
    position: "absolute",
    top: "5%",
    right: "10%",
    // zIndex: 200,
  },
  button: {
    // backgroundColor: "black",
    color: "white",
    // zIndex: 2000,
    width: 400,
    height: 100,
    position: "absolute",
    top: "-20%",
    // left: "50%",
  },
});
