"use client";

import Sidebar from "@/components/sidebar";
import TagSlider from "@/components/tag-slider";
import TopBar from "@/components/top-bar";
import { useBreakpoint } from "@/lib/hooks/use-breakpoint";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	const { isBelowMd } = useBreakpoint("md");

	return (
		<div className="flex flex-row">
			<Sidebar />
			<div className="flex h-screen w-full flex-col gap-4 p-4">
				<TopBar />
				<TagSlider />
				{children}
			</div>
		</div>
	);
}
