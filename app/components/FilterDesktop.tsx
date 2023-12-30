import React, { useState } from "react";

interface filterProps {
	OnFilter: (genre: string | null) => void;
}

const FilterDesktop: React.FC<filterProps> = ({ OnFilter }) => {
	const [activeGenre, setActiveGenre] = useState<string | null>(null);

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
			OnFilter(null);
		} else {
			// Set genre baru sebagai aktif dan terapkan filter
			setActiveGenre(genreName);
			OnFilter(genreName);
		}
	};
	return (
		<div className="">
			<h1 className="font-poppins text-xl font-medium mb-2">Filter</h1>
			<div className="shadow-xl border rounded-xl bg-white py-2 px-10 flex flex-col gap-4">
				<h1 className="font-poppins text-xl font-medium">Genre</h1>
				<div className="flex flex-wrap gap-2 my-4">
					{genre.map((GenreList) => (
						<>
							<button
								key={GenreList.id}
								onClick={() => handleGenreSelection(GenreList.name)}
								className={`py-1 px-5 rounded-xl border border-[#ffa08d] border-solid shadow-2xl font-poppins shadow-red-100 hover:scale-105 hover:duration-500 transition ${
									activeGenre === GenreList.name
										? "bg-[#E2725B] text-white scale-105"
										: "hover:bg-[#E2725B] hover:text-white"
								}`}>
								{GenreList.name}
							</button>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilterDesktop;
