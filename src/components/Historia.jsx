import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import timelineData from "../assets/timelineData";

const Historia = () => {
	const [sliderRef] = useKeenSlider({
		// Configurações do Keen-Slider
		loop: true, // Desativa o loop infinito
		mode: "snap", // Permite que a rolagem "grude" nos slides
		slides: {
			perView: 3, // Espaço entre os slides (em pixels)
		},
		breakpoints: {
			// Configurações para telas menores
			"(max-width: 768px)": {
				slides: {
					perView: 1, // Mostra apenas 1 slide em telas menores que 768px
					spacing: 15,
				},
			},
		},
	});

	return (
		<>
			<div className="container__historia !p-[2svw]">
				<h1 className="container__title">História</h1>
			</div>
			<ul
				ref={sliderRef}
				className="keen-slider timeline !items-end !mb-25 !mt-[-40rem] !max-h-auto !justify-start timeline-snap-icon timeline-compact cursor-grab"
			>
				{timelineData.map((item, index) => (
					<li
						key={index}
						className="keen-slider__slide px-6 py-10 relative flex flex-col items-center"
					>
						{index !== 0 && <hr />}

						{/* Ano + bolinha alinhados no meio */}
						<div className="timeline-middle flex items-center !px-10 gap-3 justify-center">
							{/* Ano */}
							<time className="text-md absolute font-extrabold bg-white w-15 h-15 rounded-full flex justify-center text-black items-center">
								{item.year}
							</time>
						</div>
						{/* Conteúdo alternado */}
						<div
							className={`flex flex-col gap-3 !p-10 mt-4 ${
								index % 2 === 0
									? "timeline-start justify-center md:text-start items-"
									: "timeline-end justify-center items-start"
							}`}
						>
							<div className="text-xl font-black accordion__historia">
								{item.title}
							</div>

							<p className="text-lg w-full leading-relaxed min-h-[40rem] max-h-[40rem]">
								{item.text}
							</p>
						</div>

						<hr />
					</li>
				))}
			</ul>
		</>
	);
};

export default Historia;
