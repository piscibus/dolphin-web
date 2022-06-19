import '../public/assets/css/preloader.min.css';
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/icons.min.css';
import '../public/assets/css/app.min.css';

import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
