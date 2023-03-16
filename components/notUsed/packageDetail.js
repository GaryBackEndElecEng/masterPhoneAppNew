import { StyleSheet, Text, View, ScrollView } from "react-native";
import packages from "../extra/packages";
import React, { Component } from "react";
import { useSearchParams } from "expo-router";

export default class packageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.packages = { loaded: false, data: packages };
    this.setState = { isPackages: false };
    this.package = {};
  }
  param() {
    const params = useSearchParams();
    const id = this.params.id;
    console.log("ID", id);
    return id;
  }

  componentDidMount() {
    if (this.packages.data) {
      this.setState = { isPackages: true };
      this.packages = { loaded: true, data: packages };
      this.package = this.packages.data.filter(
        (obj) => parseInt(obj.id) === parseInt(this.param())
      )[0];
    }
    console.log(this.packages);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.package && <Text>packages detail: {this.package.name}</Text>}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  scroll: {
    margin: "auto",
  },
});
