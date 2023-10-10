import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

const CompletedTasksScreen = ({ route, navigation }) => {
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
                    <ToDoCompletedLine item={item}></ToDoCompletedLine>}
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
                        title='Перейти на экран About'
                        onPress={() => navigation.navigate('About')}
                        color='#5F9EA0'
                    />
                </View>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    )
};

const ToDoCompletedLine = (props) => {
    return (
        <View style={[styles.todoLine, {backgroundColor: '#3CB371'}]}>
            <TouchableOpacity style={styles.todoLineTouch}>
                <Text style={styles.titleText}>{props.item[0]}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CompletedTasksScreen;