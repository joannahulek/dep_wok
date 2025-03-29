import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useTranslation } from 'react-i18next';

import { BackgroundContainer, Button, Popup, Typography } from '@/components';
import { useCreateFlashCardSet, useChallenge } from '@/hooks';

import LogoIcon from '../assets/svgs/logo.svg';

// import {useRouter} from "expo-router";

export default function Index() {
  const { t } = useTranslation();
  // const router = useRouter();
  const [popupVisible, setPopupVisible] = useState(false);
  const { mutate: createSet } = useCreateFlashCardSet();
  const { mutate: createChallenge } = useChallenge();

  const handleCreateFlashCards = () => {
    setPopupVisible(true);
  };

  const handleSave = (name: string) => {
    if (!name.trim()) {
      console.warn('Name cannot be empty');
      return;
    }

    createSet(name);
  };

  const handleChallenge = () => {
    createChallenge();
  };

  return (
    <BackgroundContainer imagePath={require('../assets/images/home.png')}>
      <View style={styles.innerContainer}>
        <Popup visible={popupVisible} onClose={() => setPopupVisible(false)} onSave={handleSave} />
        <LogoIcon />
        <View style={styles.content}>
          <Typography>{t('home.createFlashcards')}</Typography>
          <Button onPress={handleCreateFlashCards}>{t('home.startHere')}</Button>
        </View>
        <View style={styles.content}>
          <Typography>{t('home.challengeYourself')}</Typography>
          <Button onPress={handleChallenge}>{t('home.testYourself')}</Button>
        </View>
      </View>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  content: {
    rowGap: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
