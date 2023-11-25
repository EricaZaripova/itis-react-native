import React, { useEffect } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { observer } from 'mobx-react';

import postStore from '../modules/post/PostStore';
import styles from '../styles';
import { TodoLine } from '../components/TodoLine';

export const AboutScreen = observer(({ navigation }) => {
  useEffect(() => {
    postStore.getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Посты</Text>
        </View>
        <ScrollView style={styles.content}>
          {!postStore.isLoading ? (
            postStore.posts.map((post, i) => {
              return (
                <View key={i}>
                  <TodoLine
                    color="#FFFFFF"
                    item={`ID: ${post.id}. TITLE: ${post.title}`}
                  />
                </View>
              );
            })
          ) : (
            <ActivityIndicator />
          )}
        </ScrollView>
      </View>
      <Button
        title="Удалить все посты из локального хранилища"
        onPress={() => postStore.removePostsFromLocal()}
      />

      <View style={styles.buttons}>
        <Button
          title="Вернуться на Главный экран"
          onPress={() => navigation.navigate('Home')}
          color="blue"
        />
        {/* <Button
          title="Перейти к списку ToDo"
          onPress={() => navigation.navigate('ToDo')}
          color="green"
        /> */}
      </View>
    </View>
  );
});
