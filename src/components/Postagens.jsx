import React, { useEffect, useState } from "react";
import postagensData from "../assets/postagensData";
import ScrollReveal from "scrollreveal";
import { Skeleton } from "@/components/ui/skeleton";
import emblema from "../assets/imagens/emblema__header.png";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const Postagens = () => {
	const [loaded, setLoaded] = useState(false);

	const onInit = () => {
		console.log("lightGallery has been initialized");
	};

	return (
		<section className="container__posts">
			<span className="timeline__posts">
				{postagensData.map((item, index) => (
					<div
						className={`card ${index % 2 === 0 ? "post__left" : "post__right"}`}
						key={index}
					>
						<div className="card__header">
							<img src={emblema} className="image__postagem" alt="" />

							<div className="card__image-wrapper relative">
								{/* Skeleton enquanto a imagem não carrega */}
								{!loaded && (
									<Skeleton className="absolute inset-0 w-full h-full rounded" />
								)}

								<LightGallery
									onInit={onInit}
									speed={500}
									plugins={[lgZoom]}
									zoom={true} // habilita zoom
									download={true} // botão de download
									closable={true} // botão fechar
									escKey={true} // fechar com ESC
								>
									<a href={item.image}>
										<img
											src={item.image}
											alt={`Postagem ${index + 1}`}
											className={`card__image transition-opacity duration-500 ${
												loaded ? "opacity-100" : "opacity-0"
											}`}
											onLoad={() => setLoaded(true)}
										/>
									</a>
								</LightGallery>
							</div>
						</div>
					</div>
				))}
			</span>
		</section>
	);
};

export default Postagens;
