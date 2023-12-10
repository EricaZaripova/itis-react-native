import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Linking } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { changeLangScreen } from './screens/ChangeLangScreen';
import Navigation from './navigation/Navigation';
import { DeepLinking } from './navigation/DeepLinking';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    Linking.getInitialURL().then(async (deepLinkInitialURL) => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  const { t } = useTranslation();

  return (
    <NavigationContainer
      ref={Navigation.navigationRef}
      linking={DeepLinking.linking}
    >
      <Tab.Navigator>
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            tabBarLabel: t('main.tabs.home'),
            headerTitle: t('main.tabs.home'),
          }}
        />
        <Tab.Screen
          name={'About'}
          component={AboutScreen}
          options={{
            tabBarLabel: t('main.tabs.about'),
            headerTitle: t('main.tabs.about'),
          }}
        />
        <Tab.Screen
          name={'Settings'}
          component={changeLangScreen}
          options={{
            tabBarLabel: t('main.tabs.settings'),
            headerTitle: t('main.tabs.settings'),
          }}
        />
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
