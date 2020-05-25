import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  alert: { color: `red`, fontSize: 12, position: 'absolute', top: 50 },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    opacity: 0.7,
    position: 'relative',
    width: '100%',
  },
  inputContainerTouched: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
  },
  inputImage: {
    alignItems: 'center',
    height: 30,
    marginLeft: 15,
    position: 'absolute',
    resizeMode: 'contain',
    top: 10,
    width: 40,
  },
  inputImagePass: {
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
    width: 25,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: `white`,
    color: `white`,
    fontSize: 16,
    fontStyle: 'italic',
    height: 40,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 65,
    width: '100%',
  },
  inputStyleError: {
    borderColor: `red`,
  },
  securePass: { height: 30, marginLeft: -30, width: 30 },
});
