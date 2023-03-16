import { View, Text,ScrollView,StyleSheet,Image } from 'react-native'
import React,{useEffect,useState} from 'react';
import {Box,Stack} from "@react-native-material/core";
import api from '../components/axios/api';


const Works = () => {
  
  const girlPic =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/beautyGirl.png";
    const businessMan =
    "https://new-master.s3.ca-central-1.amazonaws.com/static/businessMan.png";


  return (
    <ScrollView
      vertical={true}
      horizontal={false}
      scrollEnabled={true}
        snapToStart={true}
        style={styles.container}
      > 
      <Stack 
      w={"100%"} h={400}
      spacing={0}
      direction="column"
      >
        <Image source={{uri:businessMan}} style={{width:"100%",height:"100%"}} alt="www"/>
      </Stack>
      <Stack 
      w={"100%"} h={400}
      spacing={0}
      direction="column"
      >
        <Image source={{uri:girlPic}} style={{width:"100%",height:"100%"}} alt="www"/>
      </Stack>
      <View>
        <Text style={styles.textStyle}>
        <Text style={styles.colorStyle}>ONE:</Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
        </Text>
      </View>
      <View>
        <Text style={styles.textStyle}>
        <Text style={styles.colorStyle}>TWO:</Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
        </Text>
      </View>
      <View>
        <Text style={styles.textStyle}>
        <Text style={styles.colorStyle}>THREE:</Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat <Text style={styles.colorStyle}>BEFORE END:</Text> excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat END:excepturi ipsum 
          <Text style={styles.colorStyle}>BEFORE BOTTOM:</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.textStyle}>
        <Text style={styles.colorStyle}>FOUR:</Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat <Text style={styles.colorStyle}>BEFORE END:</Text> excepturi ipsum 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maiores consequatur nostrum quam expedita, nesciunt nemo optio eaque recusandae quidem. Suscipit eos deleniti ab modi, atque hic dicta laudantium aspernatur minus fugit delectus voluptate fugiat deserunt, iusto dolorum sapiente obcaecati aliquid? Minus corrupti possimus enim est unde quas iusto illo corporis eaque, voluptate voluptatem fugiat END:excepturi ipsum 
          <Text style={styles.colorStyle}>BOTTOM:</Text>
        </Text>
      </View>
    </ScrollView>
  )
}

export default Works
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    marginBottom:30
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