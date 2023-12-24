import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import NavigationBar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/footer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Total from "../components/Total";
import Link from "next/link";

export default function Dashboard() {
	return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="">
				<NavigationBar />
				<NavbarMobile />
				<div className="h-[200vh] sm:h-[100vh]">
					<div className="text-center bg-[url(/bg-elegant.avif)] xl:bg-contain max-[1288px]:object-contain max-[1288px]:bg-cover flex flex-col justify-center items-center">
						<div className="flex flex-col md:flex-row gap-2 w-[90%] sm:w-[100%] justify-center items-center">
							<img
								className="md:hidden"
								src="/buku.png"
								alt="buku"
								width="350"
							/>
							<div className="flex flex-col justify-center items-center gap-10">
								<h1 className="font-major font-bold text-xl sm:text-2xl">
									SeLamaT daTanG dI WebSite PerpusTaKaan Kami
								</h1>
								<p className="mx-14 font-poppins text-center">
									Pinjam buku dengan mudah menggunakan website library kami,
									ayoo tunggu apalagi pinjam buku favoritemu sekarang juga.
								</p>
								<Link href='/books'>
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
			</div>
			<Footer />
		</div>
	);
}
