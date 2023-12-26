import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import NavigationBar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/footer";
import Total from "../components/Total";
import Link from "next/link";

export default function Dashboard() {
	const author = [
		{
			id: "1",
			name: "Abhi Surya Nugroho",
			genre: "Fiksi",
			img_book: "/buku.png",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "2",
			name: "Abhi Surya Nugroho",
			genre: "Sains Fiksi",
			img_book: "/buku.png",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "3",
			name: "Abhi Surya Nugroho",
			genre: "Romansa",
			img_book: "/buku.png",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "4",
			name: "Abhi Surya Nugroho",
			genre: "Thriller, Horor",
			img_book: "/buku.png",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "5",
			name: "Abhi Surya Nugroho",
			genre: "Misteri",
			img_book: "/buku.png",
			desk: "lorem ipsum doilor sit amet",
		},
	];

	return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="flex flex-col">
				<NavigationBar />
				<NavbarMobile />
				<div className="min-[300px]:h-[170dvh] min-[340px]:h-[110dvh] min-[370px]:h-[80dvh] md:h-[100dvh] xl:h-[90dvh]">
					<div className="text-center bg-[url('/bg-elegant.avif')] md:h-[70dvh] xl:h-[60dvh] xl:bg-contain max-[1288px]:object-contain max-[1288px]:bg-cover flex flex-col justify-center items-center">
						<div className="flex flex-col md:flex-row gap-2 md:gap-10 w-[90%] justify-center items-center pt-4">
							<img
								className="md:hidden mb-2"
								src="/buku.png"
								alt="buku"
								width="150"
							/>
							<div className="flex flex-col justify-center items-center gap-10">
								<h1 className="font-major font-bold text-xl sm:text-2xl">
									SeLamaT daTanG dI WebSite PerpusTaKaan Kami
								</h1>
								<p className="mx-14 font-poppins text-center xl:w-[70%]">
									Pinjam buku dengan mudah menggunakan website library kami,
									ayoo tunggu apalagi pinjam buku favoritemu sekarang juga.
								</p>
								<Link href="/books">
									<button className="bg-white rounded-xl border-2 border-slate-400 border-solid shadow-2xl font-poppins shadow-red-100 px-5 py-3 hover:bg-slate-800 hover:text-white ">
										Pinjam Buku Yukk..
									</button>
								</Link>
							</div>
							<img className="hidden md:flex" src="/buku.png" alt="buku" />
						</div>
					</div>
					<Total />
				</div>
				<div className="mt-10 min-[370px]:mt-60 min-[391px]:mt-36 sm:mt-0 md:mt-10 text-center text-xl md:text-3xl xl:text-4xl">
					<h1 className="font-major font-extrabold">PenuLIs</h1>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-10 mb-10 mt-16 mx-5">
					{author.map((penulis) => (
						<div
							key={penulis.id}
							className="relative flex w-80 flex-col rounded-xl border-2 bg-white bg-clip-border text-gray-700 shadow-md">
							<div className="relative mx-4 -mt-6 h-40 flex justify-center">
								<div className="drop-shadow-md">
									<img
										src={penulis.img_book}
										className="h-[150px] drop-shadow-2xl"
										alt="buku"
									/>
								</div>
							</div>
							<div className="p-6 flex flex-col justify-center text-center">
								<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
									{penulis.name}
								</h5>
								<p className="block mt-2 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
									Genre: {penulis.genre}
								</p>
								<p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
									{penulis.desk}
								</p>
							</div>
							<div className="p-6 pt-0 flex justify-center">
								<button
									data-ripple-light="true"
									type="button"
									className="select-none rounded-lg bg-slate-800 py-3 px-6 text-center align-middle font-sans text-xs font-medium text-white shadow-md shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
									<h1 className="font-poppins">
										<span className="text-md">+</span> Keranjang
									</h1>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
