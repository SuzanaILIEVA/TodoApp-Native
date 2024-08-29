import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';

function App() {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <View>
        <Header title="My ToDo App" />

        <Text> deneme week1</Text>
        <Icon name="pluscircle" size={25} color="red" />
      </View>
    </SafeAreaView>
  );
}

export default App;
