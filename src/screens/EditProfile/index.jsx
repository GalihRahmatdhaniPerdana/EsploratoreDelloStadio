import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

const EditProfile = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    nama: '',
    bio: '',
    alamat: '',
    email: '',
    telepon: '',
  });

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 style={styles.icon} size="20" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.image}>
          <Text style={{color: '#aaa'}}>Pilih Foto</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Nama</Text>
        <TextInput
          style={styles.input}
          value={form.nama}
          onChangeText={text => handleChange('nama', text)}
          placeholderTextColor="#888"
          placeholder="Masukkan nama"
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, {height: 100}]}
          value={form.bio}
          onChangeText={text => handleChange('bio', text)}
          placeholderTextColor="#888"
          placeholder="Tuliskan bio singkat"
          multiline
        />

        <Text style={styles.label}>Alamat</Text>
        <TextInput
          style={styles.input}
          value={form.alamat}
          onChangeText={text => handleChange('alamat', text)}
          placeholderTextColor="#888"
          placeholder="Masukkan alamat"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          onChangeText={text => handleChange('email', text)}
          placeholderTextColor="#888"
          placeholder="Masukkan email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Telepon</Text>
        <TextInput
          style={styles.input}
          value={form.telepon}
          onChangeText={text => handleChange('telepon', text)}
          placeholderTextColor="#888"
          placeholder="Masukkan no. telepon"
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.buttonContainer}>
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
    backgroundColor: colors.grey(),
    padding: 16,
  },
  label: {
    color: colors.white(),
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
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

export default EditProfile;
