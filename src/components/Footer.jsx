import React from "react";
import logoCorinthians from "../assets/imagens/logo__corinthinas__footer.png";

const Footer = () => {
	return (
		<footer className="container__footer">
			<img
				src={logoCorinthians}
				className="footer__image"
				alt="Emblema do Corinthians"
			/>
			<div className="footer__texts">
				<h1 className="footer__title">Criado: Leonardo Marques</h1>
				<div className="footer__description">
					Criado por um louco para todos os bandos de loucos
				</div>
			</div>
		</footer>
	);
};

export default Footer;
