import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react';
import api from '../axios/api';
import axios from 'axios';


const apiPackage = () => {
const packageUrl='https://newmasterconnect.herokuapp.com/api/account/getPackages/';
const packageUrl2="/account/getPackages/"
const [packages,setPackages]=useState({loaded:false,data:[]});

useEffect(()=>{
  const getPackages=async()=>{
    try {
      const res= await api.get(packageUrl2);
      const body=res.data;
      setPackages({loaded:true,data:body});
    } catch (error) {
      console.error(error.message)
    }
  }
  getPackages();
},[]);
if(packages.loaded){
  return packages.data;
}else{
  return "did not work";
}

  
}
export default apiPackage;

//
// useEffect(() => {
//   if (packages) {
//     const packageUrl =
//       "https://newmasterconnect.herokuapp.com/api/account/getPackages/";
//       const packageUrl2="http://localhost:8000/api/account/getPackages/";
//     const fetchpackages = async () => {
//       const options = {
//         method: "GET",
//         "Access-Control-AllowHeaders":"Content-Type,Cache-Control",
//         headers: {
//           mode: "no-cors",
//           Accept: "application/json",
//           "Content-Type":"application/json",
//           "Access-Control-Allow-Origin":"*",
//           "Access-Control-Max-Age":1
//         },
//       };
//       try {
//       //   const res = await fetch(packageUrl2, options);
//       //   const body = await res.json();
//         const res = await axios.get(packageUrl2);
//         const body = res.data;
//         console.log(body);
//       } catch (error) {
//         console.error(error.message);
//       }
//     };
//   //   fetchpackages();
//   }
// }, [packages]);
//

