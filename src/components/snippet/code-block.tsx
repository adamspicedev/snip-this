"use client";

import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
	atomOneDark,
	atomOneLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeBlockProps {
	language: string;
}

export default function CodeBlock({ language }: CodeBlockProps) {
	const { theme } = useTheme();

	const codeString = `
  import React from 'react'
  
  export default function code-block() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
  `;

	return (
		<div className="mx-2 overflow-hidden rounded-md text-sm">
			<SyntaxHighlighter
				language={"javascript"}
				style={theme === "dark" ? atomOneDark : atomOneLight}
			>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
}
