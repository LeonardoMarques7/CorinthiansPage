import "./App.css";
import Header from "./components/Header";
import Historia from "./components/Historia";
import Main from "./components/Main";
import Titulos from "./components/Titulos";
import Separacao from "./components/Separacao";
import Elenco from "./components/Elenco";
import Noticias from "./components/Noticias";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="page-content">
			{/* Barra de Navegação */}
			<Header />

			{/* Tela Principal */}
			<Main />

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

			{/* Divisória */}
			<Separacao />

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
