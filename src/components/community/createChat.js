import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

// import { createChatSubmitted } from '../../redux/chat/chatActions';

class CreateChat extends React.Component {
  createChat(target) {
    const targetUser = {
      name: target.name,
      photo: target.urlPhoto || '',
      uid: target.key,
    };
    const currentUser = {
      name: this.props.user.name,
      uid: this.props.user.uid,
      photo: this.props.user.urlPhoto,
    };
    const data = [currentUser, targetUser];
    // this.props.createChatSubmitted({
    //   targetUser: targetUser,
    //   users: data,
    //   navigation: this.props.navigation,
    // });
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.createChat(this.props.id)}
        style={{ paddingVertical: 5 }}
      >
        <Text style={{ fontSize: 10 }}>create chat</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(
  mapStateToProps,
  // { createChatSubmitted }
)(CreateChat);
