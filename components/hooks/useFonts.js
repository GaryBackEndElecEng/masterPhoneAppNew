import { View, Text } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';

//google fonts(https)=> within pull out the *.woff2 link: it downloads
const useFonts = async() => {
  const res =await Font.loadAsync({
    "Roboto":'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKOzY.woff2',
    "Playfair Display":"https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDZbtPY_Q.woff2",
    "Libre Baskerville":"https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2",

  })
}

export default useFonts