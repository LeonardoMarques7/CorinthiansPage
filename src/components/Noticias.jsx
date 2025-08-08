import { useState } from "react";
import noticiasData from "../assets/noticiasData";

const Noticias = () => {
	const [noticiaDestaque, setNoticiaDestaque] = useState(noticiasData[0]);

	return (
		<div>
			<section className="container__noticias" id="Noticias">
				<h1 className="container__noticias__title">Notícias</h1>
				<div className="feed__noticias" id="card__noticia">
					<div className="card__noticia">
						<div className="image__noticia">
							<img
								src={noticiaDestaque.image.arquivo}
								alt={`Imagem da Notícia: ${noticiaDestaque.title}`}
							/>
							<div className="actions__creditos">
								{noticiaDestaque.image.autor}
							</div>
						</div>
						<div className="texts__noticia">
							<div className="header__noticia">
								<div className="container__badges">
									<span className="badge__header">Destaque</span>
									<span className="badge__header categoria">
										{noticiaDestaque.categoria}
									</span>
								</div>
								<div className="container__creditos flex gap-4 items-center">
									<p className="date">{noticiaDestaque.date}</p>
									<span className="bg-gray-300 rounded-full w-[5px] h-[5px]"></span>
									<p>
										Postado por <strong>{noticiaDestaque.reponsavel}</strong>
									</p>
								</div>
							</div>
							<div className="main__noticia">
								<h2 className="noticia__title max-sm:!text-3xl">
									{noticiaDestaque.title}
								</h2>
								<span className="noticia__subtitle">
									{noticiaDestaque.subtitle}
								</span>
								<div className="noticia__container__texts leading-relaxed">
									{noticiaDestaque.conteudo}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container__other">
					<h3 className="container__noticias__title">Outras Notícias</h3>
					<div className="container__noticias">
						{noticiasData
							.filter((item) => item !== noticiaDestaque)
							.map((item, index) => (
								<div
									className="card__noticia cursor-pointer"
									key={index}
									onClick={() => {
										setNoticiaDestaque(item);
										document.getElementById("card__noticia")?.scrollIntoView({
											behavior: "smooth",
										});
									}}
								>
									<div className="image__other">
										<img
											src={item.image.arquivo}
											className="card__image"
											alt={`Imagem da Notícia: ${item.title}`}
										/>
										<div className="other__creditos">{item.image.autor}</div>
									</div>
									<div className="cotainer__texts">
										<div className="card__noticia__header">
											<p className="text__assunto">{item.categoria}</p>
											<span className="card__separcao__header"></span>
											<p className="date">{item.date}</p>
										</div>
										<div className="card__noticia__main">
											<h3 className="title__noticia">{item.title}</h3>
											<h6 className="subtitle__noticia">{item.subtitle}</h6>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Noticias;
