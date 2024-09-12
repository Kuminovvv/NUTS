import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './Providers';
import HeaderApp from '@/widgets/HeaderApp/HeaderApp';
import { siteConfig } from './siteConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: `${siteConfig.name}`,
    description: siteConfig.description,
    icons: {
        icon: siteConfig.icons.icon,
    },
};

interface layoutType {
    children: React.ReactNode;
}

export default function RootLayout({ children }: layoutType) {
    return (
        <html lang="ru" data-lt-installed="true">
            <body className={inter.className}>
                <HeaderApp />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
