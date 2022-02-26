import Image from "next/image"

import SchoolLogo from 'public/images/logo.jpg'

import * as S from './styles'

export default function NavBar() {
	return (
		<S.NavigationBar>
			<S.ImageContainer>
				<Image 
					src={SchoolLogo}
				/>
			</S.ImageContainer>

			<S.AvailablePages>
				<li>Home</li>
				<li>Galeria</li>
				<li>Notícias</li>
				<li>Revistas</li>
				<li>Contato</li>
			</S.AvailablePages>
		</S.NavigationBar>
	)
}