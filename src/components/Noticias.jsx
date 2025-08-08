import noticiasData from "../assets/noticiasData";

const Noticias = () => {
	return (
		<div>
			<section className="container__noticias" id="Noticias">
				<h1 className="container__noticias__title">Notícias</h1>
				<div className="feed__noticias">
					{noticiasData.slice(0, 1).map((item, index) => (
						<div className="card__noticia">
							<div className="image__noticia">
								<img
									src={item.image.arquivo}
									className=""
									alt={`Imagem da Notícia: ${item.title}`}
								/>
								<div className="actions__creditos">{item.image.autor}</div>
							</div>
							<div className="texts__noticia">
								<div className="header__noticia">
									<div className="container__badges">
										<span className="badge__header">Destaque</span>
										<span className="badge__header categoria">
											{item.categoria}
										</span>
									</div>
									<div className="container__creditos">
										<p className="date">{item.date}</p>
										<span className="separacao__div"></span>
										<p>
											Postado por <strong>{item.reponsavel}</strong>
										</p>
									</div>
								</div>
								<div className="main__noticia">
									<h2 className="noticia__title max-sm:!text-3xl">
										{item.title}
									</h2>
									<span className="noticia__subtitle">{item.subtitle}</span>
									<div className="noticia__container__texts leading-relaxed">
										{item.conteudo}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="container__other">
					<h3 className="container__noticias__title">Outras Notícias</h3>
					<div className="container__noticias">
						{noticiasData.slice(1).map((item, index) => (
							<div className="card__noticia" key={index}>
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
