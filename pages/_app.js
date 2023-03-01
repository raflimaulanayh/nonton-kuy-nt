import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@600;700&family=Poppins:wght@200;400;600&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}
