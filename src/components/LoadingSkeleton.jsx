// components/LoadingSkeleton.jsx
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeleton = () => (
	<div className="w-full p-4">
		<Skeleton className="h-48 w-full mb-4" />
		<Skeleton className="h-6 w-3/4 mb-2" />
		<Skeleton className="h-4 w-full mb-2" />
		<Skeleton className="h-4 w-2/3" />
	</div>
);

export const ImageSkeleton = ({ className = "w-full h-48" }) => (
	<Skeleton className={className} />
);

export const TextSkeleton = ({ lines = 3 }) => (
	<div>
		{Array.from({ length: lines }).map((_, i) => (
			<Skeleton key={i} className="h-4 w-full mb-2" />
		))}
	</div>
);
