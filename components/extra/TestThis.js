import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fetch from 'react-native-fetch';
const packageUrl='https://newmasterconnect.herokuapp.com/api/account/product/';
const TestThis = () => {
  return (
    <View style={styles.container}>
        <Fetch
          url={packageUrl}
          retries={3}
          timeout={3000}
          onResponse={async (res) => {
            const json = await res.json()
            console.log(json)
          }}
          onError={console.error}
        />
      </View>
  )
}

export default TestThis

const styles = StyleSheet.create({})