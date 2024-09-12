'use client';
import React from 'react';
import { useUserStore } from '../../entities/store/user-store';
import { Input, Textarea } from '@nextui-org/input';

export default function Input_Example() {
    const { name, update } = useUserStore();
    return (
        <div className="container mx-auto grid  gap-4 p-2 md:p-8">
            <Textarea
                value={name}
                label="Текст"
                placeholder="Здесь будет находиться ваш текст"
                disabled
                classNames={{ input: ['max-h-[40px]'] }}
            />

            <Input
                value={name}
                onChange={(event) => update(event.target.value)}
                type="text"
                label="Ввод текста"
            />
        </div>
    );
}
