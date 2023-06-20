import React from 'react';

import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.stack}>NextJS + Prisma</p>
            <p className={styles.ref}>
                <a href="https://kanye.rest">This site is using kanye.rest</a>
            </p>
            <p className={styles.github}>
                <a href="#">GitHub</a>
            </p>
        </div>
    );
}

export default Footer;
