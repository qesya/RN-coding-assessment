import React, { ComponentType, useMemo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp } from '@react-navigation/native';

import * as coreScreens from '../../screens';
import { IMovie } from '../../utils/sdk';

export type ScreenNames = ['Home', 'Detail'];
export type CoreStackParamList = {
  Home: undefined;
  Detail: { movie: IMovie };
};
export type CoreStackNavigation = NavigationProp<CoreStackParamList>;

const Stack = createNativeStackNavigator<CoreStackParamList>();

type ScreenType = {
  name: string;
  component: ComponentType;
};

export const CoreScreens = () => {
  const screens = useMemo(
    () =>
      Object.entries(coreScreens).map(([name, component]) => ({
        name,
        component,
      })),
    [],
  );

  return (
    <Stack.Navigator initialRouteName="Home">
      {screens.map(({ name, component: Screen }: ScreenType) => {
        const screenName = name as keyof CoreStackParamList;
        return <Stack.Screen key={name} name={screenName} component={Screen} />;
      })}
    </Stack.Navigator>
  );
};
