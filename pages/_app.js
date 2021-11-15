import Layout from "../components/layout";
import "tailwindcss/tailwind.css";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
