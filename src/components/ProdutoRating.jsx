function ProdutoRating({ nota = 0, total = 0 }) {
	const validNota = Math.min(Math.max(nota, 0), 5);
	const fullStars = Math.floor(validNota);
	const hasHalfStar = validNota - fullStars >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	const renderStar = (type, key) => {
		let fillColor = "#D1D5DB"; // cinza por padrão
		if (type === "full") fillColor = "#FACC15"; // amarelo
		if (type === "half") fillColor = "url(#halfGrad)"; // gradiente

		return (
			<svg
				key={key}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={fillColor}
				xmlns="http://www.w3.org/2000/svg"
				className="mr-0.5"
			>
				{type === "half" && (
					<defs>
						<linearGradient id="halfGrad">
							<stop offset="50%" stopColor="#FACC15" />
							<stop offset="50%" stopColor="#D1D5DB" />
						</linearGradient>
					</defs>
				)}
				<path
					d="M12 17.27L18.18 21L16.54 13.97
                 L22 9.24L14.81 8.63L12 2L9.19 8.63
                 L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
				/>
			</svg>
		);
	};

	return (
		<div className="produto__rating flex items-center gap-2">
			<span className="stars flex">
				{Array.from({ length: fullStars }, (_, i) =>
					renderStar("full", `full-${i}`)
				)}
				{hasHalfStar && renderStar("half", "half")}
				{Array.from({ length: emptyStars }, (_, i) =>
					renderStar("empty", `empty-${i}`)
				)}
			</span>

			<span className="rating__number">
				{nota ? `${nota.toFixed(1)} (${total} avaliações)` : "Sem avaliações"}
			</span>
		</div>
	);
}

export default ProdutoRating;
