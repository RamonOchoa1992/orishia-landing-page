import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Providers from './components/common/Providers'; // Importa el wrapper
import './globals.css';
import Script from 'next/script';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Plataforma OrishIA',
  description: 'Plataforma de gestión OrishIA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/ico'
          href='assets/images/favicon.png'
          //integrity='sha256-WmxSP3c/PxdOExtLPz8FXD8NCj8VKm9NPzk/X2x/GzVwDQo='
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Script
          id='_helpia_ws_chat'
          src='https://statics.orishiacore.com/connet/webchat/production/widget.js'
          strategy='afterInteractive'
          // @ts-expect-error: 'config' is a custom property required by Helpia widget
          config='eyJjb25maWdJZCI6InI0cGEtLWVhNHBxeHVhdSIsIndzVG9rZW4iOiJxTU53QVEwVlFYeXlpekJxeXZJcnpodWdwaHZSUUg0Qko0d1Q2YXJjQVpMdE0iLCJiYWNrU2VydmVyIjoiaHR0cHM6Ly9iYWNrZW5kLmNvbm5ldC5vcmlzaGlhY29yZS5jb20iLCJ3c1NlcnZlciI6IndzczovL3dzLmJhY2tlbmQuY29ubmV0Lm9yaXNoaWFjb3JlLmNvbS9jaGFubmVscyIsImVuYWJsZVJlY2FwdGNoYSI6ZmFsc2V9'
        />
      </body>
    </html>
  );
}
