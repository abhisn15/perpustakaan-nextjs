import prisma from "../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
	const totalUsers = await prisma.users.count();
	return NextResponse.json(
		{
			sucess: true,
			message: "List Data Users",
			data: totalUsers,
		},
		{
			status: 200,
		},
	);
}
