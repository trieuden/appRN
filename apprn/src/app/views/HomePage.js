import React from 'react';
import { Text,View } from 'react-native';
import { styles } from '../css/Style';

const HomePage = () => {
  return (
    <View>
      <Text style={[styles.red,styles.container]}>This is the Home Page</Text>
    </View>
  );
};

export default HomePage;
