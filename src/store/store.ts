import { Iquote } from '@/types/types';
import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface useLikesStatus {
    likes: boolean;
    dislikes: boolean;
    setLiked: () => void;
    setDisliked: () => void;
    setStatus: (status: { like: boolean; dislike: boolean }) => void;
}

interface useLikesStatusPersist {
    data: Array<{ id: number; likes: boolean; dislikes: boolean }>;
    setLiked: (id: number) => void;
    setDisliked: (id: number) => void;
    setStatus: (
        id: number,
        status: { like: boolean; dislike: boolean }
    ) => void;
}

interface useQuotesPagination {
    isLoading: boolean;
    quotes: Iquote[];
    getPage: (page: number) => void;
}

export const useLikesStatus = create<useLikesStatus>((set) => ({
    likes: false,
    dislikes: false,
    setLiked: () => set(() => ({ likes: true, dislikes: false })),
    setDisliked: () => set(() => ({ likes: false, dislikes: true })),
    setStatus: (status: { like: boolean; dislike: boolean }) =>
        set(() => ({ likes: status.like, dislikes: status.dislike })),
}));

export const useLikesStatusPersist = create<useLikesStatusPersist>()(
    persist(
        (set, get) => ({
            data: [],
            setLiked(id) {
                const quoteInd = get().data.findIndex((item) => item.id === id);
                if (!(quoteInd > -1)) {
                    set(
                        produce<useLikesStatusPersist>((state) => {
                            state.data.push({
                                id,
                                likes: true,
                                dislikes: false,
                            });
                        })
                    );
                } else {
                    set(
                        produce<useLikesStatusPersist>((state) => {
                            state.data[quoteInd] = {
                                id,
                                likes: true,
                                dislikes: false,
                            };
                        })
                    );
                }
            },
            setDisliked(id) {
                const quoteInd = get().data.findIndex((item) => item.id === id);
                if (!(quoteInd > -1)) {
                    set(
                        produce<useLikesStatusPersist>((state) => {
                            state.data.push({
                                id,
                                likes: false,
                                dislikes: true,
                            });
                        })
                    );
                } else {
                    set(
                        produce<useLikesStatusPersist>((state) => {
                            state.data[quoteInd] = {
                                id,
                                likes: false,
                                dislikes: true,
                            };
                        })
                    );
                }
            },
            setStatus(id, status) {
                const quoteInd = get().data.findIndex((item) => item.id === id);
                if (!(quoteInd > -1)) {
                    set(
                        produce<useLikesStatusPersist>((state) => {
                            state.data.push({
                                id,
                                likes: status.like,
                                dislikes: status.dislike,
                            });
                        })
                    );
                } else {
                    set(
                        produce<useLikesStatusPersist>((state) => {
                            state.data[quoteInd] = {
                                id,
                                likes: status.like,
                                dislikes: status.dislike,
                            };
                        })
                    );
                }
            },
        }),
        { name: 'likesCount' }
    )
);

export const useQuotesPagination = create<useQuotesPagination>((set) => ({
    quotes: [],
    isLoading: false,
    getPage: async (page: number) => {
        set(
            produce<useQuotesPagination>((state) => {
                state.isLoading = true;
            })
        );
        const res = await fetch(`api/quotes?page=${page}`, {
            next: { tags: ['pages'] },
        });
        const data = await res.json();
        await sleep(3000);
        set(
            produce<useQuotesPagination>((state) => {
                state.isLoading = false;
                state.quotes = state.quotes.concat(data);
            })
        );
    },
}));
