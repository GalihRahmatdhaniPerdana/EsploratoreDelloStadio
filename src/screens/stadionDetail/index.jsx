import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {stadiums} from '../../data';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';

const stadium = stadiums[0];

const StadionDetail = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 style={styles.icon} size="20" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>Detail</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.gambar} source={stadium.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{stadium.name}</Text>
          <Text style={styles.location}>{stadium.location}</Text>
          <Text style={styles.year}>Dibangun: {stadium.tahun}</Text>
          <Text style={styles.capacity}>Kapasitas: {stadium.capacity}</Text>
          <Text style={styles.infoTitle}>Informasi</Text>
          <Text style={styles.info}>{stadium.info}</Text>
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
