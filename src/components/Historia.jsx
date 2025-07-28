import fotoS from "../assets/imagens/s.png";
import fotoC from "../assets/imagens/c.png";
import fotoP from "../assets/imagens/p.png";
import fotoLinhaDoTempo from "../assets/imagens/linha-do-tempo.png";
import timelineData from "../assets/timelineData";

const Historia = () => {
	return (
		<div className="container__historia">
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
						<span className="separacao">
							<img src={fotoLinhaDoTempo}></img>
						</span>
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
