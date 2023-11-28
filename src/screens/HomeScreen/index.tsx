import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';
import { useQuery } from '@apollo/client';
import _ from 'lodash';

import { GET_POKEMONS } from 'src/graphql/queries';
import { Loading } from '@components/molecules';

const HomeScreen: ScreenProps<'Home'> = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) {
    <View style={styles.container}>
      <Loading visible={loading} />
    </View>;
  }
  if (error) return <Text>Error:{error.message}</Text>;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data?.pokemons?.results.map((pokemon, index) => (
        <View key={index}>
          <Image
            source={{ uri: pokemon?.image }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 10,
              backgroundColor: '#F2F2F2'
            }}
            resizeMode='cover'
          />
          <Text>{_.startCase(pokemon?.name)}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default HomeScreen;
