import React from 'react'
import BottomNav from '../components/BottomNav';
import NavbarMobile from '../components/NavbarMobile';
import NavigationBar from '../components/Navbar';
import Footer from '../components/footer';

export default function HistoryUser() {
  return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="">
				<NavigationBar />
				<NavbarMobile />
				<div className="h-[100dvh]">
					<p>INI HALAMAN RIWAYAT</p>
				</div>
				<div className="">
					<Footer />
				</div>
			</div>
		</div>
	);
}
