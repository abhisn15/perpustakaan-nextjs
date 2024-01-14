"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import FilterDesktop from "./FilterDesktop";
import { getAllBuku } from "../data";
import { SearchIcon } from "./SearchIcon";
import { Input } from "@nextui-org/react";

export default function BukuStore() {
	const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const cariBuku = getAllBuku.filter((buku) =>
		buku.judul.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const handleGenreSelect = (genre: string | null) => {
		setSelectedGenre(genre);
	};

	const filteredBuku = selectedGenre
		? cariBuku.filter((buku) => buku.genre === selectedGenre)
		: cariBuku;

	return (
		<div>
			<div className="flex flex-row justify-center items-center mt-10 mx-10">
				<h1>Cari judul buku :</h1>
				<Input
					classNames={{
						base: "max-w-full sm:max-w-[20rem] h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					placeholder="Search.."
					size="sm"
					className="border-2 rounded-md ml-4 w-[50%] hover:border-[#9A3412] focus-within:border-[#9A3412]"
					startContent={<SearchIcon size={18} />}
					type="search"
					onChange={handleSearch}
				/>
			</div>
			<div className="mx-5 my-5 xl:hidden">
				<Filter onGenreSelect={handleGenreSelect} />
			</div>
			<div className="flex flex-row xl:mx-20 gap-4 justify-center">
				<div className="hidden relative bottom-9 xl:block mb-20 mt-16 xl:w-[50%] 2xl:w-[30%]">
					<FilterDesktop OnFilter={handleGenreSelect} />
				</div>
				<div className="flex flex-wrap justify-center items-center xl:grid xl:grid-cols-2 2xl:grid-cols-3 xl:w-[100%] gap-10 xl:gap-5 mb-20 mt-5 xl:mt-16 xl:mx-0">
					{filteredBuku.length === 0 ? (
						<div className="flex justify-center w-[200%] 2xl:w-[300%] mx-10 text-center">
							Buku yang anda cari tidak tersedia saat ini.
						</div>
					) : (
						filteredBuku.map((buku) => (
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
									<h5 className="mb-2 block font-poppins text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
										{buku.judul}
									</h5>
									<p className="block mt-2 font-poppins text-base font-normal leading-relaxed text-inherit antialiased">
										Penulis: {buku.name}
									</p>
									<p className="block font-poppins text-base font-normal leading-relaxed text-inherit antialiased">
										Genre: {buku.genre}
									</p>
									<p className="block font-poppins text-base font-light leading-relaxed text-inherit antialiased">
										{buku.desk}
									</p>
								</div>
								<div className="p-6 pt-0 flex justify-center">
									<button
										data-ripple-light="true"
										type="button"
										className="select-none rounded-lg bg-[#9A3412] py-3 px-6 text-center align-middle font-poppins text-xs font-medium text-white shadow-md shadow-slate-500 transition-all hover:shadow-lg hover:shadow-slate-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
										<h1 className="font-poppins">
											<span className="text-md"></span> PINJAM
										</h1>
									</button>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}
