import React from "react";
import LogoInsta from "../assets/imagens/logo__insta.png";
import LogoYouTube from "../assets/imagens/logo__yt.png";
import LogoTikTok from "../assets/imagens/logo__ttk.png";
import LogoX from "../assets/imagens/logo__x.png";

import EmblemaCorinthians from "../assets/imagens/emblema__header.png";

const Header = () => {
	return (
		<nav>
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
			<div className="badge__logo">
				<img
					src={EmblemaCorinthians}
					className="logo__corinthians"
					alt="Emblema do Corinthians"
				/>
			</div>
			<ul className="container__links">
				<li className="item__link">
					<a href="">História</a>
				</li>
				<li className="item__link">
					<a href="">Títulos</a>
				</li>
				<li className="item__link">
					<a href="">Elenco</a>
				</li>
				<li className="item__link">
					<a href="">Notícias</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
