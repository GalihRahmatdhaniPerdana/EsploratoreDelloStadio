import {Edit, Profile2User, Trash} from 'iconsax-react-native';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontType} from '../theme';
import {useNavigation} from '@react-navigation/native';

const StadiumSmall = ({stadiums, onDelete}) => {
  return (
    <>
      {stadiums.map(stadium => (
        <StadiumCard key={stadium.id} item={stadium} onDelete={onDelete} />
      ))}
    </>
  );
};

const StadiumCard = ({item, onDelete}) => {
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate('EditStadion', {id: item.id});
  };

  const handleDelete = () => {
    Alert.alert(
      'Konfirmasi',
      `Hapus stadion ${item.name}?`,
      [
        {text: 'Batal', style: 'cancel'},
        {
          text: 'Hapus',
          onPress: () => onDelete(item.id),
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('StadionDetail', {id: item.id})}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.noImage]}>
          <Text style={styles.noImageText}>Tidak Ada Gambar</Text>
        </View>
      )}

      <View style={styles.infoWrapper}>
        <Text style={styles.title}>Stadion {item.name}</Text>
        <View style={styles.capacityWrapper}>
          <View style={styles.capacity}>
            <View style={styles.capacityIcon}>
              <Profile2User size={16} color={colors.white()} />
            </View>
            <Text style={styles.capacityText}>{item.capacity}</Text>
          </View>
        </View>

        <Text style={styles.infoText} numberOfLines={1} ellipsizeMode="tail">
          {item.info}
        </Text>

        <View style={styles.flex}>
          <View style={styles.iconContainer}>
            <Edit size={24} color="#FF8A65" style={styles.icon} onPress={handleEdit}/>
          </View>
          <View style={styles.iconContainer}>
            <Trash size={24} color="#FF8A65" style={styles.icon} onPress={handleDelete}/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StadiumSmall;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.grey(),
    borderRadius: 20,
    marginBottom: 15,
    padding: 10,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 4,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: colors.grey(),
  },
  noImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    color: colors.white(),
    fontSize: 12,
    fontFamily: fontType['Light'],
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  infoWrapper: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Bold'],
    color: colors.white(),
    marginBottom: 4,
  },
  capacityWrapper: {
    marginBottom: 6,
  },
  capacity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black(),
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
  capacityIcon: {
    backgroundColor: colors.yellow(),
    padding: 4,
    borderRadius: 50,
    marginRight: 6,
  },
  capacityText: {
    fontSize: 12,
    fontFamily: fontType['Light'],
    color: colors.white(),
  },
  infoText: {
    fontSize: 13,
    fontFamily: fontType['Light'],
    color: colors.white(),
  },
  iconContainer: {
    marginTop: 8,
    padding: 5,
    borderRadius: 8,
    backgroundColor: colors.white(),
    alignSelf: 'flex-start',
  },
  icon: {
    zIndex: 50,
  },
});
