"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import FilterDesktop from "./FilterDesktop";

export default function BukuStore() {
	const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

	const getAllBuku = [
		{
			id: "1",
			name: "Abhi Surya Nugroho",
			judul: "Sikancil Anak yang Nakal",
			genre: "Fiksi",
			img_book: "/buku.avif",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "2",
			name: "Abhi Surya Nugroho",
			judul: "Doctor Doom - Mereboot Alam Semesta",
			genre: "Sains Fiksi",
			img_book: "/buku.avif",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "3",
			name: "Abhi Surya Nugroho",
			judul: "Kisah Romansa Habibie & Ainun",
			genre: "Romansa",
			img_book: "/buku.avif",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "4",
			name: "Abhi Surya Nugroho",
			judul: "Pamali",
			genre: "Horor",
			img_book: "/buku.avif",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "5",
			name: "Abhi Surya Nugroho",
			judul: "Misteri Pohon Beringin",
			genre: "Misteri",
			img_book: "/buku.avif",
			desk: "lorem ipsum doilor sit amet",
		},
		{
			id: "6",
			name: "Abhi Surya Nugroho",
			judul: "Misteri Pohon Beringin",
			genre: "Non-Fiksi",
			img_book: "/buku.avif",
			desk: "lorem ipsum doilor sit amet",
		},
		{
			id: "7",
			name: "Abhi Surya Nugroho",
			judul: "Misteri Pohon Beringin",
			genre: "Sejarah",
			img_book: "/buku.avif",
			desk: "lorem ipsum doilor sit amet",
		},
		{
			id: "8",
			name: "Abhi Surya Nugroho",
			judul: "Misteri Pohon Beringin",
			genre: "Drama",
			img_book: "/buku.avif",
			desk: "lorem ipsum doilor sit amet",
		},
		{
			id: "9",
			name: "Abhi Surya Nugroho",
			judul: "Misteri Pohon Beringin",
			genre: "Fantasi",
			img_book: "/buku.avif",
			desk: "lorem ipsum doilor sit amet",
		},
		{
			id: "10",
			name: "Abhi Surya Nugroho",
			judul: "Misteri Pohon Beringin",
			genre: "Horor",
			img_book: "/buku.avif",
			desk: "lorem ipsum doilor sit amet",
		},
	];

	const handleGenreSelect = (genre: string | null) => {
		setSelectedGenre(genre);
	};

	const filteredBuku = selectedGenre
		? getAllBuku.filter((buku) => buku.genre === selectedGenre)
		: getAllBuku;

	return (
		<div>
			<div className="mx-5 my-5 xl:hidden">
				<Filter onGenreSelect={handleGenreSelect} />
			</div>
			<div className="flex flex-row xl:mx-20 gap-4 justify-center">
				<div className="hidden relative bottom-9 xl:block mb-20 mt-16 xl:w-[50%] 2xl:w-[30%]">
					<FilterDesktop OnFilter={handleGenreSelect} />
				</div>
				<div className="flex flex-wrap justify-center items-center xl:grid xl:grid-cols-2 2xl:grid-cols-3 xl:w-[100%] gap-10 xl:gap-5 mb-20 mt-5 xl:mt-16 xl:mx-0">
					{filteredBuku.map((buku) => (
						<div
							key={buku.id}
							className="relative flex xl:w-[100%] w-72 flex-col justify-center items-center rounded-xl border-2 bg-white bg-clip-border text-gray-700 shadow-md md:h-[400px]">
							<div className="relative mx-4 -mt-6 h-40 flex justify-center">
								<div className="drop-shadow-md">
									<img
										src={buku.img_book}
										className="h-[150px] drop-shadow-2xl"
										alt="buku"
									/>
								</div>
							</div>
							<div className="p-6 flex flex-col justify-center text-center">
								<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
									{buku.judul}
								</h5>
								<p className="block mt-2 font-sans text-base font-normal leading-relaxed text-inherit antialiased">
									Penulis: {buku.name}
								</p>
								<p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
									Genre: {buku.genre}
								</p>
								<p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
									{buku.desk}
								</p>
							</div>
							<div className="p-6 pt-0 flex justify-center">
								<button
									data-ripple-light="true"
									type="button"
									className="select-none rounded-lg bg-[#9A3412] py-3 px-6 text-center align-middle font-sans text-xs font-medium text-white shadow-md shadow-slate-500 transition-all hover:shadow-lg hover:shadow-slate-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
									<h1 className="font-poppins">
										<span className="text-md">+</span> Keranjang
									</h1>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
