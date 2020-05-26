import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import style from './style';
import ImageComponent from './ImageComponent';
import CreateChat from './createChat';
import { booleanLiteral } from '@babel/types';

// addUser={() => props.addUser()}
export default Item = (props) => {
  return (
    <View style={[style.itemWrap, props.style]}>
      <View style={style.itemInfo}>
        <ImageComponent style={style.avatar} source={props.source} />
        <View style={style.textWrap}>
          <Text>{props.name}</Text>
          <Text>{props.status}</Text>
          <Text>{props.city}</Text>
        </View>
      </View>
      <CheckOrMessage
        type={props.type}
        navigation={props.navigation}
        data={props}
        id={props.id}
        addUser={(id) => props.addUser(id)}
      />
    </View>
  );
};

class CheckOrMessage extends React.PureComponent {
  render() {
    switch (this.props.type) {
      case 'main':
        return (
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Send', {
                  data: this.props.data,
                })
              }
            >
              <ImageComponent
                style={style.message}
                source={require('../../assets/community/message.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageComponent
                source={require('../../assets/favorite.png')}
                style={{
                  height: 25,
                  width: 25,
                  marginLeft: '10%',
                }}
              />
            </TouchableOpacity>
            <CreateChat id={this.props.id} navigation={this.props.navigation} />
          </View>
        );
      case 'addMessage':
        return (
          <TouchableOpacity>
            <CheckBox addUser={() => this.props.addUser(this.props.id)} />
          </TouchableOpacity>
        );
      default:
        return null;
    }
  }
}

class CheckBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: 'none',
    };
  }
  onCheck() {
    let bool = false;
    this.state.status === 'flex' ? (bool = 'none') : (bool = 'flex');
    this.setState({
      status: bool,
    });
    this.props.addUser();
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.onCheck()}>
        <View style={style.checkBox}>
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 50,
              backgroundColor: 'lightgray',
              display: this.state.status,
            }}
          ></View>
        </View>
      </TouchableOpacity>
    );
  }
}
