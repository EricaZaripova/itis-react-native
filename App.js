import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import TodoScreen from './screens/TodoScreen';
import CompletedTasksScreen from './screens/CompletedTasksScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name='ToDo' component={TodoScreen}/>
            <Stack.Screen name='CompletedTasks' component={CompletedTasksScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      fontSize: 24,
      marginBottom: 20,
  },
});

export default App;
