import React from "react";
import EmblemaCorinthiansGrande from "../assets/imagens/emblema__main__3d.png";
import faixas from "../assets/imagens/faixas.png";
import Partidas from "./Partidas";

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
		</>
	);
};

export default Main;
