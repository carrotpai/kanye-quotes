'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { shallow } from 'zustand/shallow';

import dislikeIcon from '../../../public/icons/dislike.svg';
import likeIcon from '../../../public/icons/like.svg';

import styles from './likeCount.module.css';
import { dislikeCountIncrement, likeCountIncrement } from '@/services/getQuote';
import { BadRequest } from '@/app/errors/errors';
import { useLikesStatusPersist } from '@/store/store';
import useStore from '@/hooks/useStore';

interface likesCountProps {
    type: 'home' | 'hall';
    isLoading: boolean;
    likes: number;
    dislikes: number;
    id: number;
}

interface Iquote {
    quote: string;
    id: number;
    dislikes: number;
    likes: number;
}

function LikeCount({ type, likes, dislikes, id, isLoading }: likesCountProps) {
    const [likeCount, setLikeCount] = useState({
        likes: likes,
        dislikes: dislikes,
    });
    useEffect(() => {
        setLikeCount({
            likes: likes,
            dislikes: dislikes,
        });
    }, [likes, dislikes]);
    const likesStatusInStorage = useStore(useLikesStatusPersist, (state) =>
        state.data.find((item) => item.id === id, shallow)
    );
    let likesStatus = { likes: false, dislikes: false };
    if (likesStatusInStorage) {
        likesStatus = likesStatusInStorage;
    }

    const setLiked = useLikesStatusPersist((state) => state.setLiked);
    const setDisliked = useLikesStatusPersist((state) => state.setDisliked);
    return (
        <div
            className={`${styles.likecount} ${
                type === 'hall' && styles.likecount_hall
            }`}
        >
            <button
                className={`${styles.dislikes} ${styles.likecount__item} ${
                    type === 'hall' && styles.likecount__item_hall
                } ${(likesStatus?.dislikes || isLoading) && styles.disabled}`}
                onClick={() => {
                    const isTouched =
                        likesStatus?.dislikes || likesStatus?.likes;
                    let countData = { likes, dislikes: dislikes + 1 };
                    if (isTouched) {
                        countData = {
                            likes: likeCount.likes - 1,
                            dislikes: likeCount.dislikes + 1,
                        };
                    }

                    setLikeCount(countData);

                    try {
                        dislikeCountIncrement(Boolean(isTouched), id);
                    } catch (error) {
                        if (error instanceof BadRequest) {
                            console.log(
                                `${error.message} code: ${error.statusCode}`
                            );
                        }
                    }

                    setDisliked(id);
                }}
            >
                <Image
                    src={dislikeIcon.src}
                    width={22}
                    height={20}
                    alt="dislike icon"
                />
                <p>{likeCount.dislikes}</p>
            </button>
            <button
                className={`${styles.likes} ${styles.likecount__item} ${
                    type === 'hall' && styles.likecount__item_hall
                } ${(likesStatus?.likes || isLoading) && styles.disabled}`}
                onClick={() => {
                    const isTouched =
                        likesStatus?.dislikes || likesStatus?.likes;
                    let countData = { likes: likes + 1, dislikes };
                    if (isTouched) {
                        countData = {
                            likes: likeCount.likes + 1,
                            dislikes: likeCount.dislikes - 1,
                        };
                    }

                    setLikeCount(countData);

                    try {
                        likeCountIncrement(Boolean(isTouched), id);
                    } catch (error) {
                        if (error instanceof BadRequest) {
                            console.log(
                                `${error.message} code: ${error.statusCode}`
                            );
                        }
                    }
                    setLiked(id);
                }}
            >
                <Image
                    src={likeIcon.src}
                    width={20}
                    height={16}
                    alt="like icon"
                />
                <p>{likeCount.likes}</p>
            </button>
        </div>
    );
}

export default LikeCount;
