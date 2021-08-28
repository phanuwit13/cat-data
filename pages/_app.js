/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import Layout from '/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>CPE RMUTI</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          crossOrigin='anonymous'
        ></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600&display=swap'
          rel='stylesheet'
        />
        <script
          src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </React.Fragment>
  )
}

export default MyApp
