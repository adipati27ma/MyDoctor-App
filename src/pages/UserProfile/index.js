import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Gap, Header, List, Profile } from '../../components';
import { colors } from '../../utils';

export default function UserProfile({ navigation }) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        nextIcon
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        nextIcon
        icon="language"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        nextIcon
        icon="rate"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        nextIcon
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
