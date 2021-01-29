import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  ILCatUmum,
  ILCatAnak,
  ILCatObat,
  ILCatPsikiater,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function DoctorCategory({ category }) {
  const Icon = () => {
    switch (category) {
      case 'dokter anak':
        return <ILCatAnak style={styles.illustration} />;
      case 'psikiater':
        return <ILCatPsikiater style={styles.illustration} />;
      case 'dokter obat':
        return <ILCatObat style={styles.illustration} />;

      default:
        return <ILCatUmum style={styles.illustration} />;
    }
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 130,
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
