import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { DummyUser, IconRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Profile({ name, desc }) {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
        <IconRemovePhoto style={styles.iconPhoto} />
      </View>
      {name && <Text style={styles.name}>{name}</Text>}
      {desc && <Text style={styles.profession}>{desc}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
  },
  iconPhoto: {
    position: 'absolute',
    right: 6,
    bottom: 8,
  },
});
