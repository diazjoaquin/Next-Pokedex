import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "@/hooks/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
