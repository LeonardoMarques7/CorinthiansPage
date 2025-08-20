import React from "react";
import SeparacaoImg from "../assets/imagens/emblema__header.png?format=webp";

const Separacao = () => {
	return (
		<div className="separacao">
			{Array.from({ length: 80 }).map((_, index) => (
				<img
					key={index}
					src={SeparacaoImg}
					alt=""
					className={`image__logo ${index % 2 !== 0 ? "invertida" : ""}`}
				/>
			))}
		</div>
	);
};

export default Separacao;
