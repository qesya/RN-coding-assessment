import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useScreen } from '../../hooks/useScreen';
import { CoreStackNavigation } from '../atoms/CoreScreens';
import { IMovie } from '../../utils/sdk';
import { MovieCard } from '../molecules/MovieCard';

interface IMovies {
  list: IMovie[];
}

export const Movies = ({ list = [] }: IMovies) => {
  const { width } = useScreen();
  const navigation = useNavigation<CoreStackNavigation>();

  const numMoviePerRow = 3;
  const movieWidth = (width - 40) / numMoviePerRow;

  const handleMovieDetail = (movie: IMovie) => () => {
    navigation.navigate('Detail', { movie });
  };

  return (
    <View className="flex-1">
      {list.length > 0 ? (
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ width: movieWidth }}>
              <MovieCard
                onPress={handleMovieDetail(item)}
                title={item.originalTitleText.text}
                posterUrl={item.primaryImage?.url}
              />
            </View>
          )}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.wrapper}
          contentContainerStyle={styles.container}
        />
      ) : (
        <View className="pt-20 items-center justify-center">
          <Text className="text-gray-700 text-lg">No results found.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 30,
  },
  wrapper: {
    gap: 20,
  },
});
