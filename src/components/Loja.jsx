import { Expand, ShoppingCart } from "lucide-react";
import camisaAwayTorcedor2025 from "../assets/imagens/produtos/camisa-away-torcedor-2025.png?format=webp";
import produtosData from "../assets/produtosData";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProdutoRating from "./ProdutoRating";

const Loja = () => {
	return (
		<section className="container__loja" id="Loja">
			<div className="container__destaque">
				<div className="loja__header">
					<h2 className="loja__title">Loja</h2>
					<span className="loja__subtitle">
						Os produtos abaixo são vendidos na loja oficial da Nike. Ao clicar,
						você será redirecionado para o site oficial.
					</span>
				</div>
				<div className="container__destaques flex gap-4">
					<div className="loja__item__destaque">
						<img
							src={camisaAwayTorcedor2025}
							className="loja__item__image"
							alt="Camisa Away Corinthians 2025"
						/>
						<div className="item__destaque__texts">
							<div className="item__destaque__header">
								Camisas <div className="separacao__div"></div> Edição Especial
							</div>

							<div className="item__destaque__content">
								<h2 className="item__destaque__title">
									Camiseta Away Torcedor Corinthians 2025
								</h2>

								{/* Avaliação */}
								<div className="item__destaque__rating flex items-center gap-2">
									<ProdutoRating nota={4.9} total={389} />
								</div>

								<p className="item__destaque__description">
									Mostre sua paixão pelo Timão com a{" "}
									<strong>Camiseta Away Torcedor Corinthians 2025</strong>. Um
									manto moderno que une tradição, estilo e conforto. Feita para
									o torcedor que vive o Corinthians dentro e fora dos estádios.
								</p>

								<ul className="item__destaque__list">
									<li>✔ Modelo Away 2025 – Torcedor</li>
									<li>✔ Tecido leve e respirável</li>
									<li>✔ Escudo oficial em destaque</li>
									<li>✔ Ideal para jogos e uso casual</li>
									<li>✔ Design moderno inspirado na Fiel</li>
								</ul>
							</div>

							<div className="item__destaque__footer">
								<button
									onClick={() =>
										(window.location.href =
											"https://www.nike.com.br/camisa-nike-corinthians-ii-2025-26-torcedor-pro-masculina-058825.html")
									}
									className="item__destaque__btn"
								>
									Comprar Agora
								</button>
								<div className="item__destaque__badge">
									<span className="item__destaque__preco">R$ 299,90</span>
									<span className="item__destaque__preco__antigo">
										R$ 349,90
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="loja__item__destaque">
						<img
							src={camisaAwayTorcedor2025}
							className="loja__item__image"
							alt="Camisa Away Corinthians 2025"
						/>
						<div className="item__destaque__texts">
							<div className="item__destaque__header">
								Camisas <div className="separacao__div"></div> Edição Especial
							</div>

							<div className="item__destaque__content">
								<h2 className="item__destaque__title">
									Camiseta Away Torcedor Corinthians 2025
								</h2>

								{/* Avaliação */}
								<div className="item__destaque__rating flex items-center gap-2">
									<ProdutoRating nota={4.9} total={389} />
								</div>

								<p className="item__destaque__description">
									Mostre sua paixão pelo Timão com a{" "}
									<strong>Camiseta Away Torcedor Corinthians 2025</strong>. Um
									manto moderno que une tradição, estilo e conforto. Feita para
									o torcedor que vive o Corinthians dentro e fora dos estádios.
								</p>

								<ul className="item__destaque__list">
									<li>✔ Modelo Away 2025 – Torcedor</li>
									<li>✔ Tecido leve e respirável</li>
									<li>✔ Escudo oficial em destaque</li>
									<li>✔ Ideal para jogos e uso casual</li>
									<li>✔ Design moderno inspirado na Fiel</li>
								</ul>
							</div>

							<div className="item__destaque__footer">
								<button
									onClick={() =>
										(window.location.href =
											"https://www.nike.com.br/camisa-nike-corinthians-ii-2025-26-torcedor-pro-masculina-058825.html")
									}
									className="item__destaque__btn"
								>
									Comprar Agora
								</button>
								<div className="item__destaque__badge">
									<span className="item__destaque__preco">R$ 299,90</span>
									<span className="item__destaque__preco__antigo">
										R$ 349,90
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="loja__content">
				<div className="separator__loja">COLEÇÃO COMPLETA</div>
				<Carousel
					plugins={[
						Autoplay({
							delay: 7000,
						}),
					]}
					className="container__carroseul relative"
				>
					<div className="sombra__carroseul">
						<CarouselContent className="carroseul__content first:!mx-[2svw] gap-5">
							{produtosData.map((produto) => (
								<CarouselItem
									className="item__produto  w-fit z-99 relative basis-[80svw] lg:basis-1/4 sm:basis-1/3"
									key={produto.id}
								>
									<div className="produto__header__card">
										<img
											src={produto.imagem}
											className="produto__card__image"
											alt={produto.titulo}
										/>
									</div>
									<div className="produto__content__card">
										<h2 className="produto__card__title">{produto.titulo}</h2>

										{/* Avaliação */}
										<ProdutoRating
											nota={produto.avaliacao.nota}
											total={produto.avaliacao.total}
										/>
										<p className="produto__card__description">
											{produto.descricao}
										</p>

										<div className="produto__footer__card">
											<div className="produto__badge">
												<span className="produto__preco">{produto.preco}</span>
												<span className="produto__preco__antigo">
													{produto.precoAntigo}
												</span>
											</div>
											<button
												onClick={() => (window.location.href = produto.link)}
												className="produto__btn cursor-pointer"
											>
												Ver Produto
											</button>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</div>
					<div className="carroseul__loja">
						<CarouselPrevious className="loja__carroseul__btn" />
						<CarouselNext className="loja__carroseul__btn" />
					</div>
				</Carousel>
			</div>
		</section>
	);
};

export default Loja;
