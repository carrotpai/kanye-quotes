import { Iquote } from '@/types/types';
import { BASE_NAME } from '@/variables/variables';

export const getStartQuotes = async () => {
    const response = await fetch(`${BASE_NAME}/api/quotes/getStartQuotes`, {
        next: { tags: ['startQuotes'], revalidate: 60 },
    });
    return response.json() as Promise<Iquote[]>;
};
