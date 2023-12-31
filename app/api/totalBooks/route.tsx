import prisma from "../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
	const totalBooks = await prisma.book.count();
	return NextResponse.json(
		{
			sucess: true,
			message: "List Data Total Buku",
			data: totalBooks,
		},
		{
			status: 200,
		},
	);
}
