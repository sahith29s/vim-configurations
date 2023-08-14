import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <Text>This is me inside the app</Text>
      <FlatCards />
    </SafeAreaView>
  );
};

export default App;
