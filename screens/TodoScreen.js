import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../styles';

function TodoScreen ({ navigation }) {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addItem = () => {
        const newItem = [text, false];

        setTodos([...todos, newItem]);
        setText('');
    };

    const removeItem = (item) => {
        const newTodos = [...todos];
        const index = newTodos.indexOf(item);

        delete newTodos[index];
        setTodos(newTodos)
    };

    const completeItem = (item) => {
        let newTodos = [...todos];
        const index = newTodos.indexOf(item);

        newTodos[index][1] = true;
        setTodos(newTodos)
    };

    const getCompletedToDos = () => {
        return todos.filter(item => item[1] === true)
    }

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}><Text style={styles.headerText}>ToDoList</Text></View>
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => keyExtractor(index)} renderItem={({item}) =>
                    <TodoItem item={item} onRemove={removeItem} onCompleted={completeItem}></TodoItem>}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={newText => setText(newText)}
                    value={text}>
                </TextInput>
                
                <Button
                    title="Добавить"
                    onPress={() => addItem()}
                />
                <View
                    style={styles.buttons}
                >
                    <Button
                        title="Вернуться на Главный экран"
                        onPress={() => navigation.navigate('Home')}
                        color='blue'
                    />
                    <Button
                        title='Перейти на экран About'
                        onPress={() => navigation.navigate('About')}
                        color='#5F9EA0'
                    />
                    <Button
                        title='Выполненные задания'
                        onPress={() => navigation.navigate('CompletedTasks', {completedTodos: getCompletedToDos()})}
                        color='green'
                    />
                </View>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    )
}

const TodoItem = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    const onRemove = () => {
        setIsVisible(false);
        props.onRemove(props.item)
    }

    const onCompleted = () => {
        setIsCompleted(true);
        props.onCompleted(props.item)
    }

    return (
        <>
          {(isVisible) && (
            <View style={[styles.todoLine, {backgroundColor: isCompleted ? '#3CB371' : 'white'}]}>
                <TouchableOpacity style={styles.todoLineTouch}>
                    <Text style={styles.titleText}>{props.item[0]}</Text>
                    <Button
                        title='✓'
                        onPress={() => onCompleted()}
                        color='#3CB371'
                    />
                    <Button
                        title='Х'
                        onPress={() => onRemove()}
                        color='red'
                    />
                </TouchableOpacity>
            </View>
            )}  
        </>  
    )
};


export default TodoScreen;