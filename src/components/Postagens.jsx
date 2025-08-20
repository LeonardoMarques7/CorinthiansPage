import React, { useState, useCallback } from "react";
import postagensData from "../assets/postagensData";
import { Skeleton } from "@/components/ui/skeleton";
import emblema from "../assets/imagens/emblema__header.png?format=webp";
import LightGallery from "lightgallery/react";

// Import otimizado com dynamic import
const LazyLightGallery = React.lazy(() =>
	import("lightgallery/react").then((module) => ({ default: module.default }))
);

// Import otimizado dos plugins
const LgZoom = React.lazy(() => import("lightgallery/plugins/zoom"));

// Import dos styles (mantenha os imports normais pois são CSS)
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";

const Postagens = () => {
	const [loadedImages, setLoadedImages] = useState({});
	const [galleryLoaded, setGalleryLoaded] = useState(false);

	const handleImageLoad = useCallback((index) => {
		setLoadedImages((prev) => ({ ...prev, [index]: true }));
	}, []);

	const onInit = () => {
		setGalleryLoaded(true);
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
							<img
								src={emblema}
								className="image__postagem"
								alt=""
								loading="lazy"
							/>

							<div className="card__image-wrapper relative">
								{/* Skeleton enquanto a imagem não carrega */}
								{!loadedImages[index] && (
									<Skeleton className="absolute inset-0 w-full h-full rounded" />
								)}

								<React.Suspense
									fallback={<Skeleton className="w-full h-full" />}
								>
									{galleryLoaded ? (
										<LightGallery
											onInit={onInit}
											speed={500}
											plugins={[LgZoom]}
											zoom={true}
											download={true}
											closable={true}
											escKey={true}
										>
											<a href={item.image}>
												<img
													src={item.image}
													alt={`Postagem ${index + 1}`}
													className={`card__image transition-opacity duration-500 ${
														loadedImages[index] ? "opacity-100" : "opacity-0"
													}`}
													onLoad={() => handleImageLoad(index)}
													loading="lazy"
												/>
											</a>
										</LightGallery>
									) : (
										// Fallback simples sem lightgallery até carregar
										<a
											href={item.image}
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src={item.image}
												alt={`Postagem ${index + 1}`}
												className={`card__image transition-opacity duration-500 ${
													loadedImages[index] ? "opacity-100" : "opacity-0"
												}`}
												onLoad={() => handleImageLoad(index)}
												loading="lazy"
											/>
										</a>
									)}
								</React.Suspense>
							</div>
						</div>
					</div>
				))}
			</span>
		</section>
	);
};

export default React.memo(Postagens);
