import type { Tag } from "@prisma/client";
import React from "react";
import { Badge } from "../ui/badge";

export default function CustomTag({ tag }: { tag: Tag }) {
	return (
		<div className="flex items-center gap-1">
			<div
				className="h-2 w-2 rounded-full"
				style={{ backgroundColor: tag.color }}
			/>
			{tag.name}
		</div>
	);
}
