import React from 'react';

import Quote from '../quote/quote';
import { Iquote } from '@/types/types';
import styles from './citationListItem.module.css';
import LikeCount from '../likeCount/likeCount';
import WreathSVG from '../icons/wreath';

interface CitationItemProps extends Iquote {
    type: 'firstGrade' | 'secondGrade' | 'thirdGrade';
}

function CitationListItem({
    quote,
    id,
    likes,
    dislikes,
    type,
}: CitationItemProps) {
    const color =
        type === 'firstGrade'
            ? '#EEF21C'
            : type === 'secondGrade'
            ? '#C0C0C0'
            : '';
    const display = type === 'thirdGrade' ? 'none' : '';
    return (
        <div className={styles.itemWrapper}>
            <div
                className={`${
                    type === 'firstGrade' && styles.item_firstGrade
                } ${type === 'secondGrade' && styles.likesCount_secondGrade} ${
                    type === 'thirdGrade' && styles.item_thirdGrade
                } ${styles.item}`}
            >
                <WreathSVG
                    className={styles.wreath_left}
                    color={color}
                    display={display}
                />
                <Quote quote={quote} type="hall" />
                <WreathSVG
                    className={styles.wreath_right}
                    color={color}
                    display={display}
                />
            </div>
            <div className={styles.likesCount}>
                <LikeCount
                    type="hall"
                    likes={likes}
                    dislikes={dislikes}
                    id={id}
                    isLoading={false}
                />
            </div>
        </div>
    );
}

export default CitationListItem;
