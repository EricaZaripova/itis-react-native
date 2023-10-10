import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.headerText}>Экран About</Text></View>
            
            <Button
                title="Вернуться на Главный экран"
                onPress={() => navigation.navigate('Home')}
                color='blue'
            />
            <Button
                title="Перейти к списку ToDo"
                onPress={() => navigation.navigate('ToDo')}
                color='green'
            />
        </View>
    );
  }

export default AboutScreen;