import { View,ScrollView,StyleSheet,Image } from 'react-native'
import React,{useEffect,useState} from 'react';
import {Box,Stack,Text} from "@react-native-material/core";
import api from '../components/axios/api';
import axios from 'axios';


const Works = () => {
  const staticImage="https://new-master.s3.ca-central-1.amazonaws.com/static"
  const girlPic =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/beautyGirl.png";
    const businessMan =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/businessMan.png";
    const [getProduct,setGetProducts]=useState({loaded:false,data:[]});

    useEffect(()=>{
      const getApi= async()=>{
        const url="/account/product/";
        const options={method: "GET",Accept:"application/json"}
        try {
          const res=await api.get(url);
          const body=res.data;
          const pageDesign=body.filter(obj=>(obj.type==="pageDesign")).filter(obj=>(obj.category==="frontPage"))
          setGetProducts({loaded:true,data:pageDesign});
        } catch (error) {
          console.error(error.message);
        }
      }
      getApi();
    },[]);

   
  return (
    <ScrollView
      vertical={true}
      horizontal={false}
      scrollEnabled={true}
        snapToStart={true}
      > 
      <Stack 
      w={"100%"}
      spacing={0}
      direction="column"
      style={styles.stackContainer}
      >
        {getProduct.loaded && getProduct.data.map((obj,index)=>(
          <Stack direction="column" spacing={1} key={`${index}--${obj.id}`}
          style={[styles.stackColumn,styles.shadowProp]}
          >
            <Text variant="h4" style={{margin:"auto",textAlign:"center"}}>{obj.name}</Text>
            <View >
            <Image source={{uri:`${staticImage}/${obj.imageName}`}} alt="www"
            style={styles.image}
            resizeMode="stretch"
            />
            </View>
            <Text variant="h5" style={{margin:"auto",color:"green",textAlign:"center"}}>5-yr monthly: ${obj.monthly}.00 </Text>
            <Text variant="h4" style={{margin:"auto",marginTop:20,marginBottom:20,textAlign:"center"}}>summary</Text>
            <Text variant="body1" style={{margin:"auto",padding:10}}>{obj.summary}</Text>
            <Text variant="h4" style={{margin:"auto",marginTop:20,marginBottom:20,textAlign:"center"}}>Description</Text>
            <Text variant="body1" style={{margin:"auto",marginBottom:20,padding:10}}>{obj.desc}</Text>
          </Stack>
        ))}
      </Stack>
      
    </ScrollView>
  )
}

export default Works
const styles = StyleSheet.create({
  container:{
    
    padding:20,
    marginBottom:30
  },
  stackContainer:{
    justifyContent:"flex-start",
    width:"100%",
    alignItems:"center"
  },
  stackColumn:{
    flex:1,
    marginTop:20,
    marginBottom:20,
    // alignItems:"center",
    // justifyContent:"flex-start"
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    // backgroundColor:"rgba(0,0,0,0.2)"
  },
  image:{
  //  margin:"auto",
    height:400,
  },
  colorStyle:{
    // flex:1,
    color:"blue",
    backgroundColor:"green"
  },
  textStyle:{
    // flex:1,
    marginTop:20,
    marginBottom:30,
  }
})