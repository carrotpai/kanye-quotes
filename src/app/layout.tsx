import Header from '@/components/header/header';
import './index.css';
import styles from './layout.module.css';

import {
    satoshiFontRegular,
    satoshiFontBold,
    satoshiFontLight,
    satoshiFontMedium,
} from './fonts';
import Footer from '@/components/footer/footer';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${satoshiFontBold.variable} ${satoshiFontLight.variable} ${satoshiFontRegular.variable} ${satoshiFontMedium.variable} ${styles.background}`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
