import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { DummyTopRatedDoc1 } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListMessages() {
  return (
    <View style={styles.container}>
      <Image source={DummyTopRatedDoc1} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.desc}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  textWrapper: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
