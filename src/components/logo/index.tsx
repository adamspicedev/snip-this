import { Braces } from "lucide-react";

export default function Logo() {
	return (
		<div className="flex items-center gap-2">
			<div className="rounded-md bg-primary p-[6px] text-white">
				<Braces />
			</div>

			<div className="gap-1 text-[19px]">
				<span className="font-bold text-primary">Snip</span>
				<span className="text-slate-600">This</span>
			</div>
		</div>
	);
}
