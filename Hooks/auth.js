// import prisma from '../../lib/prisma';
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export default async function handler(req, res,) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const user = await prisma.user.findFirst({
                where: { email: email, password: password },
            });

            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // تم العثور على المستخدم ويمكنك إجراء إجراءات تسجيل الدخول
            // ...

            return res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
