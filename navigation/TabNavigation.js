import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import {NewsScreen} from '../screens/NewsScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {SettingScreen} from '../screens/SettingScreen';
import {StackNavigation} from "./StackNavigation";


const Tab = createBottomTabNavigator();

export const TabNavigation = ({ navigation: { navigate } }) => (
    <Tab.Navigator 
        initialRouteName={'Home'}
    >
        <Tab.Screen
            name="Home"
            component={StackNavigation}
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="home" size={24} />,
                headerShown: false,
            }}
        />
        <Tab.Screen
            name="News"
            component={NewsScreen}
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="newspaper-o" size={24} />,
            }}
        />
        <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="comments" size={24} />,
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="cog" size={24} />,
            }}
        />
    </Tab.Navigator>
);
