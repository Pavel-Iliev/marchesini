import '../styles/global.css'; // Import global CSS
import { Poppins } from 'next/font/google';
import type { AppProps } from 'next/app'; // Import AppProps type

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Include the font weights you need
  variable: '--font-poppins', // Add a CSS variable for the font
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className} bg-background-regular`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
