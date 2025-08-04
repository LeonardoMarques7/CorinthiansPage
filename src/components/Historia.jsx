import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import fotoS from "../assets/imagens/s.png";
import fotoC from "../assets/imagens/c.png";
import fotoP from "../assets/imagens/p.png";
import timelineData from "../assets/timelineData";
import postagensData from "../assets/postagensData";
// import logoTime from "../assets/imagens/logo__pequena__normal.png";
import {
	Heart,
	HeartIcon,
	Save,
	Trophy,
	MessageSquare,
	Bookmark,
} from "lucide-react";
import fotoLogo from "../assets/imagens/logo__cp.png";
import EmblemaCorinthiansGrande from "../assets/imagens/emblema__main__3d.png";
import { useEffect } from "react";
import foto1 from "../assets/imagens/foto1.png";
import fotoPostagem from "../assets/imagens/postagem.png";
import postLike from "../assets/imagens/like.png";
import emblema from "../assets/imagens/emblema__header.png";
import ScrollReveal from "scrollreveal";

const Historia = () => {
	useEffect(() => {
		ScrollReveal().reveal(".post__left", {
			origin: "left",
			distance: "50px",
			duration: 200,
			easing: "ease-in-out",
			interval: 100, // atraso entre itens
			reset: false, // true se quiser que a animação repita ao rolar
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
		<div className="container__historia" id="Historia">
			<div className="">
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
										<div className="card__image-wrapper">
											<img
												src={item.image}
												alt="Postagem 1"
												className="card__image"
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
								className={`timeline__item ${
									index % 2 === 0 ? "left" : "right"
								}`}
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
		</div>
	);
};

export default Historia;
