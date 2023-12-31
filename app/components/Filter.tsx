"use client";
import React, { useState } from "react";
import { BottomSheet, Button } from "@heathmont/moon-core-tw";
import FilterListIcon from "@mui/icons-material/FilterList";

type FilterProps = {
	onGenreSelect: (genre: string | null) => void;
};

const Filter: React.FC<FilterProps> = ({ onGenreSelect }) => {
	const [isFullOpen, setIsFullOpen] = useState(false);
	const [activeGenre, setActiveGenre] = useState<string | null>(null);

	const closeFullBottomSheet = () => {
		setIsFullOpen(false);
	};
	const openFullBottomSheet = () => {
		setIsFullOpen(true);
	};

	const genre = [
		{
			id: "1",
			name: "Horor",
		},
		{
			id: "2",
			name: "Misteri",
		},
		{
			id: "3",
			name: "Fiksi",
		},
		{
			id: "4",
			name: "Sains Fiksi",
		},
		{
			id: "5",
			name: "Non-Fiksi",
		},
		{
			id: "6",
			name: "Romansa",
		},
		{
			id: "7",
			name: "Drama",
		},
		{
			id: "8",
			name: "Sejarah",
		},
		{
			id: "9",
			name: "Fantasi",
		},
	];

	const handleGenreSelection = (genreName: string) => {
		if (activeGenre === genreName) {
			// Jika genre yang sama diklik, reset filter
			setActiveGenre(null);
			onGenreSelect(null);
		} else {
			// Set genre baru sebagai aktif dan terapkan filter
			setActiveGenre(genreName);
			onGenreSelect(genreName);
		}
		closeFullBottomSheet();
	};

	return (
		<>
			<div>
				<Button
					variant="outline"
					onClick={openFullBottomSheet}
					className="rounded-xl gap-0 border-2 border-[#ffa08d] border-solid shadow-2xl font-poppins shadow-red-100 px-5 hover:bg-[#E2725B] hover:text-white flex flex-row justify-center items-center">
					<FilterListIcon sx={{ fontSize: 28 }} />
					<h1 className="font-poppins font-medium text-[16px]">Filter</h1>
				</Button>
				<BottomSheet open={isFullOpen} onClose={closeFullBottomSheet}>
					<BottomSheet.Panel className="bg-white flex flex-col gap-2 items-center h-[90%] rounded-t-xl">
						<BottomSheet.Title className="font-poppins font-bold text-xl">
							Filter
						</BottomSheet.Title>
						<div className="w-[100%] bg-jiren font-poppins overflow-auto">
							<div className="w-[90%] flex flex-col justify-start items-start mx-4">
								<h1 className="font-poppins font-bold text-xl">Genre</h1>
								<div className="flex flex-wrap gap-2 my-4">
									{genre.map((GenreList) => (
										<button
											key={GenreList.id}
											onClick={() => handleGenreSelection(GenreList.name)}
											className={`py-1  px-4 rounded-xl border border-[#ffa08d] border-solid shadow-2xl font-poppins shadow-red-100 ${
												activeGenre === GenreList.name
													? "bg-[#E2725B] text-white"
													: "hover:bg-[#E2725B] hover:text-white"
											}`}>
											{GenreList.name}
										</button>
									))}
								</div>
							</div>
						</div>
					</BottomSheet.Panel>
					<BottomSheet.Backdrop className="bg-[#0000005c]" />
				</BottomSheet>
			</div>
		</>
	);
};

export default Filter;
