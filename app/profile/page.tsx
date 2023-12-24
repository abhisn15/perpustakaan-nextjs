import React from 'react'
import BottomNav from '../components/BottomNav';
import NavbarMobile from '../components/NavbarMobile';
import NavigationBar from '../components/Navbar';
import Footer from '../components/footer';

export default function ProfileUser() {
  return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="">
				<NavigationBar />
				<NavbarMobile />
				<div className="h-[100dvh]">
					<p>INI HALAMAN PROFILE</p>
				</div>
				<div className="">
					<Footer />
				</div>
			</div>
		</div>
	);
}
