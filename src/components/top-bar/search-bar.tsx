import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBar() {
	return (
		<div className="relative flex h-[38px] w-[60%] items-center gap-2 rounded-3xl border pl-3">
			<Search className="text-primary" size={13} />
			<Input
				placeholder="Search for a snippet..."
				className="border-none bg-transparent text-slate-500 text-sm outline-none"
			/>
			<Button className="absolute right-0 rounded-3xl">
				+<span className="ml-2 hidden md:block">Snippet</span>
			</Button>
		</div>
	);
}
