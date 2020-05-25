import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputImage: {
    alignItems: 'center',
    height: 30,
    marginLeft: 15,
    position: 'absolute',
    resizeMode: 'contain',
    width: 40,
  },
  photoInput: {
    borderRadius: 10,
    height: 30,
    width: '100%',
  },
  photoInputText: {
    alignSelf: 'flex-end',
    backgroundColor: `transparent`,
    borderColor: `white`,
    borderRadius: 50,
    borderWidth: 1,
    color: `white`,
    fontSize: 14,
    height: 30,
    marginLeft: '40%',
    paddingTop: 5,
    textAlign: 'center',
    textTransform: `uppercase`,
    width: '60%',
  },

  photoWraper: {
    alignItems: 'center',
    backgroundColor: `transparent`,
    borderBottomWidth: 1,
    borderColor: `white`,
    color: `white`,
    height: 40,
    width: '100%',
    // justifyContent: 'space-between',
  },
  validateText: {
    color: `red`,
    fontSize: 15,
    textAlign: 'center',
  },
});
