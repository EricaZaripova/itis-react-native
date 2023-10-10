import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
          <Text style={styles.header}>Home screen</Text>
          <Button
              title="Перейти на экран About"
              onPress={() => navigation.navigate('About')}
              color='green'
          />
      </View>
  );
}

const AboutScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
          <Text style={styles.header}>Экран About</Text>
          <Button
              title="Вернуться на Главный экран"
              onPress={() => navigation.navigate('Home')}
              color='red'
          />
      </View>
  );
}

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
      fontSize: 24,
  },
});

export default App;
