import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles';

export const TodoItem = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  const onRemove = () => {
    setIsVisible(false);
    props.onRemove(props.item);
  };

  const onCompleted = () => {
    setIsCompleted(true);
    props.onCompleted(props.item);
  };

  return (
    <>
      {isVisible && (
        <View
          style={[
            styles.todoLine,
            { backgroundColor: isCompleted ? '#3CB371' : 'white' },
          ]}
        >
          <TouchableOpacity style={styles.todoLineTouch}>
            <Text style={styles.titleText}>{props.item[0]}</Text>
            <Button title="✓" onPress={() => onCompleted()} color="#3CB371" />
            <Button title="Х" onPress={() => onRemove()} color="red" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
