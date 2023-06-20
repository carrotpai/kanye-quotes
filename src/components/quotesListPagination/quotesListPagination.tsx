'use client';
import React, { useEffect, useRef } from 'react';

import CitationListItem from '../citationListItem/citationListItem';
import { Iquote } from '@/types/types';
import styles from './quotesListPagination.module.css';
import { useInView } from 'react-intersection-observer';
import { useQuotesPagination } from '@/store/store';
import { shallow } from 'zustand/shallow';
import { TailSpin } from 'react-loader-spinner';

interface QuotesListPaginationProps {
    initThirdGradeQuotes: Iquote[];
}

function QuotesListPagination({
    initThirdGradeQuotes,
}: QuotesListPaginationProps) {
    const { ref, inView } = useInView({ delay: 100 });
    const currentPage = useRef(2);
    const getPage = useQuotesPagination((state) => state.getPage);

    const { quotes, isLoading } = useQuotesPagination((state) => ({
        quotes: state.quotes,
        isLoading: state.isLoading,
    }));

    useEffect(() => {
        if (inView) {
            getPage(currentPage.current);
            currentPage.current += 1;
            console.log(currentPage.current);
        }
    }, [inView]);

    return (
        <div
            className={`${styles.listPagination} ${
                isLoading && styles.listPagination_loading
            }`}
        >
            {initThirdGradeQuotes.map((quote) => (
                <CitationListItem
                    type="thirdGrade"
                    quote={quote.quote}
                    likes={quote.likes}
                    dislikes={quote.dislikes}
                    id={quote.id}
                    key={quote.id}
                />
            ))}
            {quotes.map((quote) => (
                <CitationListItem
                    type="thirdGrade"
                    quote={quote.quote}
                    likes={quote.likes}
                    dislikes={quote.dislikes}
                    id={quote.id}
                    key={`${quote.id}pag`}
                />
            ))}
            {isLoading && (
                <TailSpin
                    width={164}
                    height={164}
                    color="#c9c9c9"
                    wrapperClass={styles.spinner}
                />
            )}
            <div ref={ref}></div>
        </div>
    );
}

export default QuotesListPagination;
