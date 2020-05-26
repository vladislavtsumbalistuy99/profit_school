import React from 'react';
import { Modal, TouchableOpacity, View, Image, Text } from 'react-native';
import style from './style';

export default MessageModal = (props) => {
  if (props.message) {
    return (
      <Modal visible={props.messageModal}>
        <TouchableOpacity
          style={style.modalTouch}
          onPress={() => props.closeMessage()}
        >
          <View style={style.modalBack}>
            <Image
              style={style.img}
              source={require('../../../assets/backArrow.png')}
              resizeMode={'center'}
            />
          </View>
        </TouchableOpacity>
        <View style={style.modalImgWrap}>
          <Image
            source={{ uri: props.message.owner.urlPhoto }}
            resizeMode={'cover'}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <Text style={style.modalName}>{props.message.owner.name}</Text>
        <Text>{props.message.message}</Text>
      </Modal>
    );
  } else {
    return null;
  }
};
