import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { Component } from "react";
import { Box, Stack } from "@react-native-material/core";
import packages from "../extra/packages";
import { useRouter, Link, withRouter } from "expo-router";
import { NavigationProp, Route } from "@react-navigation/native";
// import { Route } from 'expo-router';

export class Packages extends Component {
  constructor(props) {
    super(props);
    this.width = props.width;
    this.packages = { loaded: false, data: packages };
    this.url = "https://new-master.s3.ca-central-1.amazonaws.com/static";
  }

  componentDidMount() {
    if (this.packages.data) {
      this.packages = { loaded: true, data: packages };
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>PACKAGES</Text>
        <ScrollView
          horizontal={false}
          vertical={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          snapToStart={true}
          style={[styles.scrollview]}
        >
          {this.packages.loaded &&
            this.packages.data.map((obj, index) => (
              <Stack
                direction="column"
                key={`${obj.id}--${index}`}
                style={[styles.stack1, { width: this.width }]}
              >
                <Text>name:{obj.name}</Text>
                <Text>Special Offer{obj.specialOffer}</Text>
                <Text>monthly:${obj.monthly}.00</Text>
                <Link href={`/packageDetail/?id=${obj.id}`}>
                  <TouchableOpacity
                    style={{ margin: "auto", width: this.width }}
                  >
                    <Image
                      source={{ uri: `${this.url}/${obj.image}` }}
                      alt="www"
                      style={[styles.image, { width: this.width }]}
                    />
                  </TouchableOpacity>
                </Link>
              </Stack>
            ))}
        </ScrollView>
      </View>
    );
  }
}

export default Packages;
const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    maxHeight: 500,
    border: "1px solid red",
    // overflowX:"hidden",
  },
  scrollview: {
    height: 400,
  },
  stack1: {
    justifyContent: "flex-start",
    alignItems: "center",
    // height:"100%",
  },
  image: {
    margin: "auto",
    height: 300,
  },
});
