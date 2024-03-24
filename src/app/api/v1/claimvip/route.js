import prisma from "@/libs/prisma";

export async function POST(request) {
    const { user_name, status} = await request.json();
    const data = { user_name, status };

    const createVip = await prisma.vip.create({ data });
    if (!createVip)
        return Response.json({ status: 500, isCreated: false });
        return Response.json({ status: 200, isCreated: true });
}
