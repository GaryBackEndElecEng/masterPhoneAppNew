import { View, Text, } from 'react-native'
import {useState} from 'react'

const useLoadImgs = async(img) => {
  try {
    const getRes=await img;
    const body= getRes;
        return body
  } catch (error) {
    
  }
}

export default useLoadImgs