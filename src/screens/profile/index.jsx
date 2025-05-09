import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {colors, fontType} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {users} from '../../data';
import {Edit2} from 'iconsax-react-native';

const user = users[0];

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={user.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informasi Profil</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Alamat:</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.buttonText}>Edit Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddStadion')}>
        <Edit2 color={colors.white()} variant="Linear" size={20} />
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
    backgroundColor: colors.yellow(),
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white(),
    fontFamily: fontType['Bold'],
  },
  addButton: {
    backgroundColor: colors.yellow(),
    padding: 15,
    position: 'absolute',
    bottom: -320,
    right: 0,
    borderRadius: 50,
  },
});

export default Profile;
