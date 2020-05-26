import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
  img: { height: '100%', width: '100%' },
  imgWrap: {
    borderRadius: 50,
    height: 50,
    marginHorizontal: 15,
    overflow: 'hidden',
    width: 50,
  },
  modalBack: { height: 20, width: 20 },
  modalImgWrap: {
    alignSelf: 'center',
    borderRadius: 50,
    height: 50,
    overflow: 'hidden',
    width: 50,
  },
  modalName: { textAlign: 'center' },
  modalTouch: {
    backgroundColor: 'rgb(0, 168, 176)',
    height: 30,
    justifyContent: 'center',
    width: '100%',
  },
  textWrap: { width: '75%' },
  touch: {
    alignItems: 'center',
    backgroundColor: '#edeff2',
    flexDirection: 'row',
    height: 100,
    marginVertical: 10,
    width: '100%',
  },
});
