import './globals.css';

import type { Metadata } from 'next';
import { Golos_Text, Kode_Mono, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

import { Footer } from '@/lib/components/footer';
import { cn } from '@/lib/utils/cn';

const gothamPro = localFont({
  src: [
    {
      path: './fonts/GothamPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/GothamPro.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GothamPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GothamPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/GothamPro-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/GothamPro-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/GothamPro-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/GothamPro-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/GothamPro-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/GothamPro-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-gotham',
  adjustFontFallback: 'Arial',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
});

const kodeMono = Kode_Mono({
  variable: '--font-kode-mono',
  subsets: ['latin'],
});

const golosText = Golos_Text({
  variable: '--font-golos-text',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'CDN VideoHub',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={cn(
          montserrat.variable,
          gothamPro.variable,
          kodeMono.variable,
          golosText.variable,
          'font-montserrat relative min-w-75',
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
