import { NextRequest, NextResponse } from 'next/server';
import { quotes } from '@/quotes/quotes';
import prisma from '@/app/prisma';
import { BadRequest } from '@/app/errors/errors';

export async function POST() {
    const _data = quotes.map((quote) => ({ quote }));
    const result = await prisma.quote.createMany({ data: _data });

    return NextResponse.json(result);
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    if (!page) throw new BadRequest();
    const res = await prisma.quote.findMany({
        skip: 9 + (+page - 2) * 9,
        take: 9,
        orderBy: [{ relevance: 'desc' }, { id: 'asc' }],
    });
    return NextResponse.json(res);
}
