import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

// import {fetchFlashCardSets} from "@/api/challenges";

export function useQuestions() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data) => {
      return Promise.resolve(data);
    },
    onSuccess: () => {
      router.push('/questions');
    },
  });
}
