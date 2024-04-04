import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { IMovie } from '../utils/sdk';
import { MoviePoster } from '../components/atoms/MoviePoster';

type DetailRouteProp = {
  Detail: {
    movie: IMovie;
  };
};

export const Detail = () => {
  const { params } = useRoute<RouteProp<DetailRouteProp, 'Detail'>>();

  return params?.movie ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="space-y-5">
        <MoviePoster url={params.movie.primaryImage?.url} />
        <View className="px-5 space-y-3">
          <Text className="text-white text-3xl font-bold whitespace-preline">
            {params.movie.originalTitleText.text}
          </Text>
        </View>
      </View>
    </ScrollView>
  ) : (
    <View className="pt-20 items-center justify-center">
      <Text className="text-gray-700 text-lg">No results found.</Text>
    </View>
  );
};
