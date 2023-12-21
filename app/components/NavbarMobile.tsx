'use client'
import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function NavbarMobile() {
	return (
		<Navbar shouldHideOnScroll className="sm:hidden">
			<NavbarBrand className="flex justify-center">
				<AcmeLogo />
				<p className="font-bold text-inherit">ACME</p>
			</NavbarBrand>
		</Navbar>
	);
}
