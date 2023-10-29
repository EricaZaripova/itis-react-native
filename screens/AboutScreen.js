import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, Button } from 'react-native';

import styles from '../styles';

export const axiosClient = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
  timeout: 1000,
});

export const AboutScreen = ({ navigation }) => {
  const [temp, setTemp] = useState('');
  const [error, setError] = useState(null);

  const onButtonClick = () => {
    axiosClient
      .get(
        '/weather?lat=55.792139&lon=49.122135&appid=2f7f80c1114987b2dc44d7657de5cd92&lang=ru&units=metric'
      )
      .then((response) => {
        setTemp(
          `Температура ${response.data.main.temp} ℃, ощущается как ${response.data.main.feels_like} ℃.`
        );
      })
      .catch((error) => {
        setTemp('Ошибка запроса. Повторите позже.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Погода у КФУ</Text>
        </View>
        <Button title="Узнать погоду" onPress={() => onButtonClick()} />
        <View style={{ height: 50 }}>
          <View style={styles.todoLine}>
            <Text
              style={[
                styles.titleText,
                { padding: 8, flexDirection: 'row', flex: 3 },
              ]}
            >
              {temp}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Вернуться на Главный экран"
          onPress={() => navigation.navigate('Home')}
          color="blue"
        />
        <Button
          title="Перейти к списку ToDo"
          onPress={() => navigation.navigate('ToDo')}
          color="green"
        />
      </View>
    </View>
  );
};
