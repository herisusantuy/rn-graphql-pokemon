import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import _ from 'lodash';

type PokemonCardProps = {
  id: string;
  name: string;
  uri: string;
  onPressButton: () => void;
};

const PokemonCard = ({ id, name, uri, onPressButton }: PokemonCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressButton}>
      <Image source={{ uri }} style={styles.image} resizeMode='cover' />
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.title}>{_.startCase(name)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    backgroundColor: '#F2F2F2'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10
  },
  id: {
    position: 'absolute',
    left: 5,
    top: 5,
    fontWeight: 'bold'
  }
});

export default PokemonCard;
