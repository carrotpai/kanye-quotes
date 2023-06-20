'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';

import styles from './navigation.module.css';
import { preload } from 'swr';
import { getRandomQuote } from '@/services/getQuote';

type linkProps = {
    href: string;
    name?: string;
};

interface NavigationProps {
    links: linkProps[];
}

function Navigation({ links }: NavigationProps) {
    const pathname = usePathname();
    const isQuotePreloaded = useRef(false).current;
    return (
        <div className={styles.nav}>
            {links.map((link, ind) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        className={`${styles.nav__link} ${
                            isActive && styles.nav__link_active
                        }`}
                        href={link.href}
                        key={`link${link.name}${ind}`}
                        onMouseEnter={
                            pathname === '/hall' && link.href === '/'
                                ? () => preload('/randomQuote', getRandomQuote)
                                : undefined
                        }
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
}

export default Navigation;
