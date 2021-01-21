import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Button({ type, title }) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type == 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    color: type == 'secondary' ? '#112340' : 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    // fontWeight: '600',
    textAlign: 'center',
  }),
});
