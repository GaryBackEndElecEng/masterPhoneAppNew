import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  useAnimatedValue,
  Image,
  ScrollView,
  useWindowDimensions
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import LoadImages from '../components/LoadImages';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Box,Button,Stack,Text} from "@react-native-material/core";



const Slider = ({roboto}) => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  const isPortrait = useDeviceOrientation() === "portrait" ? true : false;
  const [innerWidth, setInnerWidth] = useState(375);
  const [innerHeight, setInnerHeight] = useState(375*9/16);
  const [scrollCount, setScrollCount] = useState(0);
  const [ele, setEle] = useState([{ id: 0, ele: "" }]);
  const AnimatedScrollView = new Animated.createAnimatedComponent(Image);
  const pan = useRef(new Animated.Value(0)).current;
  const getRef = useRef();

  useEffect(() => {
        setInnerWidth(width);
        setInnerHeight(width*9/16);
        if(!isPortrait){
          setInnerHeight(width*9/16);
        }
  }, [height,width,isPortrait]);

  return (
    
      <ScrollView
        horizontal={true}
        vertical={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        snapToStart={true}
        style={[ { width: innerWidth,height:innerHeight*1,}]}
        // ref={pan}
      >
        <MaterialCommunityIcons name="gesture-swipe-right" size={24} color="black"
            style={styles.swipeRight}
            />
            <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="black"
            style={styles.swipeLeft}
            />
        <LoadImages innerWidth={innerWidth} innerHeight={innerHeight*2} roboto={roboto} isPortrait={isPortrait} />
      </ScrollView>
    
  );
};

export default Slider;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 0,
    marginBottom: 20,
    position: "relative",
   

    // border:"1px solid red"
  },

  imgRow: {
    minWidth: 380,
    minHeight: 400,
    
  },
  imgRowAdd: {
    transform: "translateX(-100%)",
    transition: "all 1s ease-in-out",
  },
  swipeRight:{
      position:"absolute",
      top:"5%",
      right:"-0.1%",
  },
  swipeLeft:{
      position:"absolute",
      top:"5%",
      left:"0.3%",
  },
});
