import {Menu, Notification, SearchNormal} from 'iconsax-react-native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import {colors, fontType} from '../../theme';
import {stadiums} from '../../data';
import {StadiumList} from '../../components';

const tabWidth = 80;
export default function Beranda() {
  const [translateX] = useState(new Animated.Value(0));
  const handleTabPress = (tab, index) => {
    setSelectedTab(tab);
    Animated.timing(translateX, {
      toValue: index * tabWidth,
      duration: 250,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchBarWidth = useState(new Animated.Value(0))[0];
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    Animated.timing(searchBarWidth, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const handleSearchBlur = () => {
    Animated.timing(searchBarWidth, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsSearchFocused(false);
    });
  };
  const animatedWidth = searchBarWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['35%', '100%'],
  });

  const scrollY = useState(new Animated.Value(0))[0];
  const bannerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const bannerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [120, 0],
    extrapolate: 'clamp',
  });
  const bannerTranslateY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -150],
    extrapolate: 'clamp',
  });

  const [selectedTab, setSelectedTab] = useState('Indonesia');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
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

      <View style={styles.tabContainer}>
        {!isSearchFocused && (
          <>
            <Animated.View
              style={[
                styles.sliderIndicator,
                {
                  transform: [{translateX}],
                },
              ]}
            />
            {['Indonesia', 'London', 'Spanyol'].map((tab, index) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, {borderRadius: 5}]}
                onPress={() => handleTabPress(tab, index)}>
                <Text style={styles.tabText}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        <Animated.View
          style={[
            styles.searchTabOverlay,
            {
              width: animatedWidth,
              zIndex: isSearchFocused ? 1 : 0,
            },
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Cari stadion..."
            value={searchQuery}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            onChangeText={setSearchQuery}
          />
          <Pressable style={styles.button}>
            <SearchNormal size={20} color={colors.yellow()} />
          </Pressable>
        </Animated.View>
      </View>

      <Animated.View
        style={[
          styles.banner,
          {
            transform: [{translateY: bannerTranslateY}],
            opacity: bannerOpacity,
            height: bannerHeight,
            overflow: 'hidden',
          },
        ]}>
        <View style={styles.decorSatu} />
        <Image
          source={require('../../assets/images/banner.png')}
          style={styles.image}
        />
        <View style={styles.decorDua} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <StadiumList key={stadiums.id} stadiums={stadiums} selectedTab={selectedTab} />
      </Animated.ScrollView>
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
  tab: {
    alignItems: 'center',
    width: tabWidth,
  },
  tabText: {
    color: colors.white(),
    fontSize: 12,
    fontFamily: fontType['ExtraBold'],
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
  sliderIndicator: {
    position: 'absolute',
    height: '100%',
    width: tabWidth,
    backgroundColor: '#FF9800',
    borderRadius: 5,
  },
  tabContainer: {
    position: 'relative',
    marginHorizontal: 10,
    height: 41,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey(),
    borderRadius: 5,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 41,
    fontSize: 14,
  },
  button: {
    backgroundColor: colors.grey(),
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
    width: 40,
  },
  searchTabOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 41,
    flexDirection: 'row',
    backgroundColor: colors.white(),
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
  },
});
