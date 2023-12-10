import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

import styles from '../styles';

export const HomeScreen = observer(({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{t('main.screens.home.title')}</Text>
        </View>
        <Text>{t('main.screens.home.desc')}</Text>
      </View>
    </View>
  );
});
