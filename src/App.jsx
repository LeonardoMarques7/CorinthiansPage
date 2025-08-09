import "./App.css";
import Header from "./components/Header";
import Historia from "./components/Historia";
import Main from "./components/Main";
import Titulos from "./components/Titulos";
import Separacao from "./components/Separacao";
import Elenco from "./components/Elenco";
import Noticias from "./components/Noticias";
import Footer from "./components/Footer";
import Partidas from "./components/Partidas";
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { Button } from "@/components/ui/button"; // botão do shadcn
import { ArrowBigUp, Bell, ChevronUpIcon, Quote } from "lucide-react";
import ronaldoImg from "./assets/imagens/foto__ronaldo.png";
import socratesImg from "./assets/imagens/foto__socrates.png";
import marcelinhoImg from "./assets/imagens/foto__marcelinho.png";
import titeImg from "./assets/imagens/foto__tite.png";
import robertoImg from "./assets/imagens/foto__roberto.png";
import useIsMobile from "./components/hooks/useIsMoblie";

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

function App() {
	const [mostrarBotao, setMostrarBotao] = useState(false);
	const mainRef = useRef(null);
	useEffect(() => {
		const aoRolar = () => {
			if (mainRef.current) {
				const alturaMain = mainRef.current.offsetHeight;
				if (window.scrollY > alturaMain) {
					setMostrarBotao(true);
				} else {
					setMostrarBotao(false);
				}
			}
		};

		window.addEventListener("scroll", aoRolar);
		return () => window.removeEventListener("scroll", aoRolar);
	}, []);

	// Subir suavemente até o topo
	const subirAoTopo = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Mostrar o botão ao rolar a página

	const isMobile = useIsMobile();

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

	return (
		<div className="page-content">
			{/* Barra de Navegação */}
			<Header />

			<Main />
			{/* Tela Principal */}

			<Toaster
				position={isMobile ? "bottom-right" : "top-right"}
				className="toaster"
			/>

			{/* Botão fixo */}

			{/* Partidas */}
			<div ref={mainRef}>
				<Partidas />
			</div>

			{/* História do Clube */}
			<Historia />

			{/* Divisória */}
			<Separacao />

			{/* Títulos do Clube */}
			<Titulos />

			{/* Divisória */}
			<Separacao />

			{/* Elenco do Clube */}
			<Elenco />

			{/* Divisória */}
			<Separacao />

			{/* Notícias */}
			<Noticias />

			{/* Footer */}
			<Footer />
			<span
				className={`container__actions  transition-all duration-500 ease-in-out sticky top-2 flex gap-2
	${
		mostrarBotao
			? "opacity-100 translate-y-0"
			: "opacity-0 translate-y-5 pointer-events-none"
	}`}
			>
				<Button className="botao-topo" onClick={subirAoTopo}>
					<ChevronUpIcon size={20} />
				</Button>
				<Button onClick={chamadaRonaldo} className="button__trigger">
					<Quote />
				</Button>
			</span>
		</div>
	);
}

export default App;
