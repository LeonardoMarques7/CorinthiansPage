import { Heart, MessageCircle } from "lucide-react";
import React from "react";
import noticia1 from "../assets/imagens/noticias/noticia1.png";
import noticia2 from "../assets/imagens/noticias/noticia2.png";
import noticia3 from "../assets/imagens/noticias/noticia3.png";
import noticia4 from "../assets/imagens/noticias/noticia4.jpg";
import noticia5 from "../assets/imagens/noticias/noticia5.png";
import heart from "../assets/imagens/noticias/heart.png";

const Noticias = () => {
	return (
		<div>
			<section className="container__noticias" id="Noticias">
				<h1 className="container__noticias__title">Notícias</h1>
				<div className="feed__noticias">
					<div className="card__noticia">
						<div className="image__noticia">
							<img src={noticia1} className="" alt="Imagem da Notícia" />
							<div className="actions__creditos">
								Foto: Rodrigo Coca/Agência Corinthians
							</div>
						</div>
						<div className="texts__noticia">
							<div className="header__noticia">
								<span className="badge__header">Destaque</span>{" "}
								<p className="date">24/07/2025 19h54 </p>
								<p>Assessoria de imprensa</p>
							</div>
							<div className="main__noticia">
								<h2 className="noticia__title">
									Corinthians conclui renovação contratual de Yuri Alberto
								</h2>
								<span className="noticia__subtitle">
									Novo acordo entre clube e atleta é válido até o meio de 2030
								</span>

								<div className="noticia__container__texts text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1">
									<p className="noticia__paragraph">
										O Corinthians e o atacante Yuri Alberto selaram um novo
										capítulo em sua história, concluindo a tão aguardada
										renovação contratual. A notícia, que vinha movimentando os
										bastidores do clube, foi confirmada oficialmente nesta
										quinta-feira (24), para a alegria da Fiel Torcida.
									</p>
									<p className="noticia__paragraph">
										O novo acordo entre as partes estende o vínculo de Yuri
										Alberto com o Timão até julho de 2030. A negociação,
										conduzida pelo presidente Osmar Stabile e pelo executivo de
										futebol Fabinho Soldado, demonstra a confiança mútua e o
										planejamento de longo prazo do clube com um de seus
										principais jogadores.
									</p>
									<p className="noticia__paragraph">
										O antigo contrato, que era válido até o final de 2027, foi
										ampliado em mais dois anos e meio, garantindo a permanência
										do artilheiro por um longo período no Parque São Jorge.
										Desde sua chegada, Yuri Alberto se destacou pela entrega,
										faro de gol e identificação com a camisa alvinegra,
										conquistando rapidamente o coração dos corintianos.
									</p>
									<p className="noticia__paragraph">
										A renovação é vista como um passo estratégico para o
										Corinthians, que assegura a permanência de um ativo valioso
										e aposta na continuidade de um projeto vencedor. A Fiel, por
										sua vez, celebra a permanência de um jogador que promete
										ainda muitas alegrias e gols com o manto sagrado.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container__other">
					<h3 className="container__noticias__title">Outras Notícias</h3>
					<div className="container__noticias">
						<div className="card__noticia">
							<div className="image__other">
								<img
									src={noticia2}
									className="card__image"
									alt="Imagem da Notícia"
								/>
								<div className="other__creditos">
									Foto: Rodrigo Coca/Agência Corinthians
								</div>
							</div>
							<div className="cotainer__texts">
								<div className="card__noticia__header">
									<p className="text__assunto">Resultado</p>
									<span className="card__separcao__header"></span>
									<p className="date">06/08/2025</p>
								</div>
								<div className="card__noticia__main">
									<h3 className="title__noticia">
										Corinthians elimina o rival e avança na Copa do Brasil
									</h3>
									<h6 className="subtitle__noticia">
										Corinthians faz 2 a 0 no Allianz Parque e avança na
										competição nacional
									</h6>
								</div>
							</div>
						</div>
						<div className="card__noticia">
							<div className="image__other">
								<img
									src={noticia3}
									className="card__image"
									alt="Imagem da Notícia"
								/>
								<div className="other__creditos">
									Foto: Rodrigo Coca/Agência Corinthians
								</div>
							</div>
							<div className="cotainer__texts">
								<div className="card__noticia__header">
									<p className="text__assunto">Resultado</p>
									<span className="card__separcao__header"></span>
									<p className="date">06/08/2025</p>
								</div>
								<div className="card__noticia__main">
									<h3 className="title__noticia">
										Nos pênaltis, Brabas eliminam o Cruzeiro e avançam na Copa
										do Brasil
									</h3>
									<h6 className="subtitle__noticia">
										Corinthians domina, empata em 1 a 1 no tempo normal
									</h6>
								</div>
							</div>
						</div>
						<div className="card__noticia">
							<div className="image__other">
								<img
									src={noticia4}
									className="card__image"
									alt="Imagem da Notícia"
								/>
								<div className="other__creditos">
									Foto: Raphael Martinez/Agência Corinthians
								</div>
							</div>
							<div className="cotainer__texts">
								<div className="card__noticia__header">
									<p className="text__assunto">Renovação</p>
									<span className="card__separcao__header"></span>
									<p className="date">06/08/2025</p>
								</div>
								<div className="card__noticia__main">
									<h3 className="title__noticia">
										Corinthians renova contrato com Matheus Bidu até 2027
									</h3>
									<h6 className="subtitle__noticia">
										Lateral-esquerdo, que se aproxima dos 100 jogos, celebra
										novo vínculo com o Timão
									</h6>
								</div>
							</div>
						</div>
						<div className="card__noticia">
							<div className="image__other">
								<img
									src={noticia5}
									className="card__image"
									alt="Imagem da Notícia"
								/>
								<div className="other__creditos">
									Foto: Raphael Martinez/Agência Corinthians
								</div>
							</div>
							<div className="cotainer__texts">
								<div className="card__noticia__header">
									<p className="text__assunto">Resultado</p>
									<span className="card__separcao__header"></span>
									<p className="date">06/08/2025</p>
								</div>
								<div className="card__noticia__main">
									<h3 className="title__noticia">
										Corinthians empata com o Fortaleza e busca reação no
										Brasileirão
									</h3>
									<h6 className="subtitle__noticia">
										Timão sai atrás do placar na Neo Química Arena, mas André
										Carrillo garante o empate no fim
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Noticias;
