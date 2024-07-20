import { Heart } from "lucide-react";
import React from "react";

export default function SnippetHeader() {
	return (
		<div className="mx-4 mt-3 flex items-center justify-between">
			<span className="w-[87%] font-bold text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eligendi
				corporis aliquam reprehenderit.
			</span>
			<Heart className="cursor-pointer text-slate-400" />
		</div>
	);
}
