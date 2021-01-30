import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconSendDark, IconSendLight } from '../../../assets';
import { colors } from '../../../utils';

export default function BtnIconSend({ disable }) {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDark />}
      <IconSendLight />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (disable) => ({
    width: 45,
    height: 45,
    backgroundColor: disable ? colors.disabled : colors.blue,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
