import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Add, ArrowLeft2 } from 'iconsax-react-native';
import { colors, fontType } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { collection, addDoc } from 'firebase/firestore';
import ImageCropPicker from 'react-native-image-crop-picker';
import FastImage from '@d11/react-native-fast-image';
import { db } from '../../config/firebase'; // ✅ pastikan path ini benar

const AddStadion = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    location: '',
    info: '',
    capacity: '',
    year: '',
    image: null,
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleImagePick = async () => {
    try {
      const img = await ImageCropPicker.openPicker({
        width: 1920,
        height: 1080,
        cropping: true,
      });

      setImage(img.path); // for UI
      setForm({ ...form, image: img.path }); // for upload
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    if (!form.name || !form.location || !image) {
      alert('Mohon lengkapi semua field termasuk gambar.');
      return;
    }

    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setLoading(true);
    try {
      const imageFormData = new FormData();
      imageFormData.append('file', {
        uri: image,
        type: `image/${extension}`,
        name: filename,
      });

      const result = await fetch('https://backend-file-praktikum.vercel.app/upload/', {
        method: 'POST',
        body: imageFormData,
      });

      if (result.status !== 200) {
        throw new Error('Gagal upload gambar');
      }

      const { url } = await result.json();

      const stadiumsRef = collection(db, 'stadiums');
      await addDoc(stadiumsRef, {
        name: form.name,
        location: form.location,
        info: form.info || '',
        capacity: form.capacity,
        year: form.year,
        image: url,
        createdAt: new Date(),
      });

      setLoading(false);
      console.log('Stadion berhasil ditambahkan!');
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      console.error('Terjadi kesalahan:', error.message);
    }
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
        {image ? (
          <View style={{ position: 'relative',justifyContent: 'center', alignItems: 'center', }}>
            <FastImage
              style={{ width: 150, height: 150, borderRadius: 5 }}
              source={{
                uri: image,
                headers: { Authorization: 'someAuthToken' },
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={styles.removeImageButton}
              onPress={() => {
                setImage(null);
                setForm({ ...form, image: null });
              }}
            >
              <Add
                size={20}
                variant="Linear"
                color={colors.white()}
                style={{ transform: [{ rotate: '45deg' }] }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
            <Text style={{ color: '#888' }}>Pilih Gambar</Text>
          </TouchableOpacity>
        )}

        {/* Input Fields */}
        {[
          { label: 'Nama Stadion', key: 'name', placeholder: 'Nama stadion' },
          { label: 'Lokasi', key: 'location', placeholder: 'Lokasi' },
          { label: 'Info', key: 'info', placeholder: 'Deskripsi atau info stadion', multiline: true },
          { label: 'Kapasitas', key: 'capacity', placeholder: 'Kapasitas' },
          { label: 'Tahun', key: 'year', placeholder: 'Tahun dibuat' },
        ].map(({ label, key, placeholder, multiline }) => (
          <React.Fragment key={key}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={[styles.input, multiline && { height: 100 }]}
              placeholder={placeholder}
              placeholderTextColor="#888"
              value={form[key]}
              onChangeText={(text) => handleChange(key, text)}
              multiline={multiline}
            />
          </React.Fragment>
        ))}

        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Menyimpan...' : 'Simpan'}</Text>
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
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
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
