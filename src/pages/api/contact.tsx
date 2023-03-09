import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: { method: string; body: { id: any; name: any; email: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
    if (req.method === 'POST') {
        const {id, name, email } = req.body;
        await prisma.example.create({
            data: {
                id,
                name,
                email
            },
        });
        res.status(200).json({ message: 'Dati contatto inseriti con successo' });
    } else {
        res.status(405).json({ message: 'Metodo non consentito' });
    }
};

export default handler;
