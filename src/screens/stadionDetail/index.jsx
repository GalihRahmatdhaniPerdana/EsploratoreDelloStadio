import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const StadionDetail = ({route}) => {
  const {id} = route.params;
  const navigation = useNavigation();
  const [stadion, setStadion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStadion();
  });

  const fetchStadion = async () => {
    try {
      const docRef = doc(db, 'stadiums', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setStadion({id: docSnap.id, ...docSnap.data()});
      } else {
        Alert.alert('Not Found', 'Stadion tidak ditemukan');
      }
    } catch (error) {
      Alert.alert('Error', `Gagal mengambil data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.blue()} />
      </View>
    );
  }

  if (!stadion) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{color: colors.black()}}>Stadion tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 style={styles.icon} size="20" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>Detail</Text>
      </View>
      <View style={styles.card}>
        {stadion.image ? (
          <Image style={styles.gambar} source={{uri: stadion.image}} />
        ) : (
          <Text style={styles.info}>Tidak ada gambar</Text>
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{stadion.name}</Text>
          <Text style={styles.location}>{stadion.location}</Text>
          <Text style={styles.year}>Dibangun: {stadion.year}</Text>
          <Text style={styles.capacity}>Kapasitas: {stadion.capacity}</Text>
          <Text style={styles.infoTitle}>Informasi</Text>
          <Text style={styles.info}>{stadion.info}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black(),
  },
  header: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    top: 50,
    left: 0,
    paddingHorizontal: 16,
    zIndex: 100,
  },
  text: {
    color: colors.white(),
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 90,
    borderRadius: 10,
    elevation: 5,
    height: '100%',
    backgroundColor: colors.grey(), // Ganti dengan warna latar belakang yang lebih cerah
    padding: 16,
  },
  gambar: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 16,
  },
  title: {
    fontFamily: fontType['ExtraBold'],
    fontSize: 28,
    color: colors.white(),
  },
  location: {
    fontFamily: fontType['Medium'],
    fontSize: 18,
    color: colors.white(),
    marginBottom: 4,
  },
  year: {
    fontFamily: fontType['Regular'],
    color: colors.white(),
    fontSize: 16,
    marginBottom: 4,
  },
  capacity: {
    fontFamily: fontType['Regular'],
    color: colors.white(),
    fontSize: 16,
    marginBottom: 16,
  },
  infoTitle: {
    fontFamily: fontType['Bold'],
    color: colors.white(),
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 10,
  },
  info: {
    fontFamily: fontType['Light'],
    color: colors.white(),
    fontSize: 14,
    lineHeight: 20,
  },
});

export default StadionDetail;
