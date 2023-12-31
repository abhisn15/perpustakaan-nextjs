import prisma from "../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
	const totalPinjam = await prisma.loan.count();
	return NextResponse.json(
		{
			sucess: true,
			message: "List Data Peminjaman",
			data: totalPinjam,
		},
		{
			status: 200,
		},
	);
}
