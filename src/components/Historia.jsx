import { useEffect } from "react";

import { Toaster, toast } from "sonner";
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
import { Button } from "@/components/ui/button"; // botão do shadcn
import { ArrowBigUp, Bell, ChevronUpIcon, Quote } from "lucide-react";
import ToastRonaldo from "./ui/ToastRonaldo";
import ronaldoImg from "../assets/imagens/foto__ronaldo.png";
import socratesImg from "../assets/imagens/foto__socrates.png";
import marcelinhoImg from "../assets/imagens/foto__marcelinho.png";
import titeImg from "../assets/imagens/foto__tite.png";
import robertoImg from "../assets/imagens/foto__roberto.png";
import useIsMobile from "./hooks/useIsMoblie";

// ... seus outros imports
const contatosLendarios = [
	{
		nome: "Sócrates",
		foto: socratesImg,
		mensagens: [
			'"Ganhar ou perder, mas sempre com democracia"', // Símbolo da Democracia Corinthiana :contentReference[oaicite:1]{index=1}
			'"O Corinthians é muito mais do que um clube… é uma força de expressão"', // Frase icônica retratada em homenagens atuais :contentReference[oaicite:2]{index=2}
		],
	},
	{
		nome: "Marcelinho Carioca",
		foto: marcelinhoImg,
		mensagens: [
			'"Aqui é minha segunda pele"', // Declarou depois de se apaixonar pelo clube :contentReference[oaicite:3]{index=3}
			'"Quero marcar minha passagem aqui"', // Palavras da sua apresentação no Parque São Jorge :contentReference[oaicite:4]{index=4}
		],
	},
	{
		nome: "Ronaldo Fenômeno",
		foto: ronaldoImg,
		mensagens: [
			'"Agora eu sou mais um louco no bando"', // Falou ao adotar a Fiel como sua torcida :contentReference[oaicite:5]{index=5}
			'"A torcida do Corinthians é a melhor do mundo!"', // Declarou em entrevista elogiando os fãs :contentReference[oaicite:6]{index=6}
		],
	},
	{
		nome: "Tite",
		foto: titeImg,
		mensagens: [
			'"O vencedor é um cara persistente"', // Mantra usado nas preleções em 2011 :contentReference[oaicite:7]{index=7}
			'"Esse time tem alma de competição"', // Comentou sobre o espírito do elenco aclame :contentReference[oaicite:8]{index=8}
			'"Ser corinthiano é acreditar que tudo é possível"', // Valoriza fé e confiança no clube :contentReference[oaicite:9]{index=9}
		],
	},
	{
		nome: "Roberto Rivellino",
		foto: robertoImg,
		mensagens: [
			'"O Corinthians representa tudo na minha vida"', // Disse em fórum “Meu Timão” sobre sua paixão :contentReference[oaicite:10]{index=10}
			'"Não me considero o melhor, mas meu nome está incluído entre os maiores"', // Autoavaliação com humildade :contentReference[oaicite:11]{index=11}
		],
	},
];

const Historia = () => {
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

	const chamadaRonaldo = () => {
		const contato =
			contatosLendarios[Math.floor(Math.random() * contatosLendarios.length)];

		// Escolhe uma mensagem aleatória desse contato
		const mensagem =
			contato.mensagens[Math.floor(Math.random() * contato.mensagens.length)];

		toast.custom(() => (
			<div className="toast__whatsapp">
				<img src={contato.foto} alt={contato.nome} />
				<div className="toast__whatsapp__texts">
					<span>{contato.nome}</span>
					<p>{mensagem}</p>
				</div>
			</div>
		));
	};

	// Mostrar o botão ao rolar a página
	useEffect(() => {
		const aoRolar = () => {
			if (window.scrollY > 400) {
				setMostrarBotao(true);
			} else {
				setMostrarBotao(false);
			}
		};
		window.addEventListener("scroll", aoRolar);
		return () => window.removeEventListener("scroll", aoRolar);
	}, []);

	// Subir suavemente até o topo
	const subirAoTopo = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const isMobile = useIsMobile();

	return (
		<div className="container__historia relative w-full" id="Historia">
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
			<span className="container__actions">
				<Button className={`botao-topo`} onClick={subirAoTopo}>
					<ChevronUpIcon size={20} />
				</Button>
				<Button onClick={chamadaRonaldo} className="button__trigger">
					<Quote />
				</Button>
			</span>
			<Toaster
				position={isMobile ? "bottom-right" : "top-right"}
				className="toaster"
			/>
		</div>
	);
};

export default Historia;
