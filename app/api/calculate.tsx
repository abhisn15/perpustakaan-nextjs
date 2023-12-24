import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ResponseData = 
  | { message: string }
  | {
      id: number;
      fine: number;
      returnedAt: Date | null; // Perbarui baris ini
    };

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	if (req.method === "POST") {
		try {
			const { loanId } = req.body as { loanId: number };
			const loan = await prisma.loan.findUnique({
				where: { id: loanId },
			});

			if (!loan) {
				return res.status(404).json({ message: "Loan not found" });
			}

			const dueDate = new Date(loan.dueDate);
			const returnedDate = new Date(); // assume return is today
			let fine = 0;

			if (returnedDate > dueDate) {
				const diffTime = Math.abs(returnedDate.getTime() - dueDate.getTime());
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
				fine = diffDays * 10000; // Rp 10,000 per day of delay
			}

			// Update loan with fine
			const updatedLoan = await prisma.loan.update({
				where: { id: loanId },
				data: { fine, returnedAt: returnedDate },
			});

			res.status(200).json({
				id: updatedLoan.id,
				fine: updatedLoan.fine,
				returnedAt: updatedLoan.returnedAt,
			});

		} catch (error) {
			res.status(500).json({ message: "Server error" });
		}
	} else {
		res.status(405).json({ message: "Method not allowed" });
	}
}
