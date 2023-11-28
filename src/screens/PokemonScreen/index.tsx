import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';

import { ScreenProps } from '@navigations/root-stack';
import { GET_POKEMON } from 'src/graphql/queries';

const PokemonScreen: ScreenProps<'Pokemon'> = ({ route }) => {
  const { name } = route.params;
  const { data, error, loading } = useQuery(GET_POKEMON, {
    variables: {
      name
    }
  });
  console.log(
    '🚀 ~ file: index.tsx ~ line 11 ~ data',
    JSON.stringify(data?.pokemon, null, 2)
  );
  return (
    <View style={styles.container}>
      <Text>Pokemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PokemonScreen;
