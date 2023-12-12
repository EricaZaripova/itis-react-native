import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

import { useRootStore } from '../hooks/useRootStore';
import { LangType } from '../modules/lang/LangType';
import { useTheme } from '../modules/theme/useTheme';
import { ThemeTypes } from '../modules/theme/ThemeTypes';

export const SettingsScreen = observer(({ navigation }) => {
  const { t } = useTranslation();
  const { langStore } = useRootStore();

  const { Colors, selectTheme, changeTheme } = useTheme();
  const styles = useStyles(Colors);

  useEffect(() => {
    langStore.getLang();
  }, []);

  const handleChangeLang = async () => {
    await langStore.changeLang(
      LangType.RU === langStore.lang ? LangType.EN : LangType.RU
    );
  };

  const handleChangeTheme = async () => {
    changeTheme(
      selectTheme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {t('main.screens.settings.title')}
          </Text>
        </View>
        <Text style={styles.text}>{t('main.screens.settings.desc')}</Text>
        <View style={styles.buttons}>
          <Button
            onPress={handleChangeLang}
            title={t('main.screens.settings.lang')}
            style={Colors.buttonPrimary}
          />
          <Button
            onPress={handleChangeTheme}
            title={t('main.screens.settings.theme')}
            style={Colors.buttonSecondary}
          />
        </View>
      </View>
    </View>
  );
});

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
