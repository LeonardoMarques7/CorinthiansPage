import React from "react";
import LogoInsta from "../assets/imagens/logo__insta.png";
import LogoYouTube from "../assets/imagens/logo__yt.png";
import LogoTikTok from "../assets/imagens/logo__ttk.png";
import LogoX from "../assets/imagens/logo__x.png";
import EmblemaCorinthians from "../assets/imagens/logo__pequena__normal.png";
import {
	BookOpen,
	Home,
	Newspaper,
	ShoppingCart,
	Trophy,
	Users,
} from "lucide-react";
const Header = () => {
	return (
		<>
			<nav className="barra__navegacao items-center">
				<ul className="container__redes-sociais">
					<li className="brand__rede">
						<a
							href="https://www.instagram.com/corinthians/"
							className="link__rede"
						>
							<img src={LogoInsta} alt="Logo da Rede Social" />
						</a>
					</li>
					<li className="brand__rede">
						<a
							href="https://www.youtube.com/@corinthians/videos"
							className="link__rede"
						>
							<img src={LogoYouTube} alt="Logo da Rede Social" />
						</a>
					</li>
					<li className="brand__rede">
						<a
							href="https://www.tiktok.com/@corinthians"
							className="link__rede"
						>
							<img src={LogoTikTok} alt="Logo da Rede Social" />
						</a>
					</li>
					<li className="brand__rede">
						<a href="https://x.com/Corinthians" className="link__rede">
							<img src={LogoX} alt="Logo da Rede Social" />
						</a>
					</li>
				</ul>
				<a href="#" title="Início">
					<img
						src={EmblemaCorinthians}
						className="logo__corinthians"
						alt="Emblema do Corinthians"
					/>
				</a>
				<ul className="header__desktop flex items-center flex-1 justify-between">
					<li className="item__link">
						<a href="#Home">
							<Home className="icon__header" />
							<span className="span__link">Home</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Historia">
							<BookOpen className="icon__header" />
							<span className="span__link">História</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Titulos">
							<Trophy className="icon__header" />
							<span className="span__link">Títulos</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Elenco">
							<Users className="icon__header" />
							<span className="span__link">Elenco</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Noticias">
							<Newspaper className="icon__header" />
							<span className="span__link">Notícias</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Loja">
							<ShoppingCart className="icon__header" />
							<span className="span__link">Loja</span>
						</a>
					</li>
				</ul>
				{/* Moblie */}
				<ul className="header__moblie">
					<li className="item__link">
						<a href="#Home">
							<Home className="icon__header" />
							<span className="span__link">Home</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Historia">
							<BookOpen className="icon__header" />
							<span className="span__link">História</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Titulos">
							<Trophy className="icon__header" />
							<span className="span__link">Títulos</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Elenco">
							<Users className="icon__header" />
							<span className="span__link">Elenco</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Noticias">
							<Newspaper className="icon__header" />
							<span className="span__link">Notícias</span>
						</a>
					</li>
					<li className="item__link">
						<a href="#Loja">
							<ShoppingCart className="icon__header" />
							<span className="span__link">Loja</span>
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
