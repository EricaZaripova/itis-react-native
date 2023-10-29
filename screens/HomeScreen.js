import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../styles';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home screen</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Перейти к списку ToDo"
          onPress={() => navigation.navigate('ToDo')}
          color="green"
        />
        <Button
          title="Перейти на экран About"
          onPress={() => navigation.navigate('About')}
          color="#5F9EA0"
        />
      </View>
    </View>
  );
};
