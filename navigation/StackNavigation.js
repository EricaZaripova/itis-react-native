import {Text, TouchableOpacity} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/FontAwesome";

import { HomeScreen } from "../screens/HomeScreen";
import { AboutScreen } from '../screens/AboutScreen';


const Stack = createNativeStackNavigator();

export const StackNavigation = () => (
    <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={({ navigation }) => ({
                headerTitle: () => <Icon name="star" size={24}/>,
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}
                    >
                        <Text >About</Text>
                    </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
);
