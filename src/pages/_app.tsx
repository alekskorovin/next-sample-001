import "../globals.css";
import type { AppProps } from "next/app";

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
