import prisma from '@/app/prisma';
import { NextRequest, NextResponse } from 'next/server';

function getRandomID(max: number) {
    return Math.floor(Math.random() * max) + 1;
}

export async function GET() {
    const quotesCount = await prisma.quote.count();
    const randomID = getRandomID(quotesCount);
    const randomQuote = await prisma.quote.findUnique({
        where: { id: randomID },
    });
    return NextResponse.json(randomQuote);
}
