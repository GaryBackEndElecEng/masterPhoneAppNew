import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Box, Stack, Text,} from "@react-native-material/core";
import packages from "./extra/packages";
import { useRouter, Link } from "expo-router";
import apiPackages from "./extra/apiPackages";
import api from "../components/axios/api";

const Packages = ({ width, roboto }) => {
  const route = useRouter();
  const url = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const [Packages, setPackages] = useState({ loaded: false, data: {} });
  const [Packages_, setPackages_] = useState({ loaded: false, data: {} });

  const [getPackages, setGetPackages] = useState({});
 

  useEffect(() => {
    
    const getPackages= async()=>{
      try {
        const res=await api.get('/account/getPackages/');
        const body=res.data;
        setPackages_({loaded:true,data:body})
      } catch (error) {
        console.error(error.message)
      }
    };
    getPackages();
  }, [packages]);

  return (
    <View style={styles.container}>
          {Packages_.loaded &&
            Packages_.data.map((obj, index) => (
              <Stack
                direction="column"
                key={`${obj.id}--${index}`}
                style={[styles.stack1, { width: width }]}
              >
                <Text variant="h5">{obj.name}</Text>
                <Text>Special Offer{obj.specialOffer}</Text>
                <Text>monthly:${obj.monthly}.00</Text>

                <TouchableOpacity
                  style={{ margin: "auto", width: width }}
                  onPress={() => route.push(`/packageDetail/?id=${obj.id}`)}
                >
                  <Image
                    source={{ uri: `${url}/${obj.image}` }}
                    alt="www"
                    style={[styles.image, { width: width ,height:400}]}
                  />
                </TouchableOpacity>
              </Stack>
            ))}
        
      
    </View>
  );
};

export default Packages;

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    
  },
  scrollview: {
    
   
  },
  stack1: {
    flex:1,
    justifyContent: "flex-start",
    alignItems: "center",
    // height:"100%",
  },
  image: {
    margin: "auto",
    height: 300,
  },
});
