import React from "react";
import BottomNav from "../components/BottomNav";
import NavbarMobile from "../components/NavbarMobile";
import NavigationBar from "../components/Navbar";
import Footer from "../components/footer";

export default function ProfileUser() {
	return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="">
				<NavigationBar />
				<NavbarMobile />
				<div className="h-[100dvh] my-10">
					<h1 className="text-center text-xl mx-2 md:text-3xl xl:text-4xl font-major mb-10">
						Profile
					</h1>
					<div className="flex justify-center">
						<div className="w-[80%] border border-orange-500 shadow-lg py-10 px-2 rounded-3xl">
							<div className="w-full flex justify-center mb-5">
								<div className="w-20 h-20 shadow-md rounded-full bg-slate-200"></div>
							</div>
							<h1 className="font-poppins text-center mb-5">
								Abhi Surya Nugroho
							</h1>
							<div className="flex flex-col gap-2">
								<div className="bg-white rounded-lg py-3 px-4 border font-poppins cursor-pointer hover:bg-orange-500 hover:text-white">Edit Profile</div>
								<div className="bg-white rounded-lg py-3 px-4 border cursor-pointer hover:bg-red-400 hover:text-white font-poppins">LOGOUT</div>
							</div>
						</div>
					</div>
				</div>
				<hr className="sm:mb-10 text-black border" />
				<Footer />
			</div>
		</div>
	);
}
