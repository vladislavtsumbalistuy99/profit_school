import React from 'react';
import { View, Modal, TouchableOpacity, Image, Text,Linking,ScrollView } from 'react-native';
import style from './style';

export default News = (props) => {
  return (
    <View style={style.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => {
            Linking.openURL('https://www.bbc.com/news/business-52801131');
          }}>
          <Image source={require('../../assets/news/news1.png')} style={style.news}/>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => {
            Linking.openURL('https://www.bbc.com/news/business-52801131');
          }}>
          <Image source={require('../../assets/news/news2.png')} style={style.news}/>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => {
            Linking.openURL('https://www.bbc.com/news/business-52801131');
          }}>
          <Image source={require('../../assets/news/news3.png')} style={style.news}/>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => {
            Linking.openURL('https://www.bbc.com/news/business-52801131');
          }}>
          <Image source={require('../../assets/news/news4.png')} style={style.news}/>
        </TouchableOpacity>  
      </ScrollView>
    </View>
  );
};
