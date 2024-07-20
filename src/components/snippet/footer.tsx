import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<div className="mx-4 mt-3 mb-2 flex justify-between text-slate-400">
			<div className="flex items-center gap-1">
				<Image
					src="/icons/javascript.svg"
					alt="JavaScript"
					width={25}
					height={25}
					className="mb-[2px] text-slate-400"
				/>
				Javascript
			</div>
			<Trash2 className="cursor-pointer" />
		</div>
	);
}
