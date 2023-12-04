import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './screens/AboutScreen';
import Navigation from './navigation/Navigation';
import { DeepLinking } from './navigation/DeepLinking';
import { useEffect } from 'react';
import { Linking } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    Linking.getInitialURL().then(async (deepLinkInitialURL) => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  return (
    <NavigationContainer
      ref={Navigation.navigationRef}
      linking={DeepLinking.linking}
    >
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'About'} component={AboutScreen} />
      </Tab.Navigator>
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
});
