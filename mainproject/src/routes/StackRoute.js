import { createNativeStackNavigator } from '@react-navigation/native-stack';
import S1 from '../screens/S1';
import S2 from '../screens/S2';
import React from 'react';

const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="S1">
      <Stack.Screen name="S1" component={S1} />
      <Stack.Screen name="S2" component={S2} />
    </Stack.Navigator>
  );
};

export default StackRoute;
