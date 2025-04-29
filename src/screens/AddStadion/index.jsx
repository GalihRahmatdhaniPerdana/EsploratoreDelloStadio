import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const AddStadion = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: '',
    location: '',
    info: '',
    capacity: '',
    tahun: '',
    image: null
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Blog Terkirim', JSON.stringify(form, null, 2));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 style={styles.icon} size="20" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>Add Stadion</Text>
      </View>
      <View style={styles.card}>
      <Text style={styles.label}>Image</Text>
      <TouchableOpacity  style={styles.imagePicker}>
          <Text style={{ color: '#888' }}>Pilih Gambar</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama blog"
        placeholderTextColor="#888"
        value={form.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Lokasi"
        placeholderTextColor="#888"
        value={form.location}
        onChangeText={(text) => handleChange('location', text)}
      />

      <Text style={styles.label}>Info</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Deskripsi atau info blog"
        placeholderTextColor="#888"
        multiline
        value={form.info}
        onChangeText={(text) => handleChange('info', text)}
      />

      <Text style={styles.label}>Capacity</Text>
      <TextInput
        style={styles.input}
        placeholder="Kapasitas"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={form.capacity}
        onChangeText={(text) => handleChange('capacity', text)}
      />

      <Text style={styles.label}>Tahun</Text>
      <TextInput
        style={styles.input}
        placeholder="Tahun dibuat"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={form.tahun}
        onChangeText={(text) => handleChange('tahun', text)}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit} >
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>
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
  label: {
    color: colors.white(),
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  imagePicker: {
    width: 150,
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
    overflow: 'hidden'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover'
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    color: colors.white(),
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: colors.yellow(),
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white(),
    fontFamily: fontType['Bold'],
  },
});

export default AddStadion;
