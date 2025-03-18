import {  Home,  Menu,  Notification,  SearchNormal,  StatusUp,  UserOctagon,} from 'iconsax-react-native';
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
          <Text style={styles.tabText}>FIFA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>PSSI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>U21</Text>
        </TouchableOpacity>
        <View style={[styles.tab, {width: '35%',}, {flexDirection: 'row'}, {backgroundColor: colors.white()}, {borderBottomRightRadius: 5},
            {borderTopRightRadius: 5}]}>
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

      {/* Game Listings */}
      <ScrollView>
        <View style={styles.gameContainer}>
          <View style={styles.gameCard}>
            <Text style={styles.gameTime}>07:30 PM</Text>
            <View style={styles.game}>
              <View style={styles.gameClub}>
                <Image
                  source={require('./src/assets/images/Arema.png')}
                  style={styles.gameLogo}
                />
                <Text style={styles.gameDetails}>AREMA</Text>
              </View>
              <View style={styles.gameDesk}>
                <Text style={styles.gameVs}> VS </Text>
              </View>
              <View style={styles.gameClub}>
                <Image
                  source={require('./src/assets/images/madura.png')}
                  style={styles.gameLogo}
                />
                <Text style={styles.gameDetails}>MADURA UNITED</Text>
              </View>
            </View>
            <Text style={styles.prize}>Predictions: MADURA UNITED</Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={styles.gameTime}>07:30 PM</Text>
            <View style={styles.game}>
              <View style={styles.gameClub}>
                <Image
                  source={require('./src/assets/images/persib.png')}
                  style={styles.gameLogo}
                />
                <Text style={styles.gameDetails}>PERSIB</Text>
              </View>
              <View style={styles.gameDesk}>
                <Text style={styles.gameVs}> VS </Text>
              </View>
              <View style={styles.gameClub}>
                <Image
                  source={require('./src/assets/images/Persija.png')}
                  style={styles.gameLogo}
                />
                <Text style={styles.gameDetails}>PERSIJA</Text>
              </View>
            </View>
            <Text style={styles.prize}>Predictions: PERSIJA</Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={styles.gameTime}>07:30 PM</Text>
            <View style={styles.game}>
              <View style={styles.gameClub}>
                <Image
                  source={require('./src/assets/images/Arema.png')}
                  style={styles.gameLogo}
                />
                <Text style={styles.gameDetails}>AREMA</Text>
              </View>
              <View style={styles.gameDesk}>
                <Text style={styles.gameVs}> VS </Text>
              </View>
              <View style={styles.gameClub}>
                <Image
                  source={require('./src/assets/images/madura.png')}
                  style={styles.gameLogo}
                />
                <Text style={styles.gameDetails}>MADURA UNITED</Text>
              </View>
            </View>
            <Text style={styles.prize}>Predictions: AREMA</Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={styles.gameTime}>07:30 PM</Text>
            <View style={styles.game}>
              <View style={styles.gameClub}>
                <Image
                  source={require('./src/assets/images/persib.png')}
                  style={styles.gameLogo}
                />
                <Text style={styles.gameDetails}>PERSIB</Text>
              </View>
              <View style={styles.gameDesk}>
                <Text style={styles.gameVs}> VS </Text>
              </View>
              <View style={styles.gameClub}>
                <Image
                  source={require('./src/assets/images/Persija.png')}
                  style={styles.gameLogo}
                />
                <Text style={styles.gameDetails}>PERSIJA</Text>
              </View>
            </View>
            <Text style={styles.prize}>Predictions: PERSIB</Text>
          </View>
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
    fontSize: 20,
    fontFamily: fontType['ExtraBold'],
  },
  input: {
    width: '73%'
  },
  button:{
    backgroundColor: colors.grey(),
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
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
  gameContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  gameCard: {
    marginVertical: 10,
    backgroundColor: colors.grey(),
    width: '100%',
    borderRadius: 10,
  },
  game: {
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  gameDesk: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  gameLogo: {
    width: 100,
    height: 100,
  },
  gameTime: {
    margin: 'auto',
    paddingTop: 10,
    color: colors.yellow(),
    fontSize: 16,
    fontFamily: fontType['Medium'],
  },
  gameVs: {
    marginVertical: 15,
    color: colors.white(),
    fontSize: 32,
    fontFamily: fontType['Bold'],
  },
  gameDetails: {
    marginTop: 20,
    color: colors.white(),
    fontSize: 12,
    fontFamily: fontType['Regular'],
  },
  gameClub: {
    alignItems: 'center',
  },
  prize: {
    borderTopColor: colors.black(0.5),
    borderTopWidth: 0.4,
    color: colors.yellow(),
    fontSize: 16,
    padding: 10,
    fontFamily: fontType['Light'],
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
