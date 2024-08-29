import React from 'react';
import styles from './style';

import {View, Text} from 'react-native';

const Header = ({title = ''}) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
