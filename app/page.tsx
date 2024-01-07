'use client'
import Link from 'next/link'

export default function Login() {
  localStorage.removeItem("role");
  const handleRoleSelection = (role: string) => {
		// Simpan role ke local storage
		localStorage.setItem("role", role);
	};
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 notranslate">
			<p>INI HALAMAN LOGIN</p>
			<Link href="/dashboard">
				<button onClick={() => handleRoleSelection("ADMIN")}>ADMIN</button>
			</Link>
			<Link href="/dashboard">
				<button onClick={() => handleRoleSelection("USER")}>USER</button>
			</Link>
		</main>
	);
}
