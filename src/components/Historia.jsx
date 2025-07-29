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

		let isDragging = false;
		let offsetY = 0;

		const totalAnos = 2025 - 1910;

		const onMouseDown = (e) => {
			isDragging = true;
			offsetY = e.clientY - logo.getBoundingClientRect().top;
			logo.style.cursor = "grabbing";
		};

		const onMouseMove = (e) => {
			if (!isDragging) return;

			const separacaoRect = separacao.getBoundingClientRect();
			let newTop = e.clientY - separacaoRect.top - offsetY;

			const maxTop = separacao.offsetHeight - logo.offsetHeight;
			if (newTop < 0) newTop = 0;
			if (newTop > maxTop) newTop = maxTop;

			logo.style.top = `${newTop}px`;
			ano.style.top = `${newTop + logo.offsetHeight / 62}px`;

			const percent = newTop / maxTop;
			const anoAtual = Math.round(1910 + totalAnos * percent);
			ano.innerText = anoAtual;
		};

		const onMouseUp = () => {
			isDragging = false;
			logo.style.cursor = "grab";
		};

		const onScroll = () => {
			if (isDragging) return; // Não atualiza com scroll se estiver arrastando

			const scrollTop = window.scrollY;
			const scrollHeight = document.body.scrollHeight - window.innerHeight;
			const scrollPercent = scrollTop / scrollHeight;

			const anoAtual = Math.round(1910 + totalAnos * scrollPercent);

			// Converte o scroll em altura proporcional ao separador
			const maxTop = separacao.offsetHeight - logo.offsetHeight;
			const newTop = scrollPercent * maxTop;

			logo.style.top = `${newTop}px`;
			ano.style.top = `${newTop + logo.offsetHeight / 2}px`;
			ano.innerText = anoAtual;
		};

		logo.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		window.addEventListener("scroll", onScroll);

		return () => {
			logo.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
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
