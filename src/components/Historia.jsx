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

		if (!logo || !separacao) return;

		let isDragging = false;
		let offsetY = 0;

		const onMouseDown = (e) => {
			isDragging = true;
			offsetY = e.clientY - logo.getBoundingClientRect().top;
			logo.style.cursor = "grabbing";
		};

		const onMouseMove = (e) => {
			if (!isDragging) return;

			const separacaoRect = separacao.getBoundingClientRect();
			let newTop = e.clientY - separacaoRect.top - offsetY;

			// Limites
			const maxTop = separacao.offsetHeight - logo.offsetHeight;
			if (newTop < 0) newTop = 0;
			if (newTop > maxTop) newTop = maxTop;

			logo.style.top = `${newTop}px`;
		};

		const onMouseUp = () => {
			isDragging = false;

			logo.style.cursor = "grab";
		};

		logo.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);

		return () => {
			logo.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
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
							<span
								className="logo__separacao"
								id="logoseparacao"
								draggable={false}
							>
								<img src={fotoLogo} alt="" />
								1910
							</span>
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
