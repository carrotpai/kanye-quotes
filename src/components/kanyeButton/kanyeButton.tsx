'use client';
import React from 'react';
import Image from 'next/image';
import { useSWRConfig } from 'swr';

import styles from './kanyeButton.module.css';
import KanyeSmall from '../../../public/KanyeSmall.png';
import { useLikesStatus } from '@/store/store';

function KanyeButton() {
    const { mutate } = useSWRConfig();
    const resetLikedStatus = useLikesStatus((state) => state.setStatus);

    return (
        <div className={styles.btn}>
            <Image
                className={styles.btn__kanye}
                src={KanyeSmall.src}
                width={239}
                height={158}
                alt="kanye west dark hoodie"
            />
            <button
                type="button"
                onClick={() => {
                    mutate('/randomQuote');
                    resetLikedStatus({ like: false, dislike: false });
                }}
            >
                Random Quote
            </button>
        </div>
    );
}

export default KanyeButton;
