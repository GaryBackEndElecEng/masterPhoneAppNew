import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Stack, Avatar, Text } from "@react-native-material/core";


const Video_ = ({ video_,imgWidth }) => {
  const playRef = useRef();
  const [summary, setSummary] = useState("");
  const [isBuffering,setIsBuffering]=useState(false);
  const [isError,setIsError]=useState(false);
  const staticImage = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  const logoVideo = staticImage ? `${staticImage}/video/logoAdvert.mp4` : "";
  const image = `${staticImage}/video/videoImage.png`;



  const handlePlayVideo = async(e) => {
    e.preventDefault();
    if (!playRef.current) return;
    try {
      
      playRef.current.play();
      
    } catch (error) {
      setIsError(true);
      console.error(error.message);
    }
    
  };
  return (
    <TouchableOpacity
    onPress={(e) => handlePlayVideo(e)}
    >
      
      <video
        style={{height:400,width:imgWidth}}
        type={"video/mp4"}
        poster={image}
        source={video_}
        ref={playRef}
      />

      {isError && 
      <Text style={{position:"absolute",top:"26%",left:"20%",fontSize:30,fontWeight:800,width:"60%",zIndex:200,color:"white",backgroundColor:"black"}}>
        There seemed to be an error,,try later
      </Text>
      }
    </TouchableOpacity>
  );
};

export default Video_;

const styles = StyleSheet.create({
  videoStyle:{
     height: 400,
  }
})