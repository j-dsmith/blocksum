import 'tailwindcss/tailwind.css';
import { ResultsContextProvider } from '../store/results-context';

function MyApp({ Component, pageProps }) {
  return (
    <ResultsContextProvider>
      <Component {...pageProps} />
    </ResultsContextProvider>
  );
}

export default MyApp;
