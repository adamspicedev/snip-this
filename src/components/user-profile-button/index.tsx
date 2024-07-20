"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

export default function UserProFileButton() {
	const { user } = useUser();
	const imageUrl = user?.imageUrl;

	return (
		<div className="flex items-center gap-3">
			{!user ? (
				<>
					<Skeleton className="h-10 w-10 rounded-full" />
					<div className="flex flex-col space-y-2 text-sm">
						<Skeleton className="h-4 w-[100px]" />
						<Skeleton className="h-4 w-[100px]" />
					</div>
				</>
			) : (
				<>
					<Avatar>
						<AvatarImage src={imageUrl} alt={`@${user?.firstName}`} />
					</Avatar>
					<div className="hidden flex-col text-sm md:flex">
						<span className="font-semibold">
							{user?.fullName
								? user?.fullName
								: user?.emailAddresses[0].emailAddress}
						</span>
						{user?.fullName && (
							<span className="text-slate-400 text-xs">
								{user?.emailAddresses[0].emailAddress}
							</span>
						)}
					</div>
				</>
			)}
		</div>
	);
}
