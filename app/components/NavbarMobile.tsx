"use client";
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import Link from "next/link";
import { Box, Button, Modal, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function NavbarMobile() {
	const [activePath, setActivePath] = useState("");
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		setActivePath(window.location.pathname);
	}, []);

	const isActive = (path: string): boolean => {
		return activePath === path;
	};
	return (
		<Navbar shouldHideOnScroll className="xl:hidden border-b-2 bg-white">
			<NavbarBrand className="flex justify-center gap-2">
				<Link href="/dashboard">
					<h1 className="font-bold text-3xl font-major text-inherit">
						b<span className="text-[#9A3412]">I</span>p
						<span className="text-[#9A3412]">E</span>rp
					</h1>
				</Link>
			</NavbarBrand>
		</Navbar>
	);
}
