import prisma from '@/app/prisma';
import { Prisma } from '@prisma/client';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const _id = searchParams.get('id') ?? undefined;
    const _touched = searchParams.get('touched') === 'true';
    let data: Prisma.quoteUpdateInput = {
        dislikes: { increment: 1 },
        relevance: { decrement: 1 },
    };
    if (_touched) {
        data = {
            likes: { decrement: 1 },
            dislikes: { increment: 1 },
            relevance: { decrement: 2 },
        };
    }
    const result = await prisma.quote.update({
        where: { id: Number(_id) },
        data,
    });
    revalidateTag('startQuotes');
    revalidateTag('pages');
    return NextResponse.json(result);
}
