import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../utils';
import { Button, Gap } from '../../atoms';

export default function Header({ onPress }) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>Text Header</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
  },
});
