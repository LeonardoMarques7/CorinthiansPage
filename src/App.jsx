import "./App.css";
import { useState, useEffect } from "react";
import { ArrowUp, ChevronUp } from "lucide-react"; // ícone seta para cima
import Header from "./components/Header";
import Historia from "./components/Historia";
import Main from "./components/Main";

function App() {
	const [mostrarBotao, setMostrarBotao] = useState(false);

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

	return (
		<>
			{/* Barra de Navegação */}
			<Header />

			{/* Tela Principal */}
			<Main />

			{/* História do Clube */}
			<Historia />

			{/* Botão de Subir */}
			{mostrarBotao && (
				<button
					className={`botao-topo ${!mostrarBotao ? "oculto" : ""}`}
					onClick={subirAoTopo}
				>
					<ArrowUp size={20} />
				</button>
			)}
		</>
	);
}

export default App;
