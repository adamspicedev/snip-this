import React from "react";
import CodeBlock from "./code-block";
import SnippetDate from "./date";
import Description from "./description";
import Footer from "./footer";
import SnippetHeader from "./header";
import SnippetTags from "./tags";

export default function Snippet() {
	return (
		<div className="w-[500px] rounded-md bg-slate-100 max-sm:w-full">
			<SnippetHeader />
			<SnippetDate />
			<SnippetTags />
			<Description />
			<CodeBlock language="javascript" />
			<Footer />
		</div>
	);
}
