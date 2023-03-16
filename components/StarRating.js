import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Stack } from "@react-native-material/core";

const StarRating = ({ rating }) => {
  function rate(rating) {
    let arr = [],
      j = 0;
    for (let i = 1; i <= rating; i++) {
      if (i <= rating) {
        arr.push(<AntDesign name="star" size={24} color="gold" key={i} />);
        j++;
      } else if (rating % 2 > 0) {
        arr.push(
          <FontAwesome name="star-half" size={24} color="gold" key={i} />
        );
        j++;
      } else {
        for (let k = rating; k <= 5; k++) {
          arr.push(<AntDesign name="star" size={24} color="white" key={k} />);
        }
      }
    }
    return arr;
  }
  return (
    <Stack direction="row" spacing={2} style={styles.container} key={"tryThis"}>
      {rate(rating)}
    </Stack>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
