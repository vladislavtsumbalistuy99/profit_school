import React from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import MessageModal from './allMessageComponent/MessageModal';
import Message from './allMessageComponent/Message';
import { getMessagesSubmitted } from '../../redux/community/messages/messagesActions';

class AllMessage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messageModal: false,
      currentMessage: null,
      currentUrl: '',
    };
  }
  openMessage(bool, message) {
    this.setState({ messageModal: bool, currentMessage: message });
  }
  onRefresh() {
    this.props.getMessagesSubmitted({ uid: this.props.uid });
  }
  renderMessage() {
    let arr = this.props.data.map((item) => (
      <Message
        data={item}
        key={item.key}
        openMessage={() => this.openMessage(true, item)}
      />
    ));
    return arr;
  }
  render() {
    const arrMessage = this.renderMessage();
    return (
      <View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            paddingBottom: 5,
            paddingHorizontal: 12,
            backgroundColor: 'rgb(0, 168, 176)',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          onPress={() => this.onRefresh()}
        >
          <Text style={{ color: '#fff' }}>Get all messages</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <FlatList data={arrMessage} renderItem={(item) => item.item} />
          <MessageModal
            messageModal={this.state.messageModal}
            closeMessage={() => this.openMessage(false, null)}
            message={this.state.currentMessage}
            urlPhoto={this.state.currentUrl}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.auth.user.uid,
  };
};

export default connect(
  mapStateToProps,
  { getMessagesSubmitted }
)(AllMessage);
