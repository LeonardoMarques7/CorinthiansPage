import "./App.css";
import Header from "./components/Header";
import Historia from "./components/Historia";
import Main from "./components/Main";

function App() {
	return (
		<>
			{/* Barra de Navegação */}
			<Header />

			{/* Tela Principal */}
			<Main />

			{/* História do Clube */}
			<Historia />
		</>
	);
}

export default App;
