import React from "react";
import trofeuMundial from "../assets/imagens/titulos/mundial1.png";
import trofeuMundial2 from "../assets/imagens/titulos/mundial2.png";
import titulosData from "../assets/titulosData";

const Titulos = () => {
	return (
		<div className="container__titulos relative w-full" id="Titulos">
			<section className="titulos">
				<h1 className="container__titulos__title">Títulos do Timão</h1>
				<div className="list__titulos"></div>

				{titulosData.map((item, index) => (
					<div className="container__titulo" key={index}>
						<div className="titulo__texts">
							<span className="titulo__title">{item.title}</span>
							<span className="titulo__years">{item.years.join(", ")}</span>
						</div>
						<div className="container__image">
							<img src={item.image} className="image__titulo" alt="Troféu" />
							{item.image2 ? (
								<img
									src={item.image2}
									className="image__titulo_2"
									alt="Troféu"
								/>
							) : (
								<></>
							)}
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Titulos;
