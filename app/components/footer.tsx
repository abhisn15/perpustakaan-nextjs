"use client";

export default function Footer() {
	return (
		<footer className="min-[320px]:h-[16vh] my-6 sm:my-0 min-[764px]:h-[16vh]">
			<small className="flex flex-row gap-2 justify-center items-center">
				&copy; {new Date().getFullYear()} Developed by -{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://granada.com.gt/es/">
					Abhi Surya Nugroho
				</a>
			</small>
		</footer>
	);
}
