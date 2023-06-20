'use client';
import React, { Suspense } from 'react';
import useSWR from 'swr';

import Quote from '../quote/quote';
import LikeCount from '../likeCount/likeCount';
import { getRandomQuote } from '@/services/getQuote';

import styles from './citation.module.css';
import { Iquote } from '@/types/types';

function Citation() {
    const { data, isLoading } = useSWR<Iquote>('/randomQuote', getRandomQuote, {
        fallbackData: {
            quote: 'Loading...',
            likes: 0,
            dislikes: 0,
            id: -1,
        },
        revalidateOnFocus: false,
    });

    return (
        <div className={`${styles.citation}`}>
            <Quote type="home" quote={data?.quote ?? 'Loading...'} />

            <LikeCount
                isLoading={isLoading}
                id={data ? (data.id >= -1 ? data.id : 0) : -1}
                likes={data?.likes ?? 0}
                dislikes={data?.dislikes ?? 0}
                type="home"
            />
        </div>
    );
}

export default Citation;
