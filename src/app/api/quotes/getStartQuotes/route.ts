import prisma from '@/app/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    const quotes = await prisma.quote.findMany({
        take: 9,
        orderBy: { relevance: 'desc' },
    });
    return NextResponse.json(quotes);
}
