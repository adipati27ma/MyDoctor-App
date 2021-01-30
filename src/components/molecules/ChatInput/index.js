import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';

export default function ChatInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Nairobi"
        // placeholderTextColor={colors.text.disabled}
      />
      <Button type="btn-icon-send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disabled,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    maxHeight: 45,
  },
});
