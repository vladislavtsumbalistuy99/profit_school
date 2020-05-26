/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { windowHeight } from '../../dimensions';
const headerHeight = windowHeight * 0.11;
export default style = StyleSheet.create({
  avatar: {
    backgroundColor: 'lightblue',
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  send: {
    height: 100,
    width: 100,
  },
  checkBox: {
    borderColor: 'lightgray',
    borderRadius: 50,
    borderWidth: 2,
    height: 25,
    width: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  communityWrap: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageMessage: { width: 40, height: 40 },
  input: {
    paddingVertical: 10,
    width: '87%',
  },
  inputWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
  itemInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemWrap: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '90%',
  },
  message: {
    height: 40,
    width: 40,
  },
  textWrap: {
    maxWidth: '60%',
    paddingLeft: 10,
  },
  activeButton: {
    backgroundColor: '#fff',
  },
  button: {
    borderColor: '#fff',

    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'rgb(0, 168, 176)',
    flexDirection: 'row',
    height: headerHeight,
    justifyContent: 'center',
  },
  leftButton: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  rightButton: {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});
