"use client"

import { useBreakpoint } from "@/lib/hooks/use-breakpoint";
import { Braces, Heart, LogOut, LucideIcon, Trash2 } from "lucide-react";
import { createContext, useContext, useState } from "react";

type LinkVariant = "default" | "ghost";

export interface MenuLink {
	id: number;
	name: string;
	label?: string;
	variant: LinkVariant;
	icon: LucideIcon;
	url?: string;
}

interface GlobalContextType {
	sidebar: {
		quickLinks: MenuLink[];
		setQuickLinks: React.Dispatch<React.SetStateAction<MenuLink[]>>;
		isOpen: boolean;
		setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	};
}

const ContextProvider = createContext<GlobalContextType>({
	sidebar: {
		quickLinks: [],
		setQuickLinks: () => {},
		isOpen: false,
		setIsOpen: () => {},
	},
});

export default function GlobalContextProvider({
	children,
}: { children: React.ReactNode }) {
	const { isBelowMd } = useBreakpoint("md");
	const [isOpen, setIsOpen] = useState<boolean>(isBelowMd);
	const [quickLinks, setQuickLinks] = useState<MenuLink[]>([
		{
			id: 1,
			name: "All Snippets",
			variant: "default",
			icon: Braces,
			label: "",
		},
		{
			id: 2,
			name: "Favourites",
			variant: "ghost",
			icon: Heart,
			label: "",
		},
		{
			id: 3,
			name: "Trash",
			variant: "ghost",
			icon: Trash2,
			label: "",
		},
		{
			id: 4,
			name: "Log Out",
			variant: "ghost",
			icon: LogOut,
			label: "",
			url: "/sign-out",
		},
	]);

	return (
		<ContextProvider.Provider
			value={{
				sidebar: {
					quickLinks,
					setQuickLinks,
					isOpen,
					setIsOpen,
				},
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
}

export const useGlobalContext = () => {
	const context = useContext(ContextProvider);
	if (!context) {
		throw new Error(
			"useGlobalContext must be used within a GlobalContextProvider",
		);
	}
	return context;
};
