import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import LogoCorinthiansPequena from "../assets/imagens/logo__pequena__normal.png";
import LogoPalmeiras from "../assets/imagens/logo__palmeiras.png";
import LogoJuventude from "../assets/imagens/logo__juventude.png";

const partidasData = [
	{
		competicao: "Copa do Brasil",
		time1: { sigla: "COR", logo: LogoCorinthiansPequena },
		time2: { sigla: "PAL", logo: LogoPalmeiras },
		dataHora: "06/08/2025 21H30",
		local: "SP - São Paulo - Allianz Parque",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthiansPequena },
		time2: { sigla: "JUT", logo: LogoJuventude },
		dataHora: "11/08/2025 20h00",
		local: "RS - Caxias do Sul - Alfredo Jaconi",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthiansPequena },
		time2: { sigla: "JUT", logo: LogoJuventude },
		dataHora: "11/08/2025 20h00",
		local: "RS - Caxias do Sul - Alfredo Jaconi",
	},
	{
		competicao: "Copa do Brasil",
		time1: { sigla: "COR", logo: LogoCorinthiansPequena },
		time2: { sigla: "PAL", logo: LogoPalmeiras },
		dataHora: "06/08/2025 21H30",
		local: "SP - São Paulo - Allianz Parque",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthiansPequena },
		time2: { sigla: "JUT", logo: LogoJuventude },
		dataHora: "11/08/2025 20h00",
		local: "RS - Caxias do Sul - Alfredo Jaconi",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthiansPequena },
		time2: { sigla: "JUT", logo: LogoJuventude },
		dataHora: "11/08/2025 20h00",
		local: "RS - Caxias do Sul - Alfredo Jaconi",
	},
];

const Partidas = () => {
	return (
		<>
			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full max-w-screen-xl mx-auto"
			>
				{/* Garante que a rolagem funcione */}
				<CarouselContent className="-ml-2">
					{partidasData.map((partida, idx) => (
						<CarouselItem
							key={idx}
							className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3"
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
												<img
													src={partida.time2.logo}
													alt={`Logo ${partida.time2.sigla}`}
												/>
												<p>{partida.time2.sigla}</p>
											</div>
										</div>
										<div className="footer__partida">
											<span className="icon__competicao">
												{partida.competicao}
											</span>
											<div className="data">
												<span>{partida.dataHora}</span>
											</div>
											<span className="local">{partida.local}</span>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</>
	);
};

export default Partidas;
