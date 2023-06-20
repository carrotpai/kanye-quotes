'use client';
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

import styles from './spinner.module.css';

function Spinner() {
    return (
        <TailSpin
            wrapperClass={styles.spinner}
            height={128}
            width={128}
            color="#262626"
        />
    );
}

export default Spinner;
