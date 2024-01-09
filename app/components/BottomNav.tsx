"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
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
			setLoading(true); 
			setTimeout(() => {
				setValue(getPathValue(window.location.pathname));
				setLoading(false); 
			}, 0); 
		};

		window.addEventListener("popstate", handleRouteChange);
		handleRouteChange(); 

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
							sx={{ color: !loading && value === 1 ? "#9A3412" : "inherit" }}
						/>
					</Link>
					<Link href="/books" passHref>
						<BottomNavigationAction
							label="Buku"
							icon={<LibraryBooksIcon sx={{ fontSize: 30 }} />}
							sx={{ color: !loading && value === 2 ? "#9A3412" : "inherit" }}
						/>
					</Link>
					<Link href="/history" passHref>
						<BottomNavigationAction
							label="Riwayat"
							icon={<HistoryIcon sx={{ fontSize: 30 }} />}
							sx={{ color: !loading && value === 3 ? "#9A3412" : "inherit" }}
						/>
					</Link>
					<Link href="/profile" passHref>
						<BottomNavigationAction
							label="Profile"
							icon={<AccountCircleIcon sx={{ fontSize: 30 }} />}
							sx={{ color: !loading && value === 4 ? "#9A3412" : "inherit" }}
						/>
					</Link>
				</div>
		</Box>
	);
}
