import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';

import { createFlashCard } from '@/api/challenges';
import { Button } from '@/components/Button';
import { FlashCardInput } from '@/components/FlashCardInput';

import { BackgroundContainer } from './BackgroundContainer';

export default function CardForm() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [counter, setCounter] = useState(0);

  const handleQuestionChange = (text: string) => {
    setQuestion(text);
  };

  const handleAnswerChange = (text: string) => {
    setAnswer(text);
  };

  const handleContinue = () => {
    //counter++
    // (flashcardSet: string, question: string, answer: string)
    createFlashCard(id as string, question, answer);
    setCounter((prevCounter) => prevCounter + 1);
    setQuestion('');
    setAnswer('');
  };

  const handleSave = () => {
    createFlashCard(id as string, question, answer);
    setQuestion('');
    setAnswer('');
    router.navigate('/');
  };

  return (
    <BackgroundContainer imagePath={require('../../assets/images/challenge.png')}>
      <View style={styles.innerContainer}>
        <Text>Fiszka</Text>
        <Text>{counter}</Text>
        <Text>Wpisz obydwie karteczki</Text>
        <FlashCardInput
          label="Anwers"
          value={question}
          onChangeText={handleQuestionChange}
          backgroundColor="#f0f0f0"
        />
        <FlashCardInput
          label="Rewers"
          value={answer}
          onChangeText={handleAnswerChange}
          backgroundColor="#f0f0f0"
        />
        <Button onPress={handleContinue}>Kontynuuj</Button>
        <Button onPress={handleSave}>Zakończ</Button>
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
