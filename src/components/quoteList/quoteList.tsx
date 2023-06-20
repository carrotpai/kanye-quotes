import React from 'react';

import CitationListItem from '../citationListItem/citationListItem';
import { getStartQuotes } from '@/services/getAllQuotes';
import styles from './quoteList.module.css';
import QuotesListPagination from '../quotesListPagination/quotesListPagination';

async function QuoteList() {
    const data = await getStartQuotes();
    const [firstGrade, secondGrade1, secondGrade2, ...thirdGrade] = data;
    return (
        <div className={styles.list}>
            <div className={styles.first}>
                <CitationListItem type="firstGrade" {...firstGrade} />
            </div>
            <div className={styles.second}>
                <CitationListItem type="secondGrade" {...secondGrade1} />
                <CitationListItem type="secondGrade" {...secondGrade2} />
            </div>
            <QuotesListPagination initThirdGradeQuotes={thirdGrade} />
        </div>
    );
}

export default QuoteList;
