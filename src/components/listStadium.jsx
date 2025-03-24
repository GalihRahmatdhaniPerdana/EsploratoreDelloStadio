import {ArrowUp, Profile2User} from 'iconsax-react-native';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fontType} from '../theme';

const StadiumList = ({ stadiums, selectedTab }) => {
  return (
    <ScrollView>
      {stadiums.filter((stadium) => stadium.location === selectedTab)
        .map((stadium, index) => (
        <StadiumCard
          key={index}
          name={stadium.name}
          location={stadium.location}
          info={stadium.info}
          capacity={stadium.capacity}
          image={stadium.image}
        />
      ))}
    </ScrollView>
  );
};

const StadiumCard = ({name, info, image, capacity}) => {
  return (
    <View style={stadion.card}>
      <View style={stadion.capacityContainer}>
        <View style={stadion.capacity}>
          <View style={stadion.capacityIcon}>
            <Profile2User size="24" color={colors.white()} />
          </View>
          <Text style={stadion.capacityText}>{ capacity }</Text>
        </View>
        <View style={stadion.iconContainer}>
          <ArrowUp size="32" color="#FF8A65" style={stadion.icon} />
        </View>
      </View>
      <Text style={stadion.tittle}>Stadion</Text>
      <Text style={stadion.tittle} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
      <Text style={stadion.infoText} numberOfLines={1} ellipsizeMode="tail">{info}</Text>
      <Image source={image} style={stadion.image} />
    </View>
  );
};

export default StadiumList;

const stadion = StyleSheet.create({
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
