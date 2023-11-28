import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import type { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useQuery } from '@apollo/client';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { GET_POKEMONS } from 'src/graphql/queries';
import { ScreenProps } from '@navigations/root-stack';
import { Loading, PokemonCard } from '@components/molecules';
import { AppStackParamList } from '@navigations/bottom-tab';

const HomeScreen: ScreenProps<'Home'> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const scrollViewRef = useRef<ScrollView>(null);
  const [limit, setLimit] = useState<number>(10);
  const { loading, error, data, refetch } = useQuery(GET_POKEMONS, {
    variables: {
      limit
    }
  });

  if (error) return <Text>Error:{error.message}</Text>;

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom) {
      setLimit(prev => prev + 10);
      refetch({
        limit: limit
      });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={styles.container}
      onMomentumScrollEnd={handleMomentumScrollEnd}
    >
      <View style={styles.wrapper}>
        {data?.pokemons?.results.map(pokemon => {
          return (
            <PokemonCard
              key={pokemon.id}
              id={pokemon?.id}
              name={pokemon?.name}
              uri={pokemon?.artwork}
              onPressButton={() =>
                navigation.navigate('Pokemon', { name: pokemon?.name })
              }
            />
          );
        })}
        {loading && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              padding: 20
            }}
          >
            <ActivityIndicator size='large' />
            <Text>Loading...</Text>
          </View>
        )}
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
