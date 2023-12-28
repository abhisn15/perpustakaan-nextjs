"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/MenuBook";
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

export default function BottomNav() {
	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false);

	const getPathValue = (path: string) => {
		switch (path) {
			case "/dashboards":
				return 0;
			case "/dashboard":
				return 1;
			case "/books":
				return 2;
			case "/history":
				return 3;
			case "/profile":
				return 4;
			default:
				return 0;
		}
	};

	useEffect(() => {
		const handleRouteChange = () => {
			setLoading(true); // Start loading when the route changes
			setTimeout(() => {
				setValue(getPathValue(window.location.pathname));
				setLoading(false); // Stop loading once the route is changed
			}, 0); // Timeout to allow page transition to complete
		};

		window.addEventListener("popstate", handleRouteChange);
		handleRouteChange(); // Call on initial mount

		return () => {
			window.removeEventListener("popstate", handleRouteChange);
		};
	}, []);

	return (
		<Box
			sx={{ width: "100%" }}
			className="xl:hidden fixed bottom-0 notranslate border bg-white pb-4 z-10">
				<div className="w-[100%] flex flex-row justify-between items-center">
					<Link href="/dashboard" passHref>
						<BottomNavigationAction
							label="Home"
							icon={<HomeIcon sx={{ fontSize: 30 }} />}
							sx={{ color: !loading && value === 1 ? "#40587E" : "inherit" }}
						/>
					</Link>
					<Link href="/books" passHref>
						<BottomNavigationAction
							label="Buku"
							icon={<LibraryBooksIcon sx={{ fontSize: 30 }} />}
							sx={{ color: !loading && value === 2 ? "#40587E" : "inherit" }}
						/>
					</Link>
					<Link href="/history" passHref>
						<BottomNavigationAction
							label="Riwayat"
							icon={<HistoryIcon sx={{ fontSize: 30 }} />}
							sx={{ color: !loading && value === 3 ? "#40587E" : "inherit" }}
						/>
					</Link>
					<Link href="/profile" passHref>
						<BottomNavigationAction
							label="Profile"
							icon={<AccountCircleIcon sx={{ fontSize: 30 }} />}
							sx={{ color: !loading && value === 4 ? "#40587E" : "inherit" }}
						/>
					</Link>
				</div>
		</Box>
	);
}
