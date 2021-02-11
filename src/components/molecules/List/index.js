import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  IconNext,
  IconEditProfile,
  IconLanguage,
  IconRate,
  IconHelp,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function List({
  profilePic,
  name,
  desc,
  nextIcon,
  onPress,
  icon,
}) {
  const Icon = () => {
    if (icon === 'edit-profile') return <IconEditProfile />;
    if (icon === 'language') return <IconLanguage />;
    if (icon === 'rate') return <IconRate />;
    if (icon === 'help') return <IconHelp />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon ? <Icon /> : <Image source={profilePic} style={styles.avatar} />}
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {nextIcon && <IconNext />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 16,
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
