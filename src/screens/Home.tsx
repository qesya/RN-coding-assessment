import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Search } from '../components/atoms/Search';
import { Movies } from '../components/organisms/Movies';
import sdk, { IMovie } from '../utils/sdk';

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleSubmitSearch = (result: IMovie[]) => {
    setMovies(result);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const res = await sdk.getRandomMovie();
        setMovies(res.results);
      } catch (err) {
        console.error(err);
      }
    };
    init();
  }, []);

  return (
    <View className="flex-1">
      <View className="p-5">
        <Search onSubmit={handleSubmitSearch} placeholder="Find a movie..." />
      </View>
      <Movies list={movies} />
    </View>
  );
};
