import {  ArrowUp,  Home,  Menu,  Notification,  Profile2User,  SearchNormal,  StatusUp,  UserOctagon,} from 'iconsax-react-native';
import React from 'react';
import {  View,  Text,  ScrollView,  StyleSheet,  TouchableOpacity,  Image,  TextInput,  Pressable,} from 'react-native';
import {colors, fontType} from './src/theme';

export default function App() {
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
            {backgroundColor: '#FF9800'},
            {borderBottomLeftRadius: 5},
            {borderTopLeftRadius: 5},
          ]}>
          <Text style={styles.tabText}>Indonesia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>London</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
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
          <TextInput style={styles.input} placeholder="Cari..." />
          <Pressable style={styles.button}>
            <SearchNormal size={20} color={colors.yellow()} />
          </Pressable>
        </View>
      </View>

      {/* Promo Banner */}
      <View style={styles.banner}>
        <View style={styles.decorSatu} />
        <Image
          source={require('./src/assets/images/banner.png')}
          style={styles.image}
        />
        <View style={styles.decorDua} />
      </View>

      {/* stadion Listings */}
      <ScrollView contentContainerStyle={stadion.container}>
        <View style={stadion.card}>
          <View style={stadion.capacityContainer}>
            <View style={stadion.capacity}>
              <View style={stadion.capacityIcon}>
                <Profile2User size="24" color={colors.white()} />
              </View>
              <Text style={stadion.capacityText}>2Jt Jiwa</Text>
            </View>
            <View style={stadion.iconContainer}>
              <ArrowUp size="32" color="#FF8A65" style={stadion.icon} />
            </View>
          </View>
          <Text style={stadion.tittle}>Stadion</Text>
          <Text style={stadion.tittle}>Gelora BungKarno</Text>
          <Text style={stadion.infoText}>
            Salah satu stadion tertua di Indonesia
          </Text>
          <Image
            source={require('./src/assets/images/gelora-bungkarno.webp')}
            style={stadion.image}
          />
        </View>
        <View style={stadion.card}>
          <View style={stadion.capacityContainer}>
            <View style={stadion.capacity}>
              <View style={stadion.capacityIcon}>
                <Profile2User size="24" color={colors.white()} />
              </View>
              <Text style={stadion.capacityText}>2Jt Jiwa</Text>
            </View>
            <View style={stadion.iconContainer}>
              <ArrowUp size="32" color="#FF8A65" style={stadion.icon} />
            </View>
          </View>
          <Text style={stadion.tittle}>Stadion</Text>
          <Text style={stadion.tittle}>Gajayana Malang</Text>
          <Text style={stadion.infoText}>Salah satu stadion di Malang</Text>
          <Image
            source={require('./src/assets/images/Gajayana_Stadium.jpg')}
            style={stadion.image}
          />
        </View>
        <View style={stadion.card}>
          <View style={stadion.capacityContainer}>
            <View style={stadion.capacity}>
              <View style={stadion.capacityIcon}>
                <Profile2User size="24" color={colors.white()} />
              </View>
              <Text style={stadion.capacityText}>2Jt Jiwa</Text>
            </View>
            <View style={stadion.iconContainer}>
              <ArrowUp size="32" color="#FF8A65" style={stadion.icon} />
            </View>
          </View>
          <Text style={stadion.tittle}>Stadion</Text>
          <Text style={stadion.tittle}>Teladan Medan</Text>
          <Text style={stadion.infoText}>Salah satu stadion di Medan</Text>
          <Image
            source={require('./src/assets/images/stadion-teladan-medan.jpeg')}
            style={stadion.image}
          />
        </View>
      </ScrollView>

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
  card: {
    marginBottom: 15,
    backgroundColor: colors.grey(),
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,
    elevation: 5,
    padding: 5,
    width: '100%',
  },
  capacityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  capacity: {
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black(),
    padding: 5,
    borderRadius: 50,
  },
  capacityIcon: {
    padding: 3,
    borderRadius: 50,
    backgroundColor: colors.yellow(),
  },
  capacityText: {
    fontSize: 16,
    fontFamily: fontType['Light'],
    marginTop: -5,
    marginLeft: 10,
    color: colors.white(),
  },
  tittle: {
    fontSize: 38,
    fontFamily: fontType['ExtraBold'],
    color: colors.white(),
    marginVertical: -10,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  infoText: {
    fontSize: 18,
    color: colors.white(),
    fontFamily: fontType['Light'],
    marginVertical: 15,
    marginHorizontal: 10,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.white(),
  },
  icon: {
    transform: [{rotate: '45deg'}],
  },
});
