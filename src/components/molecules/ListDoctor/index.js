import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { IconNext } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListDoctor({ profilePic, name, desc, nextIcon }) {
  return (
    <View style={styles.container}>
      <Image source={profilePic} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {nextIcon && <IconNext />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  textWrapper: {
    justifyContent: 'center',
    flex: 1,
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
