import { useQuery } from '@tanstack/react-query'

import UserService from '../../../services/user.service'


export const useProfile = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => UserService.getProfile(),
		select: ({data}) => data
  });

  return { data, isLoading };
};