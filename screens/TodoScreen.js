import React, { useState, useRef } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

import styles from '../styles';
import TodoItem from '../components/TodoItem';
import { TodoLine } from '../components/TodoLine';
import todoListStore from '../modules/todoList/TodoListStore';
import logStore from '../modules/log/LogStore';

export const TodoScreen = observer(({ navigation }) => {
  const [text, setText] = useState('');
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const addItem = () => {
    if (text) {
      todoListStore.addTodo(text);
      setText('');
      logStore.addLog([`Задача '${text}' была добавлена`, '#AFEEEE']);
    }
  };

  const removeItem = (item) => {
    todoListStore.deleteTodo(item);
    logStore.addLog([`Задача '${item.text}' была удалена`, '#FA8072']);
  };

  const completeItem = (item) => {
    todoListStore.markAsCompleted(item);
    logStore.addLog([`Задача '${item.text}' была выполнена`, '#98FB98']);
  };

  const getCompletedToDos = () => {
    return todoListStore.todoList.filter((item) => item.completed === true);
  };

  const alert = (item) => {
    return Alert.alert('Вы уверены, что хотите удалить пункт?', '', [
      {
        text: 'Нет',
        style: 'cancel',
      },
      {
        text: 'Да',
        onPress: () => {
          todoListStore.deleteTodo(item);
          logStore.addLog([`Задача '${item.text}' была удалена`, '#FA8072']);
        },
      },
    ]);
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ToDoList</Text>
        </View>
        <FlatList
          data={todoListStore.todoList}
          keyExtractor={(item, index) => keyExtractor(index)}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              onRemove={() => alert(item)}
              onCompleted={() => completeItem(item)}
            ></TodoItem>
          )}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(newText) => setText(newText)}
          value={text}
        ></TextInput>

        <Button title="Добавить" onPress={() => addItem()} />
        <View style={styles.buttons}>
          <Button
            title="Вернуться на Главный экран"
            onPress={() => navigation.navigate('Home')}
            color="blue"
          />
          <Button title="Выполненные задания" onPress={onOpen} color="green" />
          <Button
            title="Посмотреть логи"
            onPress={() => navigation.navigate('Logs')}
            color="#5F9EA0"
          />
        </View>

        <View>
          <Portal>
            <Modalize
              ref={modalizeRef}
              modalTopOffset={200}
              childrenStyle={{
                padding: 16,
                flex: 1,
              }}
              flatListProps={{
                data: getCompletedToDos(),
                keyExtractor: (item, index) => keyExtractor(index),
                renderItem: ({ item }) => (
                  <TodoLine item={item.text} color="#3CB371"></TodoLine>
                ),
                showsVerticalScrollIndicator: false,
              }}
            ></Modalize>
          </Portal>
        </View>
      </View>
    </SafeAreaView>
  );
});
