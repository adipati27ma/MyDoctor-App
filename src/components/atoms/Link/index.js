import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors, fonts } from '../../../utils';

export default function Link({ title, size = 16, align = 'left', onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
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
