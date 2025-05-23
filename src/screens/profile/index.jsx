import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import {colors, fontType} from '../../theme';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {users} from '../../data';
import {Edit2} from 'iconsax-react-native';
import {StadiumSmall} from '../../components';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

const user = users[0];

const Profile = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const [stadiums, setStadiums] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStadiums = async () => {
    try {
      const stadiumsCollection = collection(db, 'stadiums');
      const snapshot = await getDocs(stadiumsCollection);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStadiums(data);
      setLoading(false);
    } catch (error) {
      console.error('Gagal mengambil data stadion:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, 'stadiums', id);
      await deleteDoc(docRef);
      setStadiums(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Gagal menghapus stadion:', error);
    }
  };

  useEffect(() => {
    getStadiums();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getStadiums().then(() => setRefreshing(false));
  }, []);

  useFocusEffect(
    useCallback(() => {
      getStadiums();
    }, []),
  );

  return (
    <View
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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

      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color={colors.blue()} />
        ) : stadiums.length === 0 ? (
          <Text style={{textAlign: 'center', color: colors.black()}}>
            Tidak ada data stadion.
          </Text>
        ) : (
          <StadiumSmall stadiums={stadiums} onDelete={handleDelete} />
        )}
      </ScrollView>
    </View>
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
    marginBottom: 10,
  },
  buttonText: {
    color: colors.white(),
    fontFamily: fontType['Bold'],
  },
  addButton: {
    backgroundColor: colors.yellow(),
    padding: 15,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    zIndex: 10,
  },
});

export default Profile;
