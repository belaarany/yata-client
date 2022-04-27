import { store } from "@/store"
import { ChakraProvider } from "@chakra-ui/react"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"
import { I18nextProvider } from "react-i18next"
import "../styles/globals.css"
import { chakraui, i18n } from "@/config"

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<>
			<link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet"></link>

			<ChakraProvider theme={chakraui.theme}>
				<Provider store={store}>
					<I18nextProvider i18n={i18n.i18n}>{getLayout(<Component {...pageProps} />)}</I18nextProvider>
				</Provider>
			</ChakraProvider>
		</>
	)
}

export default App
