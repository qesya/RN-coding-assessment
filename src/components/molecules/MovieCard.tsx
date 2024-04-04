import React from 'react';
import { Pressable, Text } from 'react-native';
import { MoviePoster } from '../atoms/MoviePoster';

export interface IMovieCard {
  title: string;
  posterUrl: string;
  onPress: () => void;
}

export const MovieCard = ({ onPress, title, posterUrl }: IMovieCard) => {
  return (
    <Pressable onPress={onPress} className="gap-y-1">
      <MoviePoster url={posterUrl} />
      {title && (
        <Text className="text-base text-white text-center">{title}</Text>
      )}
    </Pressable>
  );
};
