import { StyleSheet, View,ScrollView,Image,useWindowDimensions } from 'react-native'
import packages from '../components/extra/packages';
import React,{useEffect,useState} from 'react';
import {useSearchParams,Link} from 'expo-router';
import {Box,Button,Stack,Text} from "@react-native-material/core";
import useFonts from '../components/hooks/useFonts';
import colors from '../components/extra/colors';
import TestThis from '../components/extra/TestThis';
import apiPackages from "../components/extra/apiPackages";

const PackageDetail = () => {
  const {width,height}=useWindowDimensions();
    const params=useSearchParams();
    const id=params.id;
    const staticImage="https://new-master.s3.ca-central-1.amazonaws.com/static";
    const [Package,setPackage]=useState({loaded:false,data:{}});
    const [isReady,setIsReady]=useState(false);
    const roboto=isReady ? {fontFamily:"Roboto"}:{};
    const [titleSize,setTitleSize]=useState({});
// console.log(apiPackages())
    useEffect(()=>{
      const LoadFonts=async()=>{
        try {
          await useFonts();
          setIsReady(true);
        } catch (error) {
          setIsReady(false)
        }
      }
      LoadFonts();
    },[setIsReady]);

    useEffect(()=>{
        if(packages && id){
          setPackage({
            loaded:true,
            data:packages.filter(obj=>(parseInt(obj.id)===parseInt(id)))[0]
          });
        }
        if(width && width<400){
          setTitleSize({fontSize:26});
        }
    },[packages,id,width,setTitleSize]);
    
  return (
    <View style={[styles.container,{width:width}]}>
      
        <ScrollView style={{margin:"auto",width:width}}>
          {Package.loaded && 
          <View style={styles.container2}>
          <Text style={[styles.title,roboto,titleSize,{textAlign:"center",width:"100%",backgroundColor:colors.blue.medium,padding:30,color:"white"}]} variant="h4"> {Package.data.name}</Text>
          <Text style={[styles.title,roboto]} variant="h5"> Summary</Text>
          <Text style={[styles.summary,roboto]} variant="h6"> {Package.data.summary}</Text>
          <Text style={[styles.title,roboto]} variant="h5"> Description</Text>
          <Text style={[styles.summary,roboto]} variant="body1"> {Package.data.desc}</Text>
          <Text style={[styles.monthly,roboto]} variant="h5">5 year monthly: $ {Package.data.monthly}</Text>
          <Image source={{uri:`${staticImage}/${Package.data.image}`}} alt="www" style={[styles.image,{width:width}]}/>
          <View style={styles.container2}>
          <Text style={[styles.title,roboto,{backgroundColor:"blue",width:"100%",textAlign:"center",color:"white",padding:10}]} variant="h4">Included Services</Text>
          <View style={{width:width,marginTop:20,marginBottom:20}} >
            {Package.data.products[0].services.map(obj=>(
              
                <View style={styles.container2} key={`${obj.id}-this`}>
                  <Image source={{uri:`${staticImage}/${obj.image}`}} style={styles.imageServ}/>
                  <Text style={[styles.title,roboto,titleSize,styles.shadowTest]} variant="h4"> {obj.name}</Text>
                  <Text style={[styles.title,roboto]} variant="h5"> Summary</Text>
                  <Text style={[styles.summary,roboto]} variant="body1"> {obj.summary}</Text>
                  <Text style={[styles.title,roboto]} variant="h5"> Description</Text>
                  <Text style={[styles.summary,roboto]} variant="body1"> {obj.desc}</Text>
                </View>
              
            ))}
            </View>
          </View>
          </View>
          
          }
          
        </ScrollView>
      </View>
  )
}

export default PackageDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    textAlign:"center"
  },
  container2: {
    margin:"auto",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    margin: "auto",
    marginTop:20,
    fontWeight:"800",
    alignItems:"center",
    justifyContent:"center",

  },
  monthly:{
    margin:"auto",
    marginTop:20,
    marginBottom:20,
    color:"green",
  },
  summary:{
    marginTop:20,
    padding:20

  },
  image:{
    margin:"auto",
    marginTop:20,
    height:400
  },
  imageServ:{
    margin:"auto",
    marginTop:20,
    width:85,
    height:85,
    borderRadius:85/2,
    
  },
  shadowTest: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    zIndex:1000,
  },
})