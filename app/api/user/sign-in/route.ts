
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

export const POST = async (req: Request, res: NextResponse) => {
    try {
        const { email, password } = await req.json();
        await main();
        const user = await prisma.user.findFirst({
            where: { email: email, password: password },
        });

        return NextResponse.json({ message: "Success", user }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};




// export default async function handler(req, res,) {
//     if (req.method === 'POST') {
//         const { email, password } = req.body;
//         try {
//             const user = await prisma.user.findFirst({
//                 where: { email: email, password: password },
//             });

//             if (!user) {
//                 return res.status(401).json({ message: 'Invalid credentials' });
//             }

//             // تم العثور على المستخدم ويمكنك إجراء إجراءات تسجيل الدخول
//             // ...

//             return res.status(200).json({ message: 'Login successful' });
//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ message: 'Something went wrong' });
//         }
//     } else {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }
// }
