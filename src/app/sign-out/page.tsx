"use client";

import { useClerk } from "@clerk/nextjs";
import { use, useEffect } from "react";

export default function SignOutPage() {
	const { signOut } = useClerk();

	useEffect(() => {
		signOut();
	}, [signOut]);

	return <div className="">Signing out</div>;
}
