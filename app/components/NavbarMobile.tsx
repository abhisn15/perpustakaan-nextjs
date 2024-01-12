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
			<NavbarBrand className="flex justify-between gap-2">
				<Link href="/dashboard">
					<h1 className="font-bold font-major text-inherit">
						B<span className="text-[#9A3412]">I</span>P
						<span className="text-[#9A3412]">E</span>RP
					</h1>
				</Link>
				<Input
					classNames={{
						base: "max-w-full sm:max-w-[20rem] h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					placeholder="Search.."
					size="sm"
					className="border-2 rounded-md ml-4"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
			</NavbarBrand>
		</Navbar>
	);
}
