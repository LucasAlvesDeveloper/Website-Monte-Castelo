import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html,
	body {
		font-family: 'Roboto', sans-serif;

		height: 100vh;
		width: 100vw;

		margin: 0;
		padding: 0;
	}

	a {
		all: unset;
	}

	ul, ol, li {
        list-style: none;
    }
`

function MyApp({ Component, pageProps }: AppProps) {
  	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp