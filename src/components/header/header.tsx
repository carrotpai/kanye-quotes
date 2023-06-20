import React from 'react';
import Navigation from '../navigation/navigation';
import Image from 'next/image';

import logo from '../../../public/icons/kanyeIcon.png';
import styles from './header.module.css';

const navLinks = [
    { name: 'Random Quote', href: '/' },
    { name: 'Hall of Fame', href: '/hall' },
];

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    width={50}
                    height={50}
                    className={styles.logo__image}
                    src={logo.src}
                    alt="kanye west icon"
                />
                <div className={styles.logo__text}>Kanye Quotes</div>
            </div>
            <Navigation links={navLinks} />
            <button className={styles.btn} type="button">
                buy me coffee
            </button>
        </header>
    );
}

export default Header;
