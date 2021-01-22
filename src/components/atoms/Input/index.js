import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '../../../utils';

export default function Input({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    padding: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: colors.text.secondary,
    marginBottom: 6,
  },
});
