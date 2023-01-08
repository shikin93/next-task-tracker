import { Provider } from 'react-redux';
import Layout from '../components/layout';
import '../styles/globals.css';
import store from '../states';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
