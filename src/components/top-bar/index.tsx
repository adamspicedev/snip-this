"use client";

import { useGlobalContext } from "@/context/global";
import { useBreakpoint } from "@/lib/hooks/use-breakpoint";
import { Menu, X } from "lucide-react";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import UserProFileButton from "../user-profile-button";
import SearchBar from "./search-bar";

export default function TopBar() {
	const {
		sidebar: { isOpen, setIsOpen },
	} = useGlobalContext();

	const { isBelowMd } = useBreakpoint("md");

	return (
		<div className="flex h-20 w-full flex-row items-center justify-between rounded-md light:border border-slate-300 bg-slate-100 p-4 shadow-md dark:bg-slate-500">
			<UserProFileButton />
			<SearchBar />
			<div className="ite flex flex-row items-center gap-2">
				<ModeToggle />
				{isBelowMd && (
					<div>
						{isOpen ? (
							<X className="text-primary" onClick={() => setIsOpen(false)} />
						) : (
							<Menu className="text-primary" onClick={() => setIsOpen(true)} />
						)}
					</div>
				)}
			</div>
		</div>
	);
}
