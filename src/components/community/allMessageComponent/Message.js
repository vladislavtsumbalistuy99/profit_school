import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import style from './style';
import moment from 'moment';

export default Message = (props) => {
  return (
    <TouchableOpacity style={style.touch} onPress={() => props.openMessage()}>
      <View style={style.imgWrap}>
        <Image
          source={{ uri: props.data.owner.urlPhoto }}
          resizeMode={'cover'}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View style={style.textWrap}>
        <Text>{props.data.owner.name}</Text>
        <Text>
          {props.data.message.slice(0, 70)}
          {props.data.message.length >= 70 ? '...' : null}
        </Text>
        <Text>{moment(props.data.createTime).format('D.M.YYYY, HH:mm')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CMCData = [
  {
    owner: {
      name: 'Oleksii',
      uriAvatar:
        'https://firebasestorage.googleapis.com/v0/b/luiss-849b5.appspot.com/o/avatars%2FCKW4UPzrnAP7xjI2AguC7ScxP322?alt=media&token=20478a8b-1f6e-4960-9557-c3ac9b8eef23',
    },
    message: 'Hello!',
    createTime: 1568103566750,
    key: 'q',
  },
];
