import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

import styles from '../styles';
import { useRootStore } from '../hooks/UseRootStore';
import { LangType } from '../modules/lang/LangType';

export const changeLangScreen = observer(({ navigation }) => {
  const { t } = useTranslation();
  const { langStore } = useRootStore();

  useEffect(() => {
    langStore.getLang();
  }, []);

  const handleChangeLang = async () => {
    await langStore.changeLang(
      LangType.RU === langStore.lang ? LangType.EN : LangType.RU
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {t('main.screens.settings.title')}
          </Text>
        </View>
        <Text>{t('main.screens.settings.desc')}</Text>
        <Button
          onPress={handleChangeLang}
          title={t('main.screens.settings.button')}
        />
      </View>
    </View>
  );
});
