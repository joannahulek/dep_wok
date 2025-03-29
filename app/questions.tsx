import { StyleSheet, View } from 'react-native';

import { BackgroundContainer, Typography } from '@/components';

const Questions = () => {
  return (
    <BackgroundContainer>
      <View style={styles.innerContainer}>
        <Typography size="LARGE" font="REGULAR">
          questions test
        </Typography>
      </View>
    </BackgroundContainer>
  );
};

export default Questions;

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
