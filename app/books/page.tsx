import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import NavbarMobile from "../components/NavbarMobile";
import NavigationBar from "../components/Navbar";
import Footer from "../components/footer";
import BukuStore from "../api/BukuStore";

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
					<BukuStore />
					<hr className="border"></hr>
					<Footer />
				</div>
			</div>
		</div>
	);
}
