import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.headerText}>Home screen</Text></View>
            
            <Button
                title="Перейти к списку ToDo"
                onPress={() => navigation.navigate('ToDo')}
                color='green'
            />
            <Button
                title="Перейти на экран About"
                onPress={() => navigation.navigate('About')}
                color='#5F9EA0'
            />
        </View>
    );
  }


export default HomeScreen;