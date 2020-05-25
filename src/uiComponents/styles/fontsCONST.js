/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';

export const TextMedium = ({ text, styles }) => (
  <Text
    style={{
      fontFamily: 'Roboto Medium',
      fontSize: 16,
      color: 'white',
      ...styles,
    }}
  >
    {text}
  </Text>
);

export const TextToUpper = ({ text, styles }) => (
  <Text
    style={{
      fontFamily: 'Roboto Light',
      fontSize: 16,
      color: 'white',
      textTransform: 'uppercase',
      ...styles,
    }}
  >
    {text}
  </Text>
);

export const TextBold = ({ text, styles }) => (
  <Text
    style={{
      fontFamily: 'Roboto Bold',
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
      ...styles,
    }}
  >
    {text}
  </Text>
);

export const TextCursive = ({ text, styles }) => (
  <Text
    style={{
      fontFamily: 'Roboto Italic',
      fontSize: 16,
      color: 'white',
      fontStyle: 'italic',
      ...styles,
    }}
  >
    {text}
  </Text>
);
