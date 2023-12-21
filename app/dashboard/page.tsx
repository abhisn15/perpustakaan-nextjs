import React from "react";
import BottomNav from "../components/BottomNav";
import NavigationBar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";

export default function User() {
  
  return (
		<div>
			<div className="text-[#333A30]">
				<div>
					<NavigationBar />
				</div>
				<div>
					<BottomNav />
				</div>
			</div>
			<div className="h-[100dvh]">
					<NavbarMobile />
				<p>INI HALAMAN USER</p>
			</div>
		</div>
	);
}
