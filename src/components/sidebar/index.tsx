"use client";

import { MenuLink, useGlobalContext } from "@/context/global";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";

function SideBarContent() {
	const {
		sidebar: { quickLinks, setQuickLinks },
	} = useGlobalContext();

	const handleQuickLinkChange = (id: number) => {
		const newLinks: MenuLink[] = quickLinks.map((link) => {
			if (link.id === id) {
				return { ...link, variant: "default" };
			} else {
				return { ...link, variant: "ghost" };
			}
		});

		setQuickLinks(newLinks);
	};

	return (
		<div className="flex w-full flex-col gap-16">
			<Logo />
			<ul className="w-full space-y-3 rounded-md dark:bg-slate-500">
				{quickLinks.map((link) => (
					<li key={link.id}>
						<Link href={link.url ?? "#"}>
							<Button
								onClick={() => handleQuickLinkChange(link.id)}
								variant={link.variant}
								className={cn(
									"flex w-full flex-row justify-start gap-2 outline-none",
								)}
							>
								<link.icon />
								{link.name}
							</Button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Sidebar() {
	const {
		sidebar: { isOpen, setIsOpen },
	} = useGlobalContext();

	return isOpen ? (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetContent side="left">
				<SideBarContent />
			</SheetContent>
		</Sheet>
	) : (
		<div className="mr-4 hidden h-screen w-96 border-slate-300 border-r p-4 md:flex">
			<SideBarContent />
		</div>
	);
}
