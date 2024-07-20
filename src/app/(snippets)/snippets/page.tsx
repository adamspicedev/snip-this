import Snippet from "@/components/snippet";
import React from "react";

export default function SnippetPage() {
	return (
		<div className="mt-5 flex flex-wrap gap-4">
			<Snippet />
			<Snippet />
			<Snippet />
			<Snippet />
		</div>
	);
}
