import { Home, Menu, Notification, SearchNormal, StatusUp, UserOctagon,} from 'iconsax-react-native';
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Pressable,} from 'react-native';
import {colors, fontType} from '../../theme';
import {stadiums} from '../../data';
import { StadiumList } from '../../components';


export default function Beranda() {
  const [selectedTab, setSelectedTab] = useState('Indonesia');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.icons}>
          <Menu size="32" color="#FFF" />
        </View>
        <Text style={styles.title}>ESPLORATORE</Text>
        <View style={styles.icons}>
          <Notification size="32" color="#FFF" />
          <Text style={styles.notif}>2</Text>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Indonesia' && {backgroundColor: '#FF9800'},
            {borderBottomLeftRadius: 5},
            {borderTopLeftRadius: 5},
          ]}
          onPress={() => setSelectedTab('Indonesia')}>
          <Text style={styles.tabText}>Indonesia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'London' && {backgroundColor: '#FF9800'},
          ]}
          onPress={() => setSelectedTab('London')}>
          <Text style={styles.tabText}>London</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Spanyol' && {backgroundColor: '#FF9800'},
          ]}
          onPress={() => setSelectedTab('Spanyol')}>
          <Text style={styles.tabText}>Spanyol</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.tab,
            {width: '35%'},
            {flexDirection: 'row'},
            {backgroundColor: colors.white()},
            {borderBottomRightRadius: 5},
            {borderTopRightRadius: 5},
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Cari..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Pressable style={styles.button}>
            <SearchNormal size={20} color={colors.yellow()} />
          </Pressable>
        </View>
      </View>

      {/* Promo Banner */}
      <View style={styles.banner}>
        <View style={styles.decorSatu} />
        <Image
          source={require('../../assets/images/banner.png')}
          style={styles.image}
        />
        <View style={styles.decorDua} />
      </View>

      {/* stadion Listings */}
      <StadiumList stadiums={stadiums} selectedTab={selectedTab} />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Home size="32" color={colors.yellow()} />
          <Text style={[styles.footerButtonText, {color: colors.yellow()}]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <StatusUp size="32" color={colors.white()} />
          <Text style={styles.footerButtonText}>Stat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <UserOctagon size="32" color={colors.white()} />
          <Text style={styles.footerButtonText}>My Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: colors.black(),
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notif: {
    position: 'absolute',
    right: -2,
    fontSize: 10,
    color: colors.white(),
    backgroundColor: colors.yellow(),
    padding: 2,
    paddingHorizontal: 6,
    borderRadius: 100,
  },
  title: {
    color: colors.yellow(),
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: fontType['Bold'],
  },
  tabContainer: {
    margin: 'auto',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.grey(),
  },
  tab: {
    alignItems: 'center',
    width: '20%',
  },
  tabText: {
    padding: 10,
    color: colors.white(),
    fontSize: 12,
    fontFamily: fontType['ExtraBold'],
  },
  input: {
    width: '73%',
  },
  button: {
    backgroundColor: colors.grey(),
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
    width: 40,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black(),
    marginVertical: 20,
  },
  decorSatu: {
    width: 10,
    height: 100,
    backgroundColor: colors.blue(),
    marginRight: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  decorDua: {
    width: 10,
    height: 100,
    backgroundColor: colors.yellow(),
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    width: '90%',
    height: 120,
    borderRadius: 10,
  },
  bannerButton: {
    color: colors.white(),
    marginTop: 5,
    fontFamily: fontType['Medium'],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: colors.grey(),
    gap: '20%',
  },
  footerButton: {
    padding: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    color: colors.white(),
    fontSize: 16,
    fontFamily: fontType['Medium'],
  },
});

const stadion = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
});
