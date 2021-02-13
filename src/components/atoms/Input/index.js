import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, fonts } from '../../../utils';

export default function Input({ label }) {
  const [border, setBorder] = useState(colors.border);

  const onFocusForm = () => {
    setBorder(colors.blue);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: 6,
  },
});
