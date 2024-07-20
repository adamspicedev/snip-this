import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomTag from "../custom-tag";
import { Button } from "../ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { Tag } from "@prisma/client";

export default function TagSlider() {
	const tags: Tag[] = [
		{
			id: 1,
			name: "Javascript",
			color: "red",
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			id: 2,
			name: "Typescript",
			color: "blue",
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	];
	return (
		<div className="flex h-20 w-full flex-row justify-between gap-5 rounded-lg border light:border border-slate-300 bg-slate-100 p-4 ">
			<Button>All</Button>
			<Swiper
				slidesPerView="auto"
				spaceBetween={30}
				freeMode={true}
				modules={[FreeMode]}
				className="mySwiper"
			>
				{tags.map((tag) => (
					<SwiperSlide key={tag.id}>
						<CustomTag tag={tag} />
					</SwiperSlide>
				))}
			</Swiper>
			<Button>+ TAG</Button>
		</div>
	);
}
