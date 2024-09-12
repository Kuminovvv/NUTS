import { create } from 'zustand';

export interface UserStore {
    name: string;
    update: (name: string) => void;
}
export const useUserStore = create<UserStore>((set) => ({
    name: '',
    update: (name) => set(() => ({ name })),
}));
