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
				<div className="h-[100dvh]  my-10">
					<h1 className='font-major font-bold text-center'>rIwayaT PemInJaman</h1>
				</div>
				<div className="">
					<Footer />
				</div>
			</div>
		</div>
	);
}
