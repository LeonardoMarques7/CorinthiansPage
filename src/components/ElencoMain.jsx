// ElencoMain.jsx
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const ElencoMain = ({ elencoExibido }) => {
	return (
		<div className="elenco__main">
			{Array.isArray(elencoExibido) &&
				elencoExibido.map((grupo, index) => {
					const autoplayRef = useRef(
						Autoplay(
							{
								delay: 2000,
								stopOnInteraction: false,
								stopOnMouseEnter: true,
							},
							(emblaRoot) => emblaRoot.parentElement
						)
					);

					return (
						<section key={index} className="container__posicao">
							<Carousel
								plugins={[autoplayRef.current]}
								onMouseEnter={() => autoplayRef.current.stop()}
								onMouseLeave={() => autoplayRef.current.play()}
								onPointerDown={() => autoplayRef.current.stop()}
								onPointerUp={() => autoplayRef.current.play()}
								onTouchStart={() => autoplayRef.current.stop()}
								onTouchEnd={() => autoplayRef.current.play()}
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
											className="item__jogador z-99 relative basis-[80svw] md:basis-1/4 sm:basis-1/3"
										>
											<motion.div
												initial={{ opacity: 0, y: 100 }}
												whileInView={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.6, ease: "easeOut" }}
												viewport={{ once: true }}
												className="w-full h-full flex flex-col items-center"
											>
												<img src={jogador.foto} alt={jogador.nome} />
											</motion.div>
											<span className="badge__numero">#{jogador.numero}</span>
											<div className="footer__polaroid">
												<div>{jogador.nome}</div>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</section>
					);
				})}
		</div>
	);
};

export default ElencoMain;
