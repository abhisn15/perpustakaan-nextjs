import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import NavigationBar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/footer";
import Total from "../components/Total";
import Link from "next/link";

export default function Dashboard() {
	const popular = [
		{
			id: "1",
			name: "Abhi Surya Nugroho",
			judul: 'Sikancil Anak yang Nakal',
			genre: "Fiksi",
			img_book: "/buku.avif",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "2",
			name: "Abhi Surya Nugroho",
			judul: 'Doctor Doom - Mereboot Alam Semesta',
			genre: "Sains Fiksi",
			img_book: "/buku.avif",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "3",
			name: "Abhi Surya Nugroho",
			judul: 'Kisah Romansa Habibie & Ainun',
			genre: "Romansa",
			img_book: "/buku.avif",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "4",
			name: "Abhi Surya Nugroho",
			judul: 'Pamali',
			genre: "Horor",
			img_book: "/buku.avif",
			desk: "lorem ipsum dolor sit amet",
		},
		{
			id: "5",
			name: "Abhi Surya Nugroho",
			judul: 'Misteri Pohon Beringin',
			genre: "Misteri",
			img_book: "/buku.avif",
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
				<div className="md:h-[100dvh] xl:h-[90dvh]">
					<div className="text-center bg-[url('/bg-elegant.avif')] md:h-[70dvh] xl:h-[60dvh] xl:bg-contain max-[1288px]:object-contain max-[1288px]:bg-cover flex flex-col justify-center items-center">
						<div className="flex flex-col md:flex-row gap-2 md:gap-10 w-[90%] justify-center items-center pt-4">
							<img
								className="md:hidden mb-2"
								src="/buku.avif"
								alt="buku"
								width="150"
							/>
							<div className="flex flex-col justify-center items-center gap-10">
								<h1 className="font-major font-bold text-xl sm:text-2xl">
									SeLamaT daTanG dI WebSite PerpusTaKaan Kami
								</h1>
								<p className="mx-14 font-poppins text-center xl:w-[70%]">
									Pinjam buku dengan mudah menggunakan website perpustakaan
									kami, ayoo tunggu apalagi pinjam buku favoritemu sekarang
									juga.
								</p>
								<Link href="/books">
									<button className="bg-white rounded-xl border-2 border-[#ffa08d] border-solid shadow-2xl font-poppins shadow-red-100 px-5 py-3 hover:bg-[#E2725B] hover:text-white hover:scale-105 transition hover:duration-300">
										Pinjam Buku Yukk..
									</button>
								</Link>
							</div>
							<img className="hidden md:flex" src="/buku.avif" alt="buku" />
						</div>
					</div>
					<Total />
				</div>
				<div className="text-center text-xl mx-2 md:text-3xl xl:text-4xl">
					<h1 className="font-major font-extrabold">
						pemInJAmAn buKu TerFAVoriTe
					</h1>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-10 2xl:gap-20 xl:gap-20 mb-10 mt-16 mx-5">
					{popular.map((penulis) => (
						<div
							key={penulis.id}
							className="relative flex w-80 flex-col justify-center items-center rounded-xl border-2 bg-white bg-clip-border text-gray-700 shadow-md">
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
									{penulis.judul}
								</h5>
								<p className="block mt-2 font-sans text-base font-normal leading-relaxed text-inherit antialiased">
									Penulis: {penulis.name}
								</p>
								<p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
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
									className="select-none rounded-lg bg-[#E2725B] py-3 px-6 text-center align-middle font-sans text-xs font-medium text-white shadow-md shadow-slate-500 transition-all hover:shadow-lg hover:shadow-slate-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
									<h1 className="font-poppins">
										<span className="text-md">+</span> Keranjang
									</h1>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<hr className="sm:mb-10 text-black border" />
			<Footer />
			<div className="flex flex-col gap-5 group mx-2 cursor-pointer">
				
			</div>
		</div>
	);
}
