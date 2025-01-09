import { useQuery } from '@tanstack/react-query';
import api from '../js/api';

// Custom hook to fetch Posts data using React Query
const usePostsData = (key, endpoint, options) => {
    return useQuery({
        queryKey: [key],
        queryFn: async () => {
            const response = await api.get(endpoint);
            return response.data;
        },
        ...options
    });
};

export default usePostsData;