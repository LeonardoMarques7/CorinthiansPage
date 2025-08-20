import React, { useState, lazy, Suspense } from "react";
import elencoCompleto from "../assets/elencoCompleto";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the ElencoMain component
const ElencoMain = lazy(() => import("./ElencoMain"));

const Elenco = () => {
	const [elencoExibido, setElencoExibido] = useState(
		elencoCompleto[0].Masculino
	);
	const [generoSelecionado, setGeneroSelecionado] = useState("Masculino");

	const trocarElenco = (genero) => {
		setGeneroSelecionado(genero);
		setElencoExibido(elencoCompleto[0][genero]);
	};

	const ElencoSkeleton = () => {
		// Obtenha a estrutura do elenco para saber quantos skeletons renderizar
		const esqueletoElenco = elencoCompleto[0][generoSelecionado];

		return (
			<div className="elenco__main animate-pulse">
				{Array.isArray(esqueletoElenco) &&
					esqueletoElenco.map((grupo, index) => (
						<section key={index} className="container__posicao">
							<div className="carroseul__header__posicao flex items-center">
								<div className="carroseul__actions__elenco">
									<Skeleton className="carroseul__voltar h-10 w-10 rounded-full" />
									<Skeleton className="carroseul__proximo h-10 w-10 rounded-full" />
								</div>
								<Skeleton className="posicao__title h-8 w-40" />
							</div>
							<div className="container__carroseul w-full flex flex-col">
								<div className="carroseul__jogadores flex space-x-4 overflow-hidden">
									{grupo.jogadores.map((_, idx) => (
										<div
											key={idx}
											className="item__jogador bg-gray-700 z-99 relative basis-[80svw] md:basis-1/4 sm:basis-1/3"
										>
											<div className="w-full h-full flex flex-col items-center">
												<Skeleton className="w-full aspect-[3/4] rounded-xl" />
											</div>
											<Skeleton className="badge__numero h-6 w-12" />
											<div className="footer__polaroid">
												<Skeleton className="h-6 w-32" />
											</div>
										</div>
									))}
								</div>
							</div>
						</section>
					))}
			</div>
		);
	};

	return (
		<section className="container__elenco" id="Elenco">
			<div className="card__elenco">
				<div className="elenco__header">
					<h1 className="container__elenco__title">Elenco</h1>
					<div className="group__action">
						<button
							className={`action__masc ${
								generoSelecionado === "Masculino" ? "active" : ""
							}`}
							onClick={() => trocarElenco("Masculino")}
						>
							Masculino
						</button>
						<button
							className={`action__fem ${
								generoSelecionado === "Feminino" ? "active" : ""
							}`}
							onClick={() => trocarElenco("Feminino")}
						>
							Feminino
						</button>
					</div>
				</div>

				<Suspense fallback={<ElencoSkeleton />}>
					<ElencoMain elencoExibido={elencoExibido} />
				</Suspense>
			</div>
		</section>
	);
};

export default Elenco;
