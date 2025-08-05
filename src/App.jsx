import "./App.css";
import Header from "./components/Header";
import Historia from "./components/Historia";
import Main from "./components/Main";
import Titulos from "./components/Titulos";
import Separacao from "./components/Separacao";
import Elenco from "./components/Elenco";

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
