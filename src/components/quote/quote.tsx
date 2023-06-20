'use client';
import React from 'react';
import Image from 'next/image';

import quoteIcon from '../../../public/icons/quote.svg';
import styles from './quote.module.css';

interface QuoteProps {
    quote: string;
    type: 'home' | 'hall';
}

function Quote({ quote, type }: QuoteProps) {
    return (
        <div
            className={`${type === 'home' && styles.quote__text_home} ${
                type === 'hall' && styles.quote__text_hall
            }`}
        >
            <div className="quoteIcon">
                <Image
                    src={quoteIcon.src}
                    width={38}
                    height={30}
                    alt="quote icon"
                />
            </div>
            <div className={styles.text_hall}>{quote}</div>
            <div
                className={`${styles.quote__text_small} ${
                    type === 'hall' && styles.quote__text_small_hall
                }`}
            >
                Kanye West
            </div>
        </div>
    );
}

export default Quote;
