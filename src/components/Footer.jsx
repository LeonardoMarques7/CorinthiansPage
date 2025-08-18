import React from "react";
import logoCorinthians from "../assets/imagens/logo__pequena__normal.png";
import LogoInsta from "../assets/imagens/logo__insta.png";
import LogoYouTube from "../assets/imagens/logo__yt.png";
import LogoTikTok from "../assets/imagens/logo__ttk.png";
import LogoX from "../assets/imagens/logo__x.png";

const Footer = () => {
	return (
		<footer className="container__footer">
			<div className="footer__texts">
				<h1 className="footer__title">Criado: Leonardo Marques</h1>
				<div className="footer__description">
					Criado por um louco para todos os bandos de loucos
				</div>
			</div>
			<span className="footer__info">
				<p>
					Este é um site feito por um torcedor em homenagem ao Sport Club
					Corinthians Paulista. Todos os direitos sobre imagens e textos
					pertencem ao clube e suas respectivas fontes. Sem fins lucrativos.
				</p>
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
			</span>
		</footer>
	);
};

export default Footer;
