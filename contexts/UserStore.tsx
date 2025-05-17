import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export type UserType = {
    id: number,
    bio: string,
    profilePicture: string,
    isverified: boolean,
    isAdmin: boolean,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    dateOfBirth: string,
    gender: string,
    cart: [],
    
}

export type UserStore = {
    user: UserType | null,
    isLoggedIn: boolean,
    
}

export type UserActions = {
    setUser: (user: UserType) => void,
    removeUser: () => void,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    setIsLoggedOut: (isLoggedIn: boolean) => void,
}

export type UserStoreType = UserStore & UserActions

export const useUserStore = create<UserStoreType>()(persist(set => ({
    user: null,
    isLoggedIn: false,
    
    setUser: (user: UserType) => set(() => ({user, isLoggedIn: true})),
    removeUser: () => set(() => ({user: null, isLoggedIn: false})),
    setIsLoggedIn: (isLoggedIn: boolean) => set(() => ({isLoggedIn})),
    setIsLoggedOut: (isLoggedIn: boolean) => set(() => ({isLoggedIn})),

    }),

    {
        name: 'user-storage',
        partialize: (state) => ({user: state.user}),
    }
))