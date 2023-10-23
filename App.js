import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { TodoScreen } from './screens/TodoScreen';
import CompletedTasksScreen from './screens/CompletedTasksScreen';
import { LogScreen } from './screens/LogScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name='ToDo' component={TodoScreen}/>
            <Stack.Screen name='CompletedTasks' component={CompletedTasksScreen}/>
            <Stack.Screen name='Logs' component={LogScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;
