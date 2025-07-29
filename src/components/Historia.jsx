import fotoS from "../assets/imagens/s.png";
import fotoC from "../assets/imagens/c.png";
import fotoP from "../assets/imagens/p.png";
import timelineData from "../assets/timelineData";
// import logoTime from "../assets/imagens/logo__pequena__normal.png";
import { Trophy } from "lucide-react";
import fotoLogo from "../assets/imagens/emblema__header.png";
import { useEffect } from "react";

const Historia = () => {
	useEffect(() => {
		const logo = document.getElementById("logoseparacao");
		const separacao = document.getElementById("separacao");
		const ano = document.getElementById("anoSeparacao");

		if (!logo || !separacao || !ano) return;

		const totalAnos = 2025 - 1910;

		// Fator para aumentar a área útil do scroll (quanto maior, mais espaçado)
		const fatorEspaco = 1.5; // Tente ajustar (ex: 2, 3, 4) para ver o efeito

		const onScroll = () => {
			// Scroll normal
			const scrollTop = window.scrollY;
			const scrollHeight = document.body.scrollHeight - window.innerHeight;

			// Scroll percentual (0 a 1)
			let scrollPercent = scrollTop / scrollHeight;

			// Aplicando o fator para desacelerar a troca do ano
			scrollPercent = Math.min(scrollPercent / fatorEspaco, 1);

			// Cálculo do ano
			const anoAtual = Math.round(1910 + totalAnos * scrollPercent);

			// Calcular a altura máxima do movimento do logo
			const maxTop = separacao.offsetHeight - logo.offsetHeight;

			// Aplica o movimento no logo e no ano, usando o scrollPercent ajustado
			const newTop = scrollPercent * maxTop;

			logo.style.top = `${newTop}px`;
			ano.style.top = `${newTop + logo.offsetHeight / 2}px`;
			ano.innerText = anoAtual;
		};

		window.addEventListener("scroll", onScroll);

		// Atualiza na inicialização para refletir posição atual do scroll
		onScroll();

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div className="container__historia" id="Historia">
			<div className="">
				<h1 className="container__title">História</h1>
				<div className="container__texts__historia">
					<div className="container__texts left">
						{timelineData
							.filter((_, i) => i % 2 === 0)
							.map((item, index) => (
								<div key={index} className="group__text">
									<h1 className="text__title">
										{item.year} {item.title}
									</h1>
									<p>{item.text}</p>
								</div>
							))}
					</div>
					<span className="image__historia">
						<div className="separacao" id="separacao">
							<div className="logo__separacao" id="logoseparacao">
								<span id="anoSeparacao" className="ano__separacao">
									1910
								</span>
								<img src={fotoLogo} alt="" />
							</div>
						</div>
					</span>

					<div className="container__texts right">
						{timelineData
							.filter((_, i) => i % 2 !== 0)
							.map((item, index) => (
								<div key={index} className="group__text">
									<h1 className="text__title">
										{item.year} {item.title}
									</h1>
									<p>{item.text}</p>
								</div>
							))}
					</div>
				</div>
				<div className="footer__texts__historia">
					<hr />
					<span className="historia__subtitle">
						Fonte: Site Oficial do Corinthians
						<a
							href="https://www.corinthians.com.br/clube/historia"
							target="_blank"
							rel="noopener noreferrer"
							className="historia__link"
						>
							https://www.corinthians.com.br/clube/historia
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Historia;
