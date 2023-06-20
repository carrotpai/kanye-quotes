import localFont from 'next/font/local';

export const satoshiFontRegular = localFont({
    src: [{ path: '../vendor/fonts/Satoshi-Regular.woff2' }],
    style: 'normal',
    variable: '--font-satoshi-regular',
});

export const satoshiFontBold = localFont({
    src: [{ path: '../vendor/fonts/Satoshi-Bold.woff2' }],
    style: 'normal',
    variable: '--font-satoshi-bold',
});

export const satoshiFontMedium = localFont({
    src: [{ path: '../vendor/fonts/Satoshi-Medium.woff2' }],
    style: 'normal',
    variable: '--font-satoshi-medium',
});

export const satoshiFontLight = localFont({
    src: [{ path: '../vendor/fonts/Satoshi-Light.woff2' }],
    style: 'normal',
    variable: '--font-satoshi-light',
});
