import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

// import {fetchFlashCardSets} from "@/api/challenges";

export function useChallenge() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data) => {
      // const cardSets = fetchFlashCardSets()
      //
      // console.log(cardSets)

      return Promise.resolve(data);
    },
    onSuccess: () => {
      router.push('/challenge');
    },
  });
}
