import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const AccordionTrigger = React.forwardRef(
	({ className, children, ...props }, ref) => {
		return (
			<AccordionPrimitive.Header className="flex">
				<AccordionPrimitive.Trigger
					ref={ref}
					className={cn(
						"focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
						className
					)}
					{...props}
				>
					{children}
					<span className="transition-transform duration-200 button">
						{props["data-state"] === "open" ? (
							<ChevronUpIcon className="text-muted-foreground size-4 shrink-0 translate-y-0.5" />
						) : (
							<ChevronDownIcon className="text-muted-foreground size-4 shrink-0 translate-y-0.5" />
						)}
					</span>
				</AccordionPrimitive.Trigger>
			</AccordionPrimitive.Header>
		);
	}
);

AccordionTrigger.displayName = "AccordionTrigger";
