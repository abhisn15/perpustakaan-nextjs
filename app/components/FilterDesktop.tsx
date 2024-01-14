import React, { useState } from "react";
import { genre } from '../data';

interface filterProps {
	OnFilter: (genre: string | null) => void;
}

const FilterDesktop: React.FC<filterProps> = ({ OnFilter }) => {
	const [activeGenre, setActiveGenre] = useState<string | null>(null);

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
		<div className="mt-9">
			<div className="shadow-xl border rounded-xl bg-white py-2 px-10 flex flex-col gap-4">
				<h1 className="font-poppins text-xl font-medium">Genre</h1>
				<div className="flex flex-wrap gap-2 mb-4">
					{genre.map((GenreList) => (
						<button
							key={GenreList.id}
							onClick={() => handleGenreSelection(GenreList.name)}
							className={`py-1 px-5 rounded-xl border border-[#ffa08d] border-solid shadow-2xl font-poppins shadow-red-100 hover:scale-105 hover:duration-500 transition ${
								activeGenre === GenreList.name
									? "bg-[#9A3412] text-white scale-105"
									: "hover:bg-[#9A3412] hover:text-white"
							}`}>
							{GenreList.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilterDesktop;
