import { motion, useScroll } from "framer-motion";
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
import { Button } from "@/components/ui/button";
import { ChevronUpIcon, Quote } from "lucide-react";
import useIsMobile from "./components/hooks/useIsMoblie";
import Loja from "./components/Loja";

// ... seus contatosLendarios

function App() {
	const { scrollYProgress } = useScroll(); // Progresso da rolagem
	const [mostrarBotao, setMostrarBotao] = useState(false);
	const mainRef = useRef(null);

	useEffect(() => {
		const aoRolar = () => {
			if (mainRef.current) {
				const alturaMain = mainRef.current.offsetHeight;
				setMostrarBotao(window.scrollY > alturaMain);
			}
		};
		window.addEventListener("scroll", aoRolar);
		return () => window.removeEventListener("scroll", aoRolar);
	}, []);

	const subirAoTopo = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const isMobile = useIsMobile();

	const chamadaRonaldo = () => {
		const contato =
			contatosLendarios[Math.floor(Math.random() * contatosLendarios.length)];
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
			{/* Barra de progresso no topo */}
			<motion.div
				style={{
					scaleX: scrollYProgress,
					transformOrigin: "0%", // barra cresce da esquerda
				}}
				className="progress-bar"
			/>

			<Header />
			<Main />

			<Toaster position={isMobile ? "bottom-right" : "top-right"} />

			<div ref={mainRef}>
				<Partidas />
			</div>

			<Historia />
			<Separacao />
			<Titulos />
			<Separacao />
			<Elenco />
			<Separacao />
			<Noticias />
			<Loja />
			<Footer />

			{/* Botões flutuantes */}
			<span
				className={`container__actions transition-all duration-500 ease-in-out sticky flex gap-2
					${
						mostrarBotao
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-5 pointer-events-none"
					}
				`}
			>
				<Button className="botao-topo" onClick={subirAoTopo}>
					<ChevronUpIcon size={20} />
				</Button>
			</span>
		</div>
	);
}

export default App;
