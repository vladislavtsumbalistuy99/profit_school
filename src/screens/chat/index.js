import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import style from './style';

export default class Profile extends React.Component {

  render() {
    let {
      container,
      profileInfo,
      buttons,
      profileInfoTop,
      profileInfoBottom,
      profileInfoIcons,
      starIcon,
      locationIcon,
      profileIcon,
      location,
      stars,
      profileInfoText,
      goldenStarIcon,
      goldenStarView,
    } = style;
  return (
    <ImageBackground
      source={require('../../assets/profile/background.jpg')}
      style={container}
    >
      <View style={profileInfo}>
        <View style={profileInfoTop}>
          <Image
            style={profileIcon}
            source={require('../../assets/profile/avatar.png')}
          />
        </View>
        <View style={profileInfoBottom}>
          <View style={profileInfoText}>
            <Text>MARCO BELINI</Text>
            <Text>Acea</Text>
          </View>
          <View style={profileInfoIcons}>
            <View style={location}>
              <Image
                style={locationIcon}
                source={require('../../assets/profile/location-marker_icon.png')}
              />
              <Text>Roma, RM</Text>
            </View>
            <View style={stars}>
              <Image
                style={starIcon}
                source={require('../../assets/profile/personal-rating_icon.png')}
              />
              <Text>70</Text>
            </View>
          </View>
        </View>
        <View style={goldenStarView}>
          <Image
            style={goldenStarIcon}
            source={require('../../assets/profile/golden_star.png')}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={buttons}>
          <Text>I MIEI INTERVENTI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttons}>
          <Text>IL MIO NETWORK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttons}>
          <Text>CHATTA CON ME</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );}
}
