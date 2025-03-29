import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { fetchFlashCardSets } from '@/api/challenges';
import { queryKeys } from '@/api/queryKyes';
import { BackgroundContainer, Button, Typography } from '@/components';
import { useQuestions } from '@/hooks';

const Challenge = () => {
  const { t } = useTranslation();

  // const {mutate} = useCreateFlashCardSet();

  const { data } = useQuery({ queryKey: queryKeys.sets(), queryFn: fetchFlashCardSets });
  const router = useRouter();

  console.log(data);

  return (
    <BackgroundContainer>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <RenderSets data={data}></RenderSets>

          <Typography size="LARGE" font="REGULAR">
            {t('challenge.createNewFlashcards')}
          </Typography>
          <View style={styles.content}>
            <Button onPress={router.back}>{t('challenge.back')}</Button>
          </View>
        </View>
      </ScrollView>
    </BackgroundContainer>
  );
};

const RenderSets = ({ data = [] }) => {
  console.log(data);

  const { mutate: createQuestions } = useQuestions();

  const handleQuestions = () => {
    createQuestions();
  };

  return (
    <View>
      {data.map((cardSet) => (
        <Typography key={cardSet.id} size="LARGE" font="REGULAR">
          <Button onPress={handleQuestions}>{cardSet.title}</Button>
        </Typography>
      ))}
    </View>
  );
};

export default Challenge;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  logo: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashCardsButtons: { gap: 5, width: '90%' },
});
