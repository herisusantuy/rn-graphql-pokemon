import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';
import { useQuery } from '@apollo/client';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { GET_POKEMONS } from 'src/graphql/queries';
import { Loading, PokemonCard } from '@components/molecules';
import { AppStackParamList } from '@navigations/bottom-tab';

const HomeScreen: ScreenProps<'Home'> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) {
    <View style={styles.container}>
      <Loading visible={loading} />
    </View>;
  }
  if (error) return <Text>Error:{error.message}</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        {data?.pokemons?.results.map(pokemon => {
          return (
            <PokemonCard
              key={pokemon.id}
              name={pokemon?.name}
              uri={pokemon?.artwork}
              onPressButton={() =>
                navigation.navigate('Pokemon', { name: pokemon?.name })
              }
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white'
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5
  }
});

export default HomeScreen;
