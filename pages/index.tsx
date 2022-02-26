import { ThemeProvider } from "styled-components"

import { MainTheme } from "styles/themes"
import Header from "components/organisms/Header"

export default function Home() {
	return (
		<ThemeProvider theme={MainTheme}>
			<Header />

			<main>

			</main>
		</ThemeProvider>
	) 
}
