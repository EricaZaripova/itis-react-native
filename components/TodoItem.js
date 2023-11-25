import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles';

export const TodoItem = ({ item, onRemove, onCompleted }) => {
  return (
    <>
      <View
        style={[
          styles.todoLine,
          { backgroundColor: item.comleted ? '#3CB371' : 'white' },
        ]}
      >
        <TouchableOpacity style={styles.todoLineTouch}>
          <Text style={styles.titleText}>{item.text}</Text>
          <Button title="✓" onPress={onCompleted} color="#3CB371" />
          <Button title="Х" onPress={onRemove} color="red" />
        </TouchableOpacity>
      </View>
    </>
  );
};
