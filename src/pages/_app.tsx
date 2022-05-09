import { EmptyLayout } from "@/layout"
import { persistor, store } from "core"
import Head from "next/head"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { AppPropsWithLayout } from "../models"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
