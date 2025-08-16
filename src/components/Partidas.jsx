import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronRight } from "lucide-react";
import timeNull from "../assets/imagens/times/timeNull.png";

import partidasData from "../assets/partidasData";

const Partidas = () => {
	return (
		<section className="section__partidas mx-auto w-full">
			<div className="header__texts__partidas">
				<h1 className="container__title">Partidas </h1>
				<span className="container__subtitle flex items-center gap-4">
					Arraste para o lado para ver mais partias
					<ArrowRight />
				</span>
			</div>

			<Carousel
				plugins={[
					Autoplay({
						delay: 7000,
					}),
				]}
				className="container__carroseul w-full mx-auto h-full flex flex-col"
			>
				<CarouselContent className="carroseul__content flex items-center gap-10">
					{partidasData.map((partida, idx) => (
						<CarouselItem
							key={idx}
							className={`carroseul__item w-fit z-99 basis-auto relative ${
								idx % 2 === 0 ? "partida__primary" : "partida__secondary"
							}`}
						>
							<div className="badge__partida">
								<div className="info__times">
									<div className="main__partida">
										<div className="container__time">
											<div className="time-1">
												<p>{partida.time1.sigla}</p>
												<img
													src={partida.time1.logo}
													alt={`Logo ${partida.time1.sigla}`}
												/>
											</div>
											<span className="x-mark">X</span>
											<div className="time-2">
												{partida.time2.logo ? (
													<>
														<img
															src={partida.time2.logo}
															alt={`Logo ${partida.time2.sigla}`}
														/>
														<p>{partida.time2.sigla}</p>
													</>
												) : (
													<>
														<img
															src={timeNull}
															alt={"Time a Definir"}
															className="time__null"
														/>
														<p>NULL</p>
													</>
												)}
											</div>
										</div>
										<div className="footer__partida">
											<span className="icon__competicao">
												{partida.competicao}
											</span>
											<div className="data">
												{partida.dataHora ? (
													<span>{partida.dataHora}</span>
												) : (
													<span>Data e Hora a Definir</span>
												)}
											</div>
											<span className="local">{partida.local}</span>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="container__actions__carroseul">
					<CarouselPrevious className="carroseul__voltar" />
					<CarouselNext className="carroseul__proximo" />
				</div>
			</Carousel>
		</section>
	);
};

export default Partidas;
