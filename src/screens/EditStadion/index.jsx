import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';

const EditStadion = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;

  const [form, setForm] = useState({
    name: '',
    location: '',
    info: '',
    capacity: '',
    year: '',
    image: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://682515710f0188d7e72bec20.mockapi.io/api/stadium/${id}`,
        );
        const data = response.data;
        setForm({
          name: data.name || '',
          location: data.location || '',
          info: data.info || '',
          capacity: String(data.capacity || ''),
          year: String(data.year || ''),
          image: data.image || '',
        });
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Gagal mengambil data stadion');
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (field, value) => {
    setForm({...form, [field]: value});
  };

  const handleSubmit = async () => {
    try {
      if (!form.name || !form.location || !form.capacity || !form.year) {
        Alert.alert('Error', 'Mohon lengkapi semua data yang wajib diisi');
        return;
      }

      const payload = {
        name: form.name,
        location: form.location,
        info: form.info,
        capacity: Number(form.capacity),
        year: Number(form.year),
        image: form.image,
        updatedAt: new Date(),
      };

      const response = await axios.put(
        `https://682515710f0188d7e72bec20.mockapi.io/api/stadium/${id}`,
        payload,
      );

      if (response.status === 200) {
        Alert.alert('Sukses', 'Data stadion berhasil diperbarui');
        navigation.goBack();
      } else {
        Alert.alert('Gagal', 'Terjadi kesalahan saat memperbarui data');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Gagal memperbarui data: ' + error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 style={styles.icon} size="20" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>Edit Stadion</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan URL gambar stadion"
          placeholderTextColor="#888"
          value={form.image}
          onChangeText={text => handleChange('image', text)}
        />

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama stadion"
          placeholderTextColor="#888"
          value={form.name}
          onChangeText={text => handleChange('name', text)}
        />

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Lokasi"
          placeholderTextColor="#888"
          value={form.location}
          onChangeText={text => handleChange('location', text)}
        />

        <Text style={styles.label}>Info</Text>
        <TextInput
          style={[styles.input, {height: 100}]}
          placeholder="Deskripsi atau info"
          placeholderTextColor="#888"
          multiline
          value={form.info}
          onChangeText={text => handleChange('info', text)}
        />

        <Text style={styles.label}>Capacity</Text>
        <TextInput
          style={styles.input}
          placeholder="Kapasitas"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={form.capacity}
          onChangeText={text => handleChange('capacity', text)}
        />

        <Text style={styles.label}>Tahun</Text>
        <TextInput
          style={styles.input}
          placeholder="Tahun dibuat"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={form.year}
          onChangeText={text => handleChange('year', text)}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Simpan Perubahan</Text>
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
    alignItems: 'center',
  },
  text: {
    color: colors.white(),
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  card: {
    marginTop: 90,
    borderRadius: 10,
    elevation: 5,
    minHeight: '100%',
    backgroundColor: colors.grey(),
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
    overflow: 'hidden',
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

export default EditStadion;
