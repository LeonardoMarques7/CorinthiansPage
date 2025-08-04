import ronaldoImg from "../../assets/imagens/foto__ronaldo.png";

export default function ToastRonaldo() {
	return (
		<div className="toast__whatsapp">
			<img src={ronaldoImg} alt="Ronaldo Fenômeno" />
			<div className="toast__whatsapp__texts">
				<span>Ronaldo Fenômeno</span>
				<p>"Tem gol meu aí?"</p>
			</div>
		</div>
	);
}
