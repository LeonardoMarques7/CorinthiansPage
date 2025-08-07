import LogoCorinthians from "../assets/imagens/times/logoCorinthians.png";
import LogoJuventude from "../assets/imagens/times/logoJuventude.png";
import LogoBahia from "../assets/imagens/times/logoBahia.png";
import LogoVasco from "../assets/imagens/times/logoVasco.png";
import LogoPalmeiras from "../assets/imagens/times/logoPalmeiras.png";
import LogoFluminense from "../assets/imagens/times/logoFluminense.png";
import LogoSport from "../assets/imagens/times/logoSport.png";
import LogoFlamengo from "../assets/imagens/times/logoFlamengo.png";
import LogoInternacional from "../assets/imagens/times/logoInternacional.png";
import LogoMirassol from "../assets/imagens/times/logoMirassol.png";
import LogoSantos from "../assets/imagens/times/logoSantos.png";
import LogoAtleticoMG from "../assets/imagens/times/logoAtleticoMG.png";

const partidasData = [
	{
		competicao: "Brasileirão",
		time1: { sigla: "JUT", logo: LogoJuventude },
		time2: { sigla: "COR", logo: LogoCorinthians },
		dataHora: "11/08/2025 20h00",
		local: "RS - Caxias do Sul - Alfredo Jaconi",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthians },
		time2: { sigla: "BAH", logo: LogoBahia },
		dataHora: "16/08/2025 21h00",
		local: "SP - São Paulo - Neo Química Arena",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "VAS", logo: LogoVasco },
		time2: { sigla: "COR", logo: LogoCorinthians },
		dataHora: "24/08/2025 16h00",
		local: "RJ - Rio de Janeiro - São Januário",
	},
	{
		competicao: "Copa do Brasil",
		time1: { sigla: "COR", logo: LogoCorinthians },
		time2: { sigla: "—", logo: null }, // Adversário a ser definido nas quartas de final
		dataHora: "",
		local: "A definir",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthians },
		time2: { sigla: "PAL", logo: LogoPalmeiras },
		dataHora: "31/08/2025 18h30",
		local: "SP - São Paulo - Neo Química Arena",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "FLU", logo: LogoFluminense },
		time2: { sigla: "COR", logo: LogoCorinthians },
		dataHora: "",
		local: "RJ - Rio de Janeiro - Maracanã",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "SPT", logo: LogoSport },
		time2: { sigla: "COR", logo: LogoCorinthians },
		dataHora: "",
		local: "PE - Recife - Ilha do Retiro",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthians },
		time2: { sigla: "FLA", logo: LogoFlamengo },
		dataHora: "",
		local: "SP - São Paulo - Neo Química Arena",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "INT", logo: LogoInternacional },
		time2: { sigla: "COR", logo: LogoCorinthians },
		dataHora: "",
		local: "RS - Porto Alegre - Beira-Rio",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthians },
		time2: { sigla: "MRA", logo: LogoMirassol },
		dataHora: "",
		local: "SP - São Paulo - Neo Química Arena",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "SAN", logo: LogoSantos },
		time2: { sigla: "COR", logo: LogoCorinthians },
		dataHora: "",
		local: "SP - Santos - Vila Belmiro",
	},
	{
		competicao: "Brasileirão",
		time1: { sigla: "COR", logo: LogoCorinthians },
		time2: { sigla: "CAM", logo: LogoAtleticoMG },
		dataHora: "",
		local: "SP - São Paulo - Neo Química Arena",
	},
];

export default partidasData;
