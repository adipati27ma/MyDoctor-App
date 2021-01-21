import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Link({ title, size = 16, align = 'left' }) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
