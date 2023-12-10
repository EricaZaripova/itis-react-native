import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from '../styles';

export const AboutScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{t('main.screens.about.title')}</Text>
        </View>
        <Text>{t('main.screens.about.desc')}</Text>
      </View>
    </View>
  );
};
