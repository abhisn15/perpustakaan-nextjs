import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import NavbarMobile from "../components/NavbarMobile";
import NavigationBar from "../components/Navbar";
import Footer from "../components/footer";
import Filter from "../components/Filter";
import Books from "../api/Books";

export default function Buku() {

	return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="">
				<NavigationBar />
				<NavbarMobile />
				<div className="h-[100dvh]">
					<Books />
					<hr className="border"></hr>
					<Footer />
				</div>
			</div>
		</div>
	);
}
