import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useRef,useState,useEffect} from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';

const ExpoVideo = ({video_,width,Image}) => {
    const video = React.useRef(null);
    const [status, setStatus] = useState({});
    const audioSound=async()=>{
        try {
            const { sound: playbackObject } = await Audio.Sound.createAsync(
                { uri: video_ },
                { shouldPlay: true }
              );

        } catch (error) {
            console.error(error.message)
        }
   
    }
    return (
        <View style={[{width:width},styles.container]}>
          <Video
            ref={video}
            style={[styles.video,{width:width,height:400}]}
            source={{
              uri:video_,
            }}
            useNativeControls
            resizeMode="stretch"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
          <View style={[styles.buttons,]}>
            <Button
              title={status.isPlaying ? 'Pause' : 'Play'}
              onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
              }
            />
          </View>
        </View>
      );
}

export default ExpoVideo

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  video:{
    
  },
  buttons:{
    marginTop:10,
    marginBottom:10,
    width:"100%"
  }
})