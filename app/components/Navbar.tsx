"use client";
import React, { useEffect, useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Input,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

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

export default function NavigationBar() {
	const [activePath, setActivePath] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const router = useRouter();

	const handleSearch = () => {
		// Redirect to the search results page with the entered search term
		router.push(`/search=${searchTerm}`);
	};

	useEffect(() => {
		setActivePath(window.location.pathname);
	}, []);

	const isActive = (path: string): boolean => {
		return activePath === path;
	};

	const linkClassName = (path: string) =>
		`relative hover:border-b-2 hover:border-[#9A3412] hover:text-[#9A3412]  ${
			isActive(path)
				? "border-b-2 border-[#9A3412] text-[#9A3412] "
				: "hover:border-transparent border-expand"
		} transition-all duration-150`;

	return (
		<Navbar
			shouldHideOnScroll
			className="hidden border-b-2 xl:flex xl:flex-row xl:justify-evenly xl:items-center xl:w-[100%] bg-white">
			<NavbarContent justify="center">
				<NavbarBrand className="mr-4">
					<abbr title="ABHI PERPUSTAKAAN" className="decoration-none">
						<Link href="/dashboard">
							<h1 className="font-bold w-10 font-major text-xl text-inherit">
								b<span className="text-[#9A3412]">I</span>p
								<span className="text-[#9A3412]">E</span>rp
							</h1>
						</Link>
					</abbr>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="flex flex-row gap-10">
				<NavbarItem className={linkClassName("/dashboard")}>
					<Link href="/dashboard">Home</Link>
				</NavbarItem>
				<NavbarItem className={linkClassName("/books")}>
					<Link href="/books" aria-current="page">
						Buku
					</Link>
				</NavbarItem>
				<NavbarItem className={linkClassName("/history")}>
					<Link href="/history">Riwayat</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent as="div" className="">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
							src="/profile.avif"
						/>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Profile Actions"
						variant="flat"
						className="rounded-md border bg-white">
						<DropdownItem key="profile" className="h-14 gap-2 cursor-default">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">zoey@example.com</p>
						</DropdownItem>
						<DropdownItem
							key="settings"
							className="rounded-md hover:bg-[#e2e2e2] ">
							<Link className="w-[100%]" href="/profile">
								<p>Profile</p>
							</Link>
						</DropdownItem>
						<DropdownItem
							key="logout"
							color="danger"
							className="rounded-md hover:bg-red-500 hover:text-white">
							<Link className="w-[100%]" href="/">
								<p>Log Out</p>
							</Link>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
}
