import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import timelineData from "../assets/timelineData";
import postagensData from "../assets/postagensData";
import emblema from "../assets/imagens/emblema__header.png";
import ScrollReveal from "scrollreveal";

// ... seus outros imports

const Historia = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		ScrollReveal().reveal(".post__left", {
			origin: "left",
			distance: "50px",
			duration: 200,
			easing: "ease-in-out",
			interval: 100,
			reset: false,
		});

		ScrollReveal().reveal(".post__right", {
			origin: "right",
			distance: "50px",
			duration: 500,
			easing: "ease-in-out",
			interval: 100,
			reset: false,
		});
	}, []);

	return (
		<div className="container__historia relative w-full" id="Historia">
			<h1 className="container__title">História</h1>
			<div className="container__texts__historia">
				<section className="container__posts">
					<span className="timeline__posts">
						{postagensData.map((item, index) => (
							<div
								className={`card ${
									index % 2 === 0 ? "post__left" : "post__right"
								}`}
								key={index}
							>
								<div className="card__header">
									<img src={emblema} className="image__postagem" alt="" />

									<div className="card__image-wrapper relative">
										{/* Skeleton enquanto a imagem não carrega */}
										{!loaded && (
											<Skeleton className="absolute inset-0 w-full h-full rounded" />
										)}

										<img
											src={item.image}
											alt={`Postagem ${index + 1}`}
											className={`card__image transition-opacity duration-500 ${
												loaded ? "opacity-100" : "opacity-0"
											}`}
											onLoad={() => setLoaded(true)}
										/>
									</div>
								</div>
							</div>
						))}
					</span>
				</section>
				<div className="timeline">
					{timelineData.map((item, index) => (
						<div
							key={index}
							className={`timeline__item ${index % 2 === 0 ? "left" : "right"}`}
						>
							<div className="content">
								<Accordion
									collapsible
									defaultValue={index % 2 === 0 ? "item-1" : undefined}
								>
									<AccordionItem value="item-1">
										<AccordionTrigger className="accordion__historia">
											{item.year} {item.title}
										</AccordionTrigger>
										<AccordionContent className="accordion__content">
											{item.text}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
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
	);
};

export default Historia;
