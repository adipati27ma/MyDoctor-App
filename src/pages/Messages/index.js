import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DummyDoc1, DummyDoc2, DummyDoc3 } from '../../assets';
import { ListMessages } from '../../components';
import { colors, fonts } from '../../utils';

export default function Messages() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profilePic: DummyDoc1,
      name: 'Alexander Jannie',
      lastMessage: 'Baik bu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profilePic: DummyDoc3,
      name: 'Nairobi Putri Hayza',
      lastMessage: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profilePic: DummyDoc2,
      name: 'John McParker Steve',
      lastMessage: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => (
          <ListMessages
            key={doctor.id}
            profilePic={doctor.profilePic}
            name={doctor.name}
            lastMessage={doctor.lastMessage}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
