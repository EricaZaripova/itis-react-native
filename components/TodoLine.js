import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles';


export const TodoLine = (props) => {
    return (
        <View style={[styles.todoLine, {backgroundColor: props.color}]}>
            <TouchableOpacity style={styles.todoLineTouch}>
                <Text style={styles.titleText}>{props.item}</Text>
            </TouchableOpacity>
        </View>
    )
};
