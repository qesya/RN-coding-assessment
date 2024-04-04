import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

interface IMoviePoster {
  url: string;
}

export const MoviePoster = ({ url }: IMoviePoster) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [prgrs, setPrgrs] = useState(0);

  return (
    <View className="justify-center items-center">
      <FastImage
        source={
          error || !url
            ? require('react-native/Libraries/NewAppScreen/components/logo.png')
            : { uri: url }
        }
        resizeMode={
          error || !url
            ? FastImage.resizeMode.contain
            : FastImage.resizeMode.cover
        }
        onProgress={event => {
          setPrgrs((event.nativeEvent.loaded / event.nativeEvent.total) * 100);
        }}
        onLoadEnd={() => setLoaded(true)}
        onError={() => setError(true)}
        className="w-full aspect-[3/4] border border-gray-800"
      />
      {!loaded && (
        <View className="absolute space-y-2">
          <ActivityIndicator color="white" />
          <Text className="font-default text-xs text-white">
            {prgrs.toFixed(0)}%
          </Text>
        </View>
      )}
    </View>
  );
};
