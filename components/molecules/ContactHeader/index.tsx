import Link from "next/link"

import { Whatsapp } from "@styled-icons/fa-brands"

import * as S from "./styles"

export default function ContactHeader() {
	return (
		<S.Container className="contact-header">
			<p className="contact-numbers">
				<Link href="https://api.whatsapp.com/send?phone=5594981193670">
					<a><Whatsapp size={20}/> (94) 98119-3670</a>
				</Link>
				|
				<Link href="tel:94991253346">
					<a>(94) 99125-3346</a>
				</Link>
				|
				<Link href="tel:33243633">
					<a>3324-3633</a>
				</Link>
			</p>

			<p className="restricted-access">
				<Link href="https://evn.controller.education/auth/login/?return_to=/portal/">
					<a>Acesso Restrito</a>
				</Link>
			</p>
		</S.Container>
	)
}