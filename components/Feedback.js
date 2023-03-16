import { 
    StyleSheet,
     View,
     ScrollView,
  useWindowDimensions,
  
 }
 from 'react-native'
import React,{useEffect,useState} from 'react';
import category from './extra/category';
import { Box, Stack,Text,Avatar } from "@react-native-material/core";
import logo from "../assets/logo.png";
import StarRating from './StarRating';
import { useDeviceOrientation } from "@react-native-community/hooks";
import colors from './extra/colors';


const Feedback = ({width,height}) => {
    const isPortrait = useDeviceOrientation() === "portrait" ? true : false;
    const [feedback,setFeedback]=useState({loaded:false,data:[]});
    const [rowCol,setRowCol]=useState("row");
    const [stackWidth,setStackWidth]=useState(width);
    const [stackHeight,setStackHeight]=useState(height/3);
    const [justify,setJustify]=useState({justifyContent:"center",alignItems:"center"});
    useEffect(()=>{
        if(width <600 && isPortrait){
            setRowCol("column");
            setStackWidth(width);
            setStackHeight(height/2);
        }else{
            setStackWidth(width/2.2);
            setRowCol("row");
            setStackHeight(height/3);

        }
    },[width,isPortrait,setRowCol,setStackWidth]);

    useEffect(()=>{
        if(category){
            let feedback=category.filter(obj=>(obj.name ==="feedback"))[0].pageFeedback;
            if(feedback){
            setFeedback({
                loaded:true,
                data:feedback
            });
        }
        }
    },[category]);
  return (
    <View style={styles.container}>
      <ScrollView style={[styles.scrollview,{width:width,height:stackHeight}]}>
        <Stack direction={rowCol} spacing={20} style={[styles.stackRow,justify]}>
        {feedback.loaded && feedback.data.map((obj,index)=>(
            <Stack direction="column" spacing={1} style={[styles.stackCol,{width:stackWidth}]} key={`${obj.id}--${index}`}>
                <Stack direction="row" style={styles.stackAvatar} spacing={5}>
                    <Avatar image={logo} style={{width:55,height:55,padding:20,}}/>
                    <Text variant="h5">{obj.name}</Text>
                </Stack>
                <Stack direction="row" style={styles.stackRow} spacing={3}>
                <Text variant="h5" style={styles.title}>comment</Text>
                <StarRating rating={obj.rating}/>
                </Stack>
              <Text variant="body1" style={styles.text}>{obj.comment}</Text>
              <Text variant="h5" style={styles.title}>Page Design</Text>
              <Text variant="body1" style={[styles.text,{textAlign:"center"}]}>{obj.page}</Text>
              
            </Stack>
        ))}
        </Stack>
      </ScrollView>
    </View>
  )
}

export default Feedback

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"column",
        marginTop:10,
        
    },
    scrollview:{
       marginTop:0,
       padding:0,
       marginLeft:0,
       
    },
    title:{
        fontWeight:600,
        margin:"auto",
        textAlign:"center",
        padding:5
    },
    text:{
        padding:10,
        margin:"auto",
        textAlign:"center",
    },
    stackRow:{
    margin:"auto",
    flexWrap:"wrap",
    paddingTop:5,
    paddingBottom:5,

},
rowWrap:{
    flexWrap:"wrap"
},
stackCol:{
    margin:'auto'
},
stackAvatar:{
    backgroundColor:colors.yellow.dark
},
})