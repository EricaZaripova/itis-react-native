import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../modules/theme/useTheme';

export const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const { Colors, selectTheme, changeTheme } = useTheme();
  const styles = useStyles(Colors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{t('main.screens.home.title')}</Text>
        </View>
        <Text>{t('main.screens.home.desc')}</Text>
        <Text
          style={{
            color: 'black',
            fontSize: 38,
            marginBottom: 8,
            fontFamily: 'DancingScript-Regular',
          }}
        >
          Custom Font Text Regular
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 38,
            marginBottom: 8,
            fontFamily: 'DancingScript-Medium',
          }}
        >
          Custom Font Text Medium
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 38,
            marginBottom: 8,
            fontFamily: 'DancingScript-SemiBold',
          }}
        >
          Custom Font Text SemiBold
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 38,
            marginBottom: 8,
            fontFamily: 'DancingScript-Bold',
          }}
        >
          Custom Font Text Bold
        </Text>
      </View>
    </View>
  );
};

const useStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.backgroundPrimary,
    },
    content: {
      flex: 1,
      padding: 10,
    },
    buttons: {
      borderTopColor: colors.borderColor,
      borderTopWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      marginVertical: 30,
    },
    buttonPrimary: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.buttonPrimary,
    },
    buttonSecond: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.buttonSecondary,
    },
    titleText: {
      color: colors.textPrimary,
      fontSize: 18,
      flex: 3,
      alignSelf: 'center',
      paddingVertical: 5,
    },
    title: {
      backgroundColor: colors.titleBackgroung,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    text: {
      color: colors.textPrimary,
    },
    buttonText: {
      color: colors.textSecondary,
      fontSize: 16,
      textAlign: 'center',
    },
  });
