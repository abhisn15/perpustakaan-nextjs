import React from 'react'
import BottomNav from '../components/BottomNav';
import NavbarMobile from '../components/NavbarMobile';
import NavigationBar from '../components/Navbar';
import Footer from '../components/footer';

export default function HistoryUser() {
	const peminjaman = [
		{
			id: "1",
			judul: "Sikancil Anak yang Nakal",
			genre: "Fiksi",
			img_book: "/buku.avif",
			tanggal_peminjaman: "2024-01-06 19:03:17.000",
			tanggal_pengembalian: "2024-01-07 19:03:17.000",
		},
		{
			id: "2",
			judul: "Sikancil Anak yang Nakal",
			genre: "Fiksi",
			img_book: "/buku.avif",
			tanggal_peminjaman: "2024-01-06 19:03:17.000",
			tanggal_pengembalian: "2024-01-07 19:03:17.000",
		},
	];
  return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="">
				<NavigationBar />
				<NavbarMobile />
				<div className="h-[100dvh] my-10">
					<h1 className="text-center text-xl mx-2 md:text-3xl xl:text-4xl font-major">
						rIwayaT PemInJaman
					</h1>
					<div className="flex flex-wrap justify-center mt-20 gap-10">
						{peminjaman.map((riwayat) => (
							<div
								key={riwayat.id}
								className="relative flex w-80 flex-col justify-center items-center rounded-xl border-2 bg-white bg-clip-border text-gray-700 shadow-md">
								<div className="relative mx-4 -mt-6 h-40 flex justify-center">
									<div className="drop-shadow-md">
										<img
											src={riwayat.img_book}
											className="h-[150px] drop-shadow-2xl"
											alt="buku"
										/>
									</div>
								</div>
								<div className="p-6 flex flex-col justify-center text-center">
									<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
										{riwayat.judul}
									</h5>
									<p className="block mt-2 font-sans text-base font-normal leading-relaxed text-inherit antialiased"></p>
									<p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
										Genre: {riwayat.genre}
									</p>
									<p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
										Tanggal peminjaman: {riwayat.tanggal_peminjaman}
									</p>
									<p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
										Tanggal pengembalian: {riwayat.tanggal_pengembalian}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<hr className="sm:mb-10 text-black border" />
				<Footer />
			</div>
		</div>
	);
}
