import React from "react";
import EmblemaCorinthiansGrande from "../assets/imagens/emblema__main__3d.png";
import LogoBrasileirao from "../assets/imagens/logo__brasileirao__novo.png";
import LogoCopaDoBrasil from "../assets/imagens/logo__copa-do-brasil.png";
import LogoCorinthiansPequena from "../assets/imagens/logo__pequena__normal.png";
import LogoBotafogo from "../assets/imagens/logo__botafogo.png";
import LogoPalmeiras from "../assets/imagens/logo__palmeiras.png";
import faixas from "../assets/imagens/faixas.png";

const Main = () => {
	return (
		<>
			<main>
				<div className="main__texts">
					<h1 className="main__title">Sport Club Corinthians Paulista</h1>
					<h2 className="main__subtitle">
						Mais que um clube, uma paixão que une milhões
					</h2>
				</div>
				<div className="main__partidas">
					<div className="badge__partida">
						<span className="icon__competicao">Brasileirão</span>
						<div className="info__times">
							<div className="time-1">
								<p>COR</p>
								<img
									src={LogoCorinthiansPequena}
									alt="Logo pequena do Corinthians"
								/>
							</div>
							<span className="x-mark">X</span>
							<div className="time-2">
								<img src={LogoBotafogo} alt="Logo pequena do Botafogo" />
								<p>BOT</p>
							</div>
						</div>
						<div className="data-local">
							<span className="data">26/07/2025 18H30</span>
							<span className="local">RJ - Rio de Janeiro - Nilton Santos</span>
						</div>
					</div>
					{/*  */}
					<div className="badge__partida">
						<span className="icon__competicao">Copa do Brasil</span>
						<div className="info__times">
							<div className="time-1">
								<p>COR</p>
								<img
									src={LogoCorinthiansPequena}
									alt="Logo pequena do Corinthians"
								/>
							</div>
							<span className="x-mark">X</span>
							<div className="time-2">
								<img src={LogoPalmeiras} alt="Logo pequena do Palmeiras" />
								<p>PAL</p>
							</div>
						</div>
						<div className="data-local">
							<span className="data">30/07/2025 21h30</span>
							<span className="local">SP - ITAQUERA - Neo Química Arena</span>
						</div>
					</div>
					<p className="text__expandir">Ver todas as partidas</p>
				</div>
				<img
					className="main__image
                "
					src={EmblemaCorinthiansGrande}
					alt="Emblema do corinthians 3D"
				/>
			</main>
			<img
				className="main__faixa"
				src={faixas}
				alt="Faixas de Apoio do Corinthians"
			/>
		</>
	);
};

export default Main;
