import React from "react";
import elencoMasc from "../assets/elencoMasc";

const Elenco = () => {
	return (
		<section className="container__elenco" id="Elenco">
			<div className="card__elenco">
				<div className="elenco__header">
					<h1 className="container__elenco__title">Elenco</h1>
					<div className="group__action">
						<span className="action__masc">Masculino</span>
						<span className="action__fem">Feminino</span>
					</div>
				</div>
				<div className="elenco__main">
					{elencoMasc.map((grupo, index) => (
						<section key={index} className="container__posicao">
							<h2 className="posicao__title">{grupo.posicao}</h2>
							<div className="list__jogadores">
								{grupo.jogadores.map((jogador, idx) => (
									<div key={idx} className="item__jogador">
										<img src={jogador.foto} alt={jogador.nome} />
										<div className="badge__jogador">{jogador.nome}</div>
									</div>
								))}
							</div>
						</section>
					))}
				</div>
			</div>
		</section>
	);
};

export default Elenco;
