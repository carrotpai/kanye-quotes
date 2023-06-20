import Image from 'next/image';

import Citation from '@/components/citation/citation';

import pattern from '../../public/pattern.png';
import styles from './page.module.css';
import KanyeButton from '@/components/kanyeButton/kanyeButton';
import Spinner from '@/components/spinner/spinner';

export default function Home() {
    return (
        <main className={styles.content}>
            <div className={styles.content__header}>
                <div className={styles.text}>
                    <p>Get random Kanye quote</p>
                    <p>and choose the BEST</p>
                    <p className={styles.text_small}>or most cringe</p>
                </div>
                <Image
                    className={styles.header__kanye}
                    width={567.8}
                    height={311}
                    src={pattern.src}
                    alt="kanye west"
                />
            </div>
            <div className={styles.quote}>
                <Citation />
            </div>
            <KanyeButton />
        </main>
    );
}
