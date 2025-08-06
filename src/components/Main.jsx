import React from "react";
import EmblemaCorinthiansGrande from "../assets/imagens/emblema__main__3d.png";
import LogoCorinthiansPequena from "../assets/imagens/logo__pequena__normal.png";
import LogoBotafogo from "../assets/imagens/logo__botafogo.png";
import LogoPalmeiras from "../assets/imagens/logo__palmeiras.png";
import LogoJuventude from "../assets/imagens/logo__juventude.png";
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
				<img
					className="main__image"
					src={EmblemaCorinthiansGrande}
					alt="Emblema do corinthians 3D"
				/>
			</main>
			<img
				className="main__faixa"
				src={faixas}
				alt="Faixas de Apoio do Corinthians"
			/>
			<div className="container__cards">
				<div className="main__partidas">
					<div className="badge__partida">
						<span className="icon__competicao">Copa do Brasil</span>
						<div className="info__times">
							<div className="main__partida">
								<div className="container__time">
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
								<span className="separacao__div"></span>
								<div className="footer__partida">
									<div className="data">
										<span className="data">06/08/2025 21H30</span>
									</div>
									<span className="local">SP - São Paulo - Allianz Parque</span>
								</div>
							</div>
						</div>
					</div>
					<div className="badge__partida">
						<span className="icon__competicao">Brasileirão</span>
						<div className="info__times">
							<div className="main__partida">
								<div className="container__time">
									<div className="time-1">
										<p>COR</p>
										<img
											src={LogoCorinthiansPequena}
											alt="Logo pequena do Corinthians"
										/>
									</div>
									<span className="x-mark">X</span>
									<div className="time-2">
										<img src={LogoJuventude} alt="Logo do Juventude" />
										<p>JUT</p>
									</div>
								</div>
								<span className="separacao__div"></span>
								<div className="footer__partida">
									<div className="data">
										<span className="data">11/08/2025 20h00</span>
									</div>
									<span className="local">
										RS - Caxias do Sul - Alfredo Jaconi
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="badge__partida">
						<span className="icon__competicao">Brasileirão</span>
						<div className="info__times">
							<div className="main__partida">
								<div className="container__time">
									<div className="time-1">
										<p>COR</p>
										<img
											src={LogoCorinthiansPequena}
											alt="Logo pequena do Corinthians"
										/>
									</div>
									<span className="x-mark">X</span>
									<div className="time-2">
										<img src={LogoJuventude} alt="Logo do Juventude" />
										<p>JUT</p>
									</div>
								</div>
								<span className="separacao__div"></span>
								<div className="footer__partida">
									<div className="data">
										<span className="data">11/08/2025 20h00</span>
									</div>
									<span className="local">
										RS - Caxias do Sul - Alfredo Jaconi
									</span>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<p className="text__expandir">Ver todas as partidas</p>
		</>
	);
};

export default Main;
