import '../styles/global.css' // Global stil dosyasını içe aktarır

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp