
const { PrismaClient } = require('@prisma/client')
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function main() {
    try {
        await prisma.$connect();
    } catch (err) {
        return Error("Database Connection Unsuccessull");
    }
}

export const GET = async (req: Request, res: NextResponse) => {
    try {
        await main();
        const user = await prisma.user.findMany();
        return NextResponse.json({ message: "Success", user }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

export const POST = async (req: Request, res: NextResponse) => {
    try {
        const { email, password } = await req.json();
        await main();

        const user = await prisma.user.create({ data: { email, password } });
        return NextResponse.json({ message: "Success", user }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

