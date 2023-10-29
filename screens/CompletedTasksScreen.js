import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';

import styles from '../styles';
import { TodoLine } from '../components/TodoLine';


export const CompletedTasksScreen = ({ route, navigation }) => {
    const keyExtractor = (index) => {
        return index.toString();
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}><Text style={styles.headerText}>Completed tasks</Text></View>
                
                <FlatList
                    data={route.params.completedTodos}
                    keyExtractor={(item, index) => keyExtractor(index)} renderItem={({item}) =>
                    <TodoLine item={item[0]} color='#3CB371' ></TodoLine>}
                />

                <View
                    style={styles.buttons}
                >
                    <Button
                        title="Вернуться на главный экран"
                        onPress={() => navigation.navigate('Home')}
                        color='blue'
                    />
                    <Button
                        title='Вернуться к списку ToDo'
                        onPress={() => navigation.navigate('ToDo')}
                        color='#5F9EA0'
                    />
                </View>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    )
};
