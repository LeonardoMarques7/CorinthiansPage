import React, { useState } from "react";
import elencoCompleto from "../assets/elencoCompleto";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Badge, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const Elenco = () => {
	const [elencoExibido, setElencoExibido] = useState(
		elencoCompleto[0].Masculino
	);
	const [generoSelecionado, setGeneroSelecionado] = useState("Masculino");

	const trocarElenco = (genero) => {
		setGeneroSelecionado(genero);
		setElencoExibido(elencoCompleto[0][genero]);
	};

	return (
		<section className="container__elenco" id="Elenco">
			<div className="card__elenco">
				<div className="elenco__header">
					<h1 className="container__elenco__title">Elenco</h1>
					<div className="group__action">
						<button
							className={`action__masc ${
								generoSelecionado === "Masculino" ? "active" : ""
							}`}
							onClick={() => trocarElenco("Masculino")}
						>
							Masculino
						</button>
						<button
							className={`action__fem ${
								generoSelecionado === "Feminino" ? "active" : ""
							}`}
							onClick={() => trocarElenco("Feminino")}
						>
							Feminino
						</button>
					</div>
				</div>
				<div className="elenco__main">
					{Array.isArray(elencoExibido) &&
						elencoExibido.map((grupo, index) => (
							<section key={index} className="container__posicao">
								<Carousel
									plugins={[
										Autoplay({
											delay: 5000,
										}),
									]}
									className="container__carroseul w-full flex flex-col"
								>
									<div className="carroseul__header__posicao flex items-center">
										<div className="carroseul__actions__elenco">
											<CarouselPrevious className="carroseul__voltar" />
											<CarouselNext className="carroseul__proximo" />
										</div>
										<h2 className="posicao__title">{grupo.posicao}</h2>
									</div>
									<CarouselContent className="carroseul__jogadores">
										{grupo.jogadores.map((jogador, idx) => (
											<CarouselItem
												key={idx}
												className={`item__jogador z-99 relative basis-[80svw] md:basis-1/4 sm:basis-1/3`}
											>
												<motion.div
													initial={{ opacity: 0, y: 100 }} // começa invisível e mais abaixo
													whileInView={{ opacity: 1, y: 0 }} // aparece e sobe
													transition={{ duration: 0.6, ease: "easeOut" }}
													viewport={{ once: true }} // anima só na primeira vez que aparece
													className="w-full h-full flex flex-col items-center"
												>
													<img src={jogador.foto} alt={jogador.nome} />
												</motion.div>
												<span className="badge__numero">#{jogador.numero}</span>
												<div className="footer__polaroid">
													<div className="">{jogador.nome}</div>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
								</Carousel>
							</section>
						))}
				</div>
			</div>
		</section>
	);
};

export default Elenco;
