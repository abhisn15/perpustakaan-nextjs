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
		<Navbar shouldHideOnScroll className="md:hidden border-b-2 bg-white">
			<NavbarBrand className="flex justify-between gap-2">
				<Link href="/dashboard">
					<h1 className="font-bold font-major text-inherit">bIpErp</h1>
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
					className="border-2 rounded-md mr-2"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
				<div>
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
				</div>
			</NavbarBrand>
		</Navbar>
	);
}
