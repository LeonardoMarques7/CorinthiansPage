import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import timelineData from "../assets/timelineData";
import { useEffect } from "react";

const Historia = () => {
	const [sliderRef, slider] = useKeenSlider({
		loop: false, // Mantém o loop infinito
		mode: "snap",
		slides: {
			perView: 3,
		},
		breakpoints: {
			"(max-width: 768px)": {
				slides: {
					perView: 1,
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
				className="!timeline !items-end keen-slider !max-h-auto !justify-start timeline-snap-icon w-full timeline-compact cursor-grab"
			>
				{timelineData.map((item, index) => (
					<li
						key={index}
						className="keen-slider__slide first:!ml-[2svw] py-10 relative flex flex-col items-center"
					>
						{index !== 0 && (
							<hr className="!bg-white !border-white !text-white" />
						)}

						<div className="timeline-middle flex items-center !px-0 !left-0 gap-3 w-fulljustify-center">
							<time className="text-md absolute font-extrabold bg-white w-15 h-15 rounded-[10px] flex justify-center text-black items-center">
								{item.year}
							</time>
						</div>

						<div
							className={`flex flex-col gap-3 justify-start !mx-[.5rem] items-start !py-10 ${
								index % 2 === 0 ? "timeline-start " : "timeline-end "
							}`}
						>
							<div className="text-xl font-black  text-start accordion__historia">
								{item.title}
							</div>
							<p className="text-lg w-full leading-relaxed min-h-[50rem] max-h-[50rem] ">
								<div className="texts__historia !line-clamp-10 overflow-hidden ">
									{item.text}
								</div>
							</p>
						</div>

						<hr className="!bg-white !border-white !text-white" />
					</li>
				))}
			</ul>
		</>
	);
};

export default Historia;
