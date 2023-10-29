import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabNavigation } from './navigation/TabNavigation';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'Tab'} component={TabNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;
