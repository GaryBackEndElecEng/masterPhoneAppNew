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
import { Box, Stack, Avatar, Text } from "@react-native-material/core";
import { Link, useSearchParams } from "expo-router";
import products from "../components/extra/products";
import TextEffect from "../components/extra/TextEffect";
import colors from '../components/extra/colors';

const detailPage = () => {
  const params = useSearchParams();
  const { width, height } = useWindowDimensions();
  const id = params.id;
  const staticImage = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const [product, setProduct] = useState({ loaded: false, data: {} });
  const [services, setServices] = useState({ loaded: false, data: {} });
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
      let Product_ = products.filter(
        (obj) => parseInt(obj.id) === parseInt(id)
      )[0];
      //   console.log(Product_)
      setProduct({ loaded: true, data: Product_ });
      if (Product_) {
        let service = Product_.services;
        if (service.length > 0) {
          setServices({ loaded: true, data: service });
        }
      }
    }
  }, [products, id]);

  return (
    <SafeAreaView style={[styles.container, { marginBottom: 50 }]}>
      <ScrollView
        vertical={true}
        horizontal={false}
        scrollEnabled={true}
        snapToStart={true}
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={true}
      >
        <Stack
          direction="row"
          spacing={0}
          style={[styles.stackProdRow, { justifyContent: "center" }]}
        >
          <Stack direction="column" spacing={0} style={[styles.stackProdCol]}>
            {product.loaded && (
              <View style={{ margin: "auto" }}>
                <TextEffect
                  text={product.data.name}
                  delay={1000}
                  fontSize={45}
                  fontFamily={"Roboto"}
                  bold={true}
                />
                <TextEffect
                  text={product.data.category}
                  delay={2000}
                  fontSize={30}
                  fontFamily={"Roboto"}
                  bold={false}
                />
                <Image
                  style={[
                    { width: imgWidth - 10, height: 400 },
                    styles.productImage,
                  ]}
                  source={{ uri: `${staticImage}/${product.data.imageName}` }}
                />

                <Text variant="h5" style={styles.titleDollar}>
                  5yr monthly price: ${product.data.monthly}.00
                </Text>
              </View>
            )}
          </Stack>
          <Stack
            direction="column"
            spacing={1}
            style={[
              styles.stackProdCol,
              { alignSelf: "center", justifySelf: "center" },
            ]}
          >
            {product.loaded && (
              <View style={{ margin: "auto" }}>
                <Text variant="h5" style={styles.titleServ}>
                  summary
                </Text>
                <Text
                  variant="body1"
                  style={[styles.prodSummary, { width: width }]}
                >
                  {product.data.summary}
                </Text>
                <Text variant="h5" style={styles.titleServ}>
                  Description
                </Text>
                <Text
                  variant="body2"
                  style={[, styles.prodDesc, { width: width }]}
                >
                  {product.data.desc}
                </Text>
              </View>
            )}
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={0}
          style={[
            styles.stackServCol1,
            {  },
          ]}
        >
          <Text variant="h3" style={[{width:width,backgroundColor:"black",color:"white",textAlign:"center"}]}>
            Services
          </Text>
          {services.loaded &&
            services.data.map((obj, index) => (
              <Stack
                direction="column"
                spacing={0}
                style={[styles.stackServCol2, { margin: "auto" }]}
                key={`${obj.id}-${index}`}
              >
                <Image
                  source={{ uri: `${staticImage}/${obj.image}` }}
                  alt="www"
                  style={[styles.avatar,styles.shadowProp]}
                />
                <Text variant="h4" style={[styles.titleServ,styles.shadowTest]}>
                  {obj.name}
                </Text>
                <Text variant="h5" style={[styles.titleServ,{fontWeight: "600",}]}>
                  summary
                </Text>
                <Text variant="body1" style={styles.servSummary}>
                  {obj.summary}
                </Text>
                <Text variant="h5" style={[styles.titleServ,{fontWeight: "600",}]}>
                  description
                </Text>
                <Text variant="body2" style={styles.servDesc}>
                  {obj.desc}
                </Text>
              </Stack>
            ))}
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default detailPage;

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
  productImage: {
    filter: "saturate(100%)",
    opacity: 0,
  },
  stackServCol1: {
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center" 
  },
  stackServCol2: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 50,
  },
  titleProd: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  titleServ: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
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
    margin: "auto",
  },
  prodDesc: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    margin: "auto",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  servSummary: {
    fontWeight: "500",
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    // fontSize:14
  },
  servDesc: {
    fontWeight: "500",
    fontFamily: "Roboto",
    textAlign: "center",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  avatar: {
    // textAlign: "center",
    position: "relative",
    top: "0%",
    width: 80,
    height: 80,
    padding: 0,
    borderRadius: 80 / 2,
    backgroundColor: "white",
    
  },
  shadowProp: {
    shadowColor: colors.blue.light,
    shadowOffset: { width: 2, height: -2 },
    shadowOpacity: 0.9,
    // shadowRadius: 230 / 2,
    zIndex:1000
  },
  shadowTest: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    zIndex:1000,
  },
});
