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
		<Navbar shouldHideOnScroll className="hidden border-b-2 xl:flex bg-white">
			<NavbarContent justify="center">
				<NavbarBrand className="mr-4">
					<Link href="/dashboard">
						<h1 className="hidden font-major sm:block font-bold text-inherit">
							b<span className="text-[#E2725B]">i</span>p
							<span className="text-[#E2725B]">E</span>rp
						</h1>
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="w-[100%] flex !justify-end gap-10">
				<NavbarItem isActive={isActive("/dashboard")}>
					<Link color="foreground" href="/dashboard">
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive={isActive("/books")}>
					<Link href="/books" aria-current="page">
						Buku
					</Link>
				</NavbarItem>
				<NavbarItem isActive={isActive("/history")}>
					<Link color="foreground" href="/history">
						Riwayat
					</Link>
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
				<Button onClick={handleOpen}>
					{" "}
					<ShoppingCartIcon sx={{ fontSize: "30px", color: "black" }} />
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Text in a modal
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography>
					</Box>
				</Modal>
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
							<Link className="w-[100%]" href="/profile">
								<p>Log Out</p>
							</Link>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
}
