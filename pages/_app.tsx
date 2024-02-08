import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "@/hooks/ThemeContext";
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};
