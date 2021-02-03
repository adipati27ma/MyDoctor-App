import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyDoc3 } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Other() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoc3} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Oh tentu saja tidak karena jeruk itu sangat sehat...
          </Text>
        </View>
        <Text style={styles.date}>4.45 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  content: {},
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    backgroundColor: colors.primary,
    maxWidth: '80%',
    padding: 12,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
