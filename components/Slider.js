import { View, Text,StyleSheet,TouchableOpacity,Animated,useAnimatedValue,Image,ScrollView } from 'react-native';
import React,{useEffect,useState,useRef} from 'react';
import pics from './pics';

const Slider = () => {
    const [loadPics,setLoadPics]=useState(null);
    const [scrollCount,setScrollCount]=useState(0);
    const NewScroll= new Animated.createAnimatedComponent(ScrollView);
    const animateEleRef= useRef(new Animated.Value(0)).current;
   
    function initialFunc(e){
        Animated.timing(animateEleRef, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
          Animated.event(
            [{nativeEvent:{
                contentOffset:{x:scrollX}
            }}]
          )
        setScrollCount(scrollX)
          
    }
    console.log(scrollCount)
    useEffect(()=>{
        if(pics){
            setLoadPics(pics);
        }
    },[pics]);
  return (
    <View  onScroll={(e)=>initialFunc(e)} style={{width:300,height:300,marginBottom:"30%",marginTop:"30%"}}>
        <View style={{width:"100%",height:300,flexDirection:"row",flexWrap:"nowrap",position:"absolute",top:0,overFlow:"hidden"}}>
      {loadPics && loadPics.map((obj,index)=>(
        
            
        <Image resizeMode="contain" source={{uri:obj.image}} key={`${index}-${obj.id}`} style={[styles.imgRow,{transform:`translateX(${(index) *(100)}%)`,opacity:1,border:"1px solid black"}]} />
        
      ))}
      </View>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    container:{
        position:"relative",
        width:300,
        height:300,
        // justifyContent:"center",alignItems:"flex-start",
        zIndex:10,
        marginTop:20,
        flexDirection:"row",
        flexWrap:"nowrap",
        opacity:1,
        overFlowX:"scroll",
        border:"1px solid red"
    },
    imgRow:{
        width:"100%",
        height:"100%",
        position:"absolute",
        // transform:"translateX(-180%)",
        zIndex:20,
        border:"1px solid red"

        
    }
})