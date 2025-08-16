import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import timelineData from "../assets/timelineData";
import Postagens from "./Postagens";

// ... seus outros imports

const Historia = () => {
	return (
		<div className="container__historia relative w-full" id="Historia">
			<h1 className="container__title">História</h1>
			<div className="container__texts__historia">
				<Postagens />
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
