import React from "react";
import LogoInsta from "../assets/imagens/logo__insta.png";
import LogoYouTube from "../assets/imagens/logo__yt.png";
import LogoTikTok from "../assets/imagens/logo__ttk.png";
import LogoX from "../assets/imagens/logo__x.png";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import EmblemaCorinthians from "../assets/imagens/emblema__header.png";

const Header = () => {
	return (
		<>
			<nav className="barra__navegacao">
				<ul className="container__redes-sociais">
					<li className="brand__rede">
						<a href="#" className="link__rede">
							<img src={LogoInsta} alt="Logo da Rede Social" />
						</a>
					</li>
					<li className="brand__rede">
						<a href="#" className="link__rede">
							<img src={LogoYouTube} alt="Logo da Rede Social" />
						</a>
					</li>
					<li className="brand__rede">
						<a href="#" className="link__rede">
							<img src={LogoTikTok} alt="Logo da Rede Social" />
						</a>
					</li>
					<li className="brand__rede">
						<a href="#" className="link__rede">
							<img src={LogoX} alt="Logo da Rede Social" />
						</a>
					</li>
				</ul>
				<img
					src={EmblemaCorinthians}
					className="logo__corinthians"
					alt="Emblema do Corinthians"
				/>
				<ul className="container__links">
					<li className="item__link">
						<a href="#Historia">História</a>
					</li>
					<li className="item__link">
						<a href="#Titulos">Títulos</a>
					</li>
					<li className="item__link">
						<a href="#Elenco">Elenco</a>
					</li>
					<li className="item__link">
						<a href="#Noticias">Notícias</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
