import React, { Fragment } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Image,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';

import style from './style';
import Header from '../../components/header/header';
//import { getUsersSubmitted } from '../../../redux/community/communityActions';
const avatar = require('../../assets/avatar.png');
const send = require('../../assets/community/send.png');

export default class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
        />
      <View style={[style.itemWrap]}>
      <View style={style.itemInfo}>
        <ImageComponent style={style.avatar} source={avatar} />
        <View style={style.textWrap}>
          <Text>Name</Text>
          <Text>Status</Text>
          <Text>City</Text>
        </View>
      </View>
      <ImageComponent style={style.send} source={send} />
    </View>
    </View>
    );
  }
}