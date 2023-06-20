import React from 'react';

import styles from './layout.module.css';

interface HallLayoutProps {
    children: React.ReactNode;
}

function HallLayout({ children }: HallLayoutProps) {
    return <main className={styles.hall}>{children}</main>;
}

export default HallLayout;
