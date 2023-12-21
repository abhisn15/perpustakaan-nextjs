import React from 'react'
import BottomNav from '../components/BottomNav'
import NavbarMobile from '../components/NavbarMobile'
import NavigationBar from '../components/Navbar';

export default function Books() {
  return (
		<div>
			<div>
				<NavigationBar />
			</div>
			<div>
				<BottomNav />
      </div>
      <div>
				<NavbarMobile />
			<p>INI HALAMAN BUKU</p>
      </div>
		</div>
	);
}
