"use client";
import React, { useEffect, useRef, useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const useCounter = (total: number, startCounting: boolean) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!startCounting) return;

		let start = 0;
		const end = total / 100;

		const interval = setInterval(() => {
			start += end;
			if (start > total) start = total;
			setCount(start);
		}, 20);

		return () => clearInterval(interval);
	}, [total, startCounting]);

	return Math.floor(count);
};

export default function Total() {
	    const [startCounting, setStartCounting] = useState(false);
			const containerRef = useRef(null);

			useEffect(() => {
				const observer = new IntersectionObserver((entries) => {
					const [entry] = entries;
					if (entry.isIntersecting) {
						setStartCounting(true);
						observer.unobserve(entry.target); 
					}
				});

				if (containerRef.current) {
					observer.observe(containerRef.current);
				}

				return () => {
					if (containerRef.current) {
						observer.unobserve(containerRef.current);
					}
				};
			}, []);

			const totalBuku = useCounter(2000, startCounting);
			const totalUser = useCounter(2000, startCounting);
			const totalPinjam = useCounter(2000, startCounting);
	return (
		<div
			ref={containerRef}
			className="w-[100%] flex justify-center bg-white shadow-red-100 mt-5 mb-14">
			<div className="bg-white mx-5 sm:mx-0 rounded-xl drop-shadow-xl border px-5 py-5 flex flex-row justify-center items-center gap-5 md:gap-20">
				<div className="flex flex-col justify-center items-center gap-2">
					<LibraryBooksIcon className="text-[30px] md:text-[35px]" />
					<h1 className="font-major font-extrabold text-center text-[9px] md:text-[15px]">
						Total buku
					</h1>
					<p className="font-poppins font-bold text-xs md:text-xl">
						{totalBuku}
					</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-2">
					<PeopleAltIcon className="text-[30px] md:text-[35px]" />
					<h1 className="font-major font-extrabold text-center text-[9px] md:text-[15px]">
						Total user
					</h1>
					<p className="font-poppins font-bold text-xs md:text-xl">
						{totalUser}
					</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-2">
					<ReceiptLongIcon className="text-[30px] md:text-[35px]" />
					<h1 className="font-major font-extrabold text-center text-[9px] md:text-[15px]">
						Total pinjam
					</h1>
					<p className="font-poppins font-bold text-xs md:text-xl">
						{totalPinjam}
					</p>
				</div>
			</div>
		</div>
	);
}
