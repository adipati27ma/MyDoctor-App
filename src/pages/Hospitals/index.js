import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILHospitalsBG,
} from '../../assets';
import { ListHospital } from '../../components';
import { colors, fonts } from '../../utils';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalsBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Happy Family Kids"
          address="Jln. Surya Sejahtera 25"
          pic={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 35"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  background: {
    height: 270,
    paddingTop: 60,
    marginTop: -30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
