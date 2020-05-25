import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logoImg: {
    width: 150,
    height: 90,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 60,
    width: '100%',
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 35,
    left: 30,
  },
  backButtonImg: { height: 20, resizeMode: 'contain' },
  imageBack: { height: '100%', width: '100%' },

  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 60,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
