import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../../../utils';

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
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
