import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function AuthButtons() {
	const { userId } = auth();
	return (
		<div className="max-sm:w-full">
			{userId ? (
				<Link href="/snippets">
					<Button className="max-sm:w-full">Access your snippets</Button>
				</Link>
			) : (
				<div className="flex gap-2 max-sm:mt-8 max-sm:w-[60%] max-sm:flex-col">
					<Link href="/sign-in">
						<Button className="rounded-md bg-primary p-[8px] px-6 text-sm text-white max-sm:w-full">
							Sign In
						</Button>
					</Link>
					<Link href="/sign-up">
						<Button variant={"outline"} className="text-primary">
							Sign Up
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
}
