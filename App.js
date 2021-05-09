import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './component/Header'


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090e11',
  },
  text: {
    textAlign: 'center',
    fontSize: 33,
    color: 'white'
  }
});
