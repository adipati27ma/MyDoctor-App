import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button, Gap, Header, Input, Profile } from '../../components';
import { colors } from '../../utils';

export default function UpdateProfile({ navigation }) {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <View style={styles.content}>
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
          <Gap height={48} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
  },
});
