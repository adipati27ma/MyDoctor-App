import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import {
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function TabItem({ title, isActive, onPress, onLongPress }) {
  const Icon = () => {
    if (title === 'Doctor') {
      return isActive ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return isActive ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return isActive ? <IconHospitalsActive /> : <IconHospitals />;
    }
    return <IconDoctor />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(isActive)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isActive) => ({
    color: isActive ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    fontSize: 10,
    marginTop: 4,
  }),
});
