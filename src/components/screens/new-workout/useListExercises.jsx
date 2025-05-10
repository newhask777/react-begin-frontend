import { useQuery } from '@tanstack/react-query'

import ExerciseService from '../../../services/exercise/exercise.service'


export const useListExercises = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["list exercises"],  // <-- Array query key as property
    queryFn: () => ExerciseService.getAll(),
    select: ({data}) => data
  });

	// console.log({data})

  return { data, isLoading };
};

