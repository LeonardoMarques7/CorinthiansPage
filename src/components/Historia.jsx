import timelineData from "../assets/timelineData";
import Postagens from "./Postagens";

const Historia = () => {
	return (
		<div className="container__historia relative w-full" id="Historia">
			<h1 className="container__title">História</h1>
			<div className="container__texts__historia">
				<ul className="timeline timeline-snap-icon w-auto max-w-auto timeline-horizontal">
					{timelineData.map((item, index) => (
						<li key={index} className="my-28 relative">
							{index !== 0 && <hr />}

							{/* Ano + bolinha alinhados no meio */}
							<div className="timeline-middle flex items-center gap-3 justify-center">
								{/* Ano */}
								<time className="text-md absolute font-extrabold bg-white w-15 h-15 rounded-full flex justify-center text-black items-center">
									{item.year}
								</time>
							</div>
							{/* Conteúdo alternado */}
							<div
								className={`flex flex-col gap-3 !p-10 w-[30svw] mt-4 ${
									index % 2 === 0
										? "timeline-start justify-center md:text-end items-end"
										: "timeline-end justify-center items-start"
								}`}
							>
								<div className="text-xl font-black accordion__historia">
									{item.title}
								</div>

								<p className="text-lg w-full leading-relaxed !max-w-auto">
									{item.text}
								</p>
							</div>

							<hr />
						</li>
					))}
				</ul>
			</div>
			<div className="footer__texts__historia">
				<hr />
				<span className="historia__subtitle">
					Fonte: Site Oficial do Corinthians{" "}
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
	);
};

export default Historia;
