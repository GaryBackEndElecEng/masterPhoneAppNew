import React, {useState, useRef} from 'react';
import { Animated, PanResponder, View, Image, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },  
  moviePoster_posterStyle: {
    resizeMode: "cover"
  }
});

const ImageScreen = () => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

    return (
      <View style={style.mainView}
        onStartShouldSetResponderCapture={() => {return false}}>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }]
          }}
          {...panResponder.panHandlers}
        >
          <Image
              style={style.moviePoster_posterStyle}
              source={require("../../assets/This_Gun_for_Hire_(1942)_poster.jpg")}
          />
        </Animated.View>
      </View>
    )


};

export default ImageScreen;