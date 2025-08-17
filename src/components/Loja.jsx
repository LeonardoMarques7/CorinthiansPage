import React from "react";
import camisaAwayTorcedor2025 from "../assets/imagens/produtos/camisa-away-torcedor-2025.png";
import camisaAwayTorcedor2024 from "../assets/imagens/produtos/camisa-away-torcedor-2024.png";
import camisaHomeTorcedor2025 from "../assets/imagens/produtos/camisa-home-torcedor-2025.png";
import blusaoCorinthians from "../assets/imagens/produtos/blusao.png";
import { Expand, Eye, ShoppingCart, View } from "lucide-react";

const Loja = () => {
	return (
		<section className="container__loja" id="Loja">
			<div className="loja__header">
				<h2 className="loja__title">Loja</h2>
				<span className="loja__subtitle">
					Os produtos abaixo são vendidos na loja oficial da Nike. Ao clicar,
					você será redirecionado para o site oficial.
				</span>
			</div>
			<div className="loja__content">
				<div className="loja__item__destaque">
					<img
						src={camisaAwayTorcedor2025}
						className="loja__item__image"
						alt=""
					/>
					<div className="item__destaque__texts">
						<div className="item__destaque__header">
							Camisas <div className="separacao__div"></div> Edição Especial
						</div>
						<div className="item__destaque__content">
							<h2 className="item__destaque__title">
								Camisa Oficial Corinthians 2025 - Home
							</h2>
							<p className="item__destaque__description">
								Descubra o produto mais desejado pelos torcedores corinthianos.
								Uma peça única que representa toda a paixão e tradição do Sport
								Club Corinthians Paulista. Qualidade premium e design exclusivo
								para os verdadeiros fiéis.
							</p>
						</div>
						<div className="item__destaque__footer">
							<div className="item__destaque__badge">
								<span className="item__destaque__preco">R$ 299,90</span>
								<span className="item__destaque__preco__antigo">R$ 349,90</span>
							</div>
							<a href="#" className="item__destaque__btn">
								Adquirir Agora
							</a>
						</div>
					</div>
				</div>
				<div className="separator__loja">COLEÇÃO COMPLETA</div>
				<ul className="gap-10 items-center container__produtos">
					<li className="item__produto">
						<div className="produto__header__card">
							<img
								src={camisaAwayTorcedor2024}
								className="produto__card__image"
								alt="Imagem do Produto"
							/>
						</div>
						<div className="produto__content__card">
							<h2 className="produto__card__title">
								Camisa Nike Corinthians II 2024/25 Torcedor Pro Masculina
							</h2>
							<p className="produto__card__description">
								Produto oficial licenciado do Sport Club Corinthians Paulista.
								Qualidade garantida e design exclusivo.
							</p>
							<div className="produto__footer__card">
								<div className="produto__badge">
									<span className="produto__preco">R$ 199,49</span>
									<span className="produto__preco__antigo">R$ 349,90</span>
								</div>
								<a href="#" className="produto__btn">
									<Expand /> Ver Produto
								</a>
							</div>
						</div>
					</li>
					<li className="item__produto">
						<div className="produto__header__card">
							<img
								src={camisaHomeTorcedor2025}
								className="produto__card__image"
								alt="Imagem do Produto"
							/>
						</div>
						<div className="produto__content__card">
							<h2 className="produto__card__title">
								Camisa Nike Corinthians I 2025/26 Torcedor Pro Masculina
							</h2>
							<p className="produto__card__description">
								Produto oficial licenciado do Sport Club Corinthians Paulista.
								Qualidade garantida e design exclusivo.
							</p>
							<div className="produto__footer__card">
								<div className="produto__badge">
									<span className="produto__preco">R$ 332,49</span>
									<span className="produto__preco__antigo">R$ 349,90</span>
								</div>
								<a href="#" className="produto__btn">
									<Expand /> Ver Produto
								</a>
							</div>
						</div>
					</li>
					<li className="item__produto">
						<div className="produto__header__card">
							<img
								src={blusaoCorinthians}
								className="produto__card__image"
								alt="Imagem do Produto"
							/>
						</div>
						<div className="produto__content__card">
							<h2 className="produto__card__title">
								Blusão Nike Corinthians Masculino
							</h2>
							<p className="produto__card__description">
								Produto oficial licenciado do Sport Club Corinthians Paulista.
								Qualidade garantida e design exclusivo.
							</p>
							<div className="produto__footer__card">
								<div className="produto__badge">
									<span className="produto__preco">R$ 569,99</span>
									<span className="produto__preco__antigo">R$ 599,99</span>
								</div>
								<a href="#" className="produto__btn">
									<Expand /> Ver Produto
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Loja;
