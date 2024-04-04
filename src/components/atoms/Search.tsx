import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import sdk, { IMovie } from '../../utils/sdk';

interface ISearch {
  placeholder: string;
  onSubmit: (list: IMovie[]) => void;
}

export const Search = ({ placeholder, onSubmit }: ISearch) => {
  const [searchString, setSearchString] = useState('');
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();

  const handleSearchChange = (value: string) => {
    setSearchString(value);

    clearTimeout(typingTimeout);

    const timeout = setTimeout(async () => {
      try {
        if (value === '') {
          const res = await sdk.getRandomMovie();
          onSubmit(res.results);
        } else {
          const res = await sdk.searchMovies(value);
          onSubmit(res.results);
        }
      } catch (err) {
        console.error(err);
      }
    }, 2000);

    setTypingTimeout(timeout);
  };

  return (
    <View>
      <TextInput
        value={searchString}
        onChangeText={handleSearchChange}
        placeholder={placeholder}
        className="h-12 text-base text-white border-b border-gray-500"
        placeholderTextColor="gray"
      />
    </View>
  );
};
