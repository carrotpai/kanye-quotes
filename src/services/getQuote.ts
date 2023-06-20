import { BadRequest } from '@/app/errors/errors';

export const getRandomQuote = async () => {
    const response = await fetch('/api/randomQuote');
    return response.json();
};

export const likeCountIncrement = async (touched: boolean, id?: number) => {
    if (!id)
        throw new BadRequest(
            'empty id of quote for incrementing count of likes'
        );
    const response = await fetch(
        `/api/quotes/like?id=${id}&touched=${touched}`,
        { method: 'POST' }
    );
    return response.json();
};

export const dislikeCountIncrement = async (touched: boolean, id?: number) => {
    if (!id)
        throw new BadRequest(
            'empty id of quote for incrementing count of likes'
        );
    const response = await fetch(
        `/api/quotes/dislike?id=${id}&touched=${touched}`,
        { method: 'POST' }
    );
    return response.json();
};
