import React from "react";
import {
  View,
  ScrollView,
  TextInput,
  Image,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import Header from '../../components/header/header';
import News from '../../components/news/index';

export default (home = () => {
  return (
    <View>
      <Header/>
      <Text>News:</Text>
      <News />
    </View>
  )
});
