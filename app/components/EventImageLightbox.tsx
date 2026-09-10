"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Event } from "@/data/events";

type EventImageLightboxProps = {
	events: Event[];
	index: number;
	onClose: () => void;
	onIndexChange: (index: number) => void;
};

export default function EventImageLightbox({
	events,
	index,
	onClose,
	onIndexChange,
}: EventImageLightboxProps) {
	const event = events[index];
	const hasMany = events.length > 1;
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (!hasMany) return;
			if (e.key === "ArrowLeft") {
				onIndexChange((index - 1 + events.length) % events.length);
			}
			if (e.key === "ArrowRight") {
				onIndexChange((index + 1) % events.length);
			}
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKey);
		};
	}, [events.length, hasMany, index, onClose, onIndexChange]);

	if (!mounted || !event) return null;

	return createPortal(
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-4 sm:p-10"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label={event.title}
		>
			<button
				type="button"
				onClick={onClose}
				className="absolute right-4 top-4 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
				aria-label="Close image"
			>
				<X className="h-6 w-6" />
			</button>

			{hasMany && (
				<button
					type="button"
					onClick={(e) => {
						e.stopPropagation();
						onIndexChange((index - 1 + events.length) % events.length);
					}}
					className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:left-6"
					aria-label="Previous photo"
				>
					<ChevronLeft className="h-8 w-8" />
				</button>
			)}

			{hasMany && (
				<button
					type="button"
					onClick={(e) => {
						e.stopPropagation();
						onIndexChange((index + 1) % events.length);
					}}
					className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:right-6"
					aria-label="Next photo"
				>
					<ChevronRight className="h-8 w-8" />
				</button>
			)}

			<div
				className="flex max-h-full w-full max-w-6xl flex-col items-center"
				onClick={(e) => e.stopPropagation()}
			>
				<img
					src={event.image}
					alt={event.title}
					className="max-h-[78vh] w-auto max-w-full object-contain"
				/>
				<p className="mt-4 text-sm text-zinc-400">{event.date}</p>
				<p className="mt-1 text-center text-lg font-medium text-white">
					{event.title}
				</p>
			</div>
		</div>,
		document.body,
	);
}
