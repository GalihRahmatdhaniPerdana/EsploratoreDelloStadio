// Profile.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { colors, fontType } from '../../theme';

const Profile = () => {
  const user = {
    name: 'Galih',
    bio: 'Coffee Lover',
    location: 'Malang, Indonesia',
    email: 'galih@gmail.com',
    phone: '+62 812-3456-7890',
    profileImage: require('../../assets/images/profile.jpeg'),
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={user.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informasi Kontak</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Lokasi:</Text>
          <Text style={styles.infoValue}>{user.location}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Telepon:</Text>
          <Text style={styles.infoValue}>{user.phone}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black(),
    padding: 16,
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white(),
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    color: colors.white(),
    fontFamily: fontType['ExtraBold'],
},
bio: {
    fontSize: 16,
    fontFamily: fontType['Light'],
    color: colors.grey(),
    textAlign: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: colors.grey(),
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: fontType['Bold'],
    marginBottom: 10,
    color: colors.white(),
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
    fontFamily: fontType['Medium'],
    color: colors.white(),
  },
  infoValue: {
    fontFamily: fontType['Medium'],
    color: colors.white(),
  },
  button: {
    backgroundColor: colors.white(),
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.black(),
    fontFamily: fontType['Bold'],
  },
});

export default Profile;
