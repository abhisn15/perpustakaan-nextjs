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
		<Navbar shouldHideOnScroll className="hidden border-b-2 xl:flex bg-white">
			<NavbarContent justify="center">
				<NavbarBrand className="mr-4">
					<Link href="/dashboard">
						<h1 className="font-bold font-poppins text-inherit">
							B<span className="text-[#9A3412]">I</span>P
							<span className="text-[#9A3412]">E</span>RP
						</h1>
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="w-[100%] flex flex-row !justify-end items-center gap-10">
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

			<NavbarContent as="div" className="items-center" justify="end">
				<Input
					classNames={{
						base: "max-w-full sm:max-w-[10rem] h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					className="border-2 rounded-md"
					placeholder="Type to search..."
					size="sm"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
				
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
							src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
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
