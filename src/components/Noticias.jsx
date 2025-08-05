import { Heart, MessageCircle } from "lucide-react";
import React from "react";
import noticia1 from "../assets/imagens/noticias/noticia1.png";
import noticia2 from "../assets/imagens/noticias/noticia2.png";
import heart from "../assets/imagens/noticias/heart.png";

const Noticias = () => {
	return (
		<div>
			<section className="container__noticias" id="Noticias">
				<h1 className="container__noticias__title">Notícias</h1>
				<div className="feed__noticias">
					<div className="card__noticia">
						<img
							src={noticia1}
							className="image__noticia"
							alt="Imagem da Notícia"
						/>
						<div className="texts__noticia">
							<h2 className="noticia__title">
								Corinthians conclui renovação contratual de Yuri Alberto
							</h2>
							<span className="noticia__subtitle">
								Novo acordo entre clube e atleta é válido até o meio de 2030
								<p className="date">24/07/2025 19h54 Assessoria de imprensa</p>
							</span>
							<p className="noticia__paragraph">
								Nesta quinta-feira (24), o Corinthians acertou a renovação de
								contrato do atacante Yuri Alberto. Após a condução das
								negociações envolvendo o presidente Osmar Stabile e o executivo
								de futebol Fabinho Soldado, o vínculo – antes válido até o fim
								de 2027 – será agora até julho de 2030.
							</p>
							<div className="actions__creditos">
								Foto: Rodrigo Coca/Agência Corinthians
							</div>
						</div>
					</div>
					<div className="card__noticia">
						<img
							src={noticia2}
							className="image__noticia"
							alt="Imagem da Notícia"
						/>
						<div className="texts__noticia">
							<div className="conteudo__noticia">
								<h2 className="noticia__title">
									Futebol masculino: Timão inicia preparação para encarar
									Botafogo fora de casa
								</h2>
								<span className="noticia__subtitle">
									Elenco terá mais um treino nesta sexta (25) antes da viagem ao
									Rio de Janeiro
									<p className="date">
										24/07/2025 15h06 Assessoria de imprensa
									</p>
								</span>
								<p className="noticia__paragraph">
									Na manhã desta quinta-feira (24), no CT Dr. Joaquim Grava, o
									Corinthians se reapresentou após o empate sem gols diante do
									Cruzeiro, na Neo Química Arena, pelo Campeonato Brasileiro, e
									iniciou a preparação para o próximo compromisso válido pela
									competição nacional. Sábado (26), às 18h30, no Estádio Nilton
									Santos, no Rio de Janeiro-RJ, pela 17ª rodada, o Timão
									visitará o Botafogo.
								</p>
							</div>
							<div className="actions__creditos">
								Foto: Rodrigo Coca/Agência Corinthians
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Noticias;
