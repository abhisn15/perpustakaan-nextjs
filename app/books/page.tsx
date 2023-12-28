import React from 'react'
import BottomNav from '../components/BottomNav'
import NavbarMobile from '../components/NavbarMobile'
import NavigationBar from '../components/Navbar';
import Footer from '../components/footer';
import Filter from '../components/Filter';

export default function Books() {
  return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="">
				<NavigationBar />
				<NavbarMobile />
				<div className="h-[100dvh]">
					<div className="mx-5 my-5 xl:hidden">
						<Filter />
					</div>
					<div className="text-center text-xl mx-2 md:text-3xl xl:text-4xl">
						<h1 className="font-major font-extrabold">
							pemInJAmAn buKu TerFAVoriTe
						</h1>
					</div>
				</div>
				<div className="">
					<Footer />
				</div>
			</div>
		</div>
	);
}
