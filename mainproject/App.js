import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './src/routes/StackRoute';
import { View } from 'react-native';

const App = () => {
  return (
    
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
    
  );
};

export default App;
